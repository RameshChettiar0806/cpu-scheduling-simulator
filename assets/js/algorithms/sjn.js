const sjn = (processes) => {
    const processesCopy = processes.map(p => ({ ...p }));
    let currentTime = 0;
    const completedProcesses = [];
    const ganttChart = [];
    while (completedProcesses.length < processes.length) {
        const readyQueue = processesCopy.filter(p => p.arrivalTime <= currentTime && !completedProcesses.includes(p));
        if (readyQueue.length > 0) {
            readyQueue.sort((a, b) => a.burstTime - b.burstTime);
            const currentProcess = readyQueue[0];
            const startTime = currentTime;
            const finishTime = currentTime + currentProcess.burstTime;
            
            currentProcess.startTimes = [startTime];
            currentProcess.completionTime = finishTime;
            currentProcess.turnaroundTime = finishTime - currentProcess.arrivalTime;
            currentProcess.waitingTime = currentProcess.turnaroundTime - currentProcess.burstTime;
            
            ganttChart.push({
                processName: currentProcess.name,
                startTime: startTime,
                endTime: finishTime
            });
            currentTime = finishTime;
            completedProcesses.push(currentProcess);
        } else {
            currentTime++;
        }
    }
    return { ganttData: ganttChart, processes: completedProcesses };
};