const fcfs = (processes) => {
    // Sort processes by arrival time to simulate FCFS
    processes.sort((a, b) => a.arrivalTime - b.arrivalTime);
    
    let currentTime = 0;
    const ganttChart = [];

    // Iterate through each process to calculate metrics
    for (const process of processes) {
        // If the CPU is idle, set currentTime to the process's arrival time
        if (currentTime < process.arrivalTime) {
            currentTime = process.arrivalTime;
        }

        // Set the start time
        const startTime = currentTime;
        process.startTimes.push(startTime);

        // Calculate the end time and update currentTime
        const finishTime = currentTime + process.burstTime;
        
        // Update all metrics for the process
        process.completionTime = finishTime;
        process.turnaroundTime = finishTime - process.arrivalTime;
        process.waitingTime = process.turnaroundTime - process.burstTime;
        
        // Add data to the Gantt chart
        ganttChart.push({
            processName: process.name,
            startTime: startTime,
            endTime: finishTime
        });

        // Move the timeline forward
        currentTime = finishTime;
    }

    // Return both the Gantt chart data and the updated processes
    return { ganttData: ganttChart, processes: processes };
};