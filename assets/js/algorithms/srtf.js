const srtf = (processes) => {
    let currentTime = 0;
    const completedProcesses = [];
    const ganttChart = [];
    const processesCopy = processes.map(p => ({
        ...p,
        remainingTime: p.burstTime,
        completionTime: 0,
        waitingTime: 0,
        turnaroundTime: 0,
        startTimes: []
    }));

    while (completedProcesses.length < processes.length) {
        const readyProcesses = processesCopy.filter(p => p.arrivalTime <= currentTime && p.remainingTime > 0);

        if (readyProcesses.length === 0) {
            currentTime++;
            continue;
        }

        readyProcesses.sort((a, b) => a.remainingTime - b.remainingTime);
        const currentProcess = readyProcesses[0];

        if (currentProcess.startTimes.length === 0) {
            currentProcess.startTimes.push(currentTime);
        }

        currentProcess.remainingTime--;
        currentTime++;

        const lastGanttBlock = ganttChart[ganttChart.length - 1];
        if (ganttChart.length === 0 || lastGanttBlock.processName !== currentProcess.name) {
            ganttChart.push({
                processName: currentProcess.name,
                startTime: currentTime - 1,
                endTime: currentTime
            });
        } else {
            lastGanttBlock.endTime = currentTime;
        }

        if (currentProcess.remainingTime === 0) {
            currentProcess.completionTime = currentTime;
            currentProcess.turnaroundTime = currentProcess.completionTime - currentProcess.arrivalTime;
            currentProcess.waitingTime = currentProcess.turnaroundTime - currentProcess.burstTime;
            completedProcesses.push(currentProcess);
        }
    }

    // This is the fix: return the `completedProcesses` array, not `processesCopy`.
    return {
        ganttData: ganttChart,
        processes: completedProcesses
    };
};