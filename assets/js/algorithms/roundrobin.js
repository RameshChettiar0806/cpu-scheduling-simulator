const roundRobin = (processes, quantum) => {
    const processesCopy = processes.map(p => ({ ...p, remainingTime: p.burstTime }));
    let currentTime = 0;
    const queue = [];
    const completed = [];
    const ganttChart = [];
    let processIndex = 0;

    while (completed.length < processes.length) {
        processesCopy.filter(p => p.arrivalTime <= currentTime && !queue.includes(p) && !completed.includes(p))
            .sort((a, b) => a.arrivalTime - b.arrivalTime)
            .forEach(p => queue.push(p));

        if (queue.length > 0) {
            const currentProcess = queue.shift();
            
            if (currentProcess.startTimes.length === 0) {
                currentProcess.startTimes.push(currentTime);
            }
            
            const executionTime = Math.min(currentProcess.remainingTime, quantum);
            const startTime = currentTime;
            currentTime += executionTime;
            currentProcess.remainingTime -= executionTime;
            
            ganttChart.push({
                processName: currentProcess.name,
                startTime: startTime,
                endTime: currentTime
            });
            
            if (currentProcess.remainingTime === 0) {
                currentProcess.completionTime = currentTime;
                currentProcess.turnaroundTime = currentProcess.completionTime - currentProcess.arrivalTime;
                currentProcess.waitingTime = currentProcess.turnaroundTime - currentProcess.burstTime;
                completed.push(currentProcess);
            } else {
                processesCopy.filter(p => p.arrivalTime <= currentTime && !queue.includes(p) && !completed.includes(p))
                    .sort((a, b) => a.arrivalTime - b.arrivalTime)
                    .forEach(p => queue.push(p));
                queue.push(currentProcess);
            }
        } else {
            currentTime++;
        }
    }
    return { ganttData: ganttChart, processes: completed };
};