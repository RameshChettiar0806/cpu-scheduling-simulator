const visualizer = (() => {
    const ganttChart = document.getElementById('gantt-chart');
    const readyQueueDiv = document.getElementById('ready-queue');
    const completedProcessesDiv = document.getElementById('completed-processes');
    const detailedMetricsTableContainer = document.getElementById('detailed-metrics-table-container'); // New container

    const visualizeGanttChart = (ganttData) => {
        ganttChart.innerHTML = '';
        ganttData.forEach(block => {
            const duration = block.endTime - block.startTime;
            const blockDiv = document.createElement('div');
            blockDiv.classList.add('process-block');
            blockDiv.style.width = `${duration * 20}px`;
            blockDiv.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
            blockDiv.textContent = block.processName;
            ganttChart.appendChild(blockDiv);
        });
    };

    const updateReadyQueue = (processes) => {
        readyQueueDiv.innerHTML = '';
        if (processes.length > 0) {
            processes.forEach(p => {
                const processDiv = document.createElement('div');
                processDiv.classList.add('process');
                processDiv.textContent = p.name;
                readyQueueDiv.appendChild(processDiv);
            });
        } else {
            readyQueueDiv.textContent = 'No processes added.';
        }
    };

    const updateCompletedProcesses = (processes) => {
        completedProcessesDiv.innerHTML = '';
        const completed = processes.filter(p => p.completionTime > 0);
        if (completed.length > 0) {
            completed.forEach(p => {
                const processDiv = document.createElement('div');
                processDiv.classList.add('process');
                processDiv.textContent = p.name;
                completedProcessesDiv.appendChild(processDiv);
            });
        } else {
            completedProcessesDiv.textContent = 'No processes completed yet.';
        }
    };

    const displayMetricsTable = (processes) => {
        detailedMetricsTableContainer.innerHTML = ''; // Clear previous table
        
        const tableHtml = `
            <h3>Detailed Metrics</h3>
            <table class="metrics-table">
                <thead>
                    <tr>
                        <th>Process</th>
                        <th>AT</th>
                        <th>BT</th>
                        <th>ST</th>
                        <th>CT</th>
                        <th>TAT</th>
                        <th>WT</th>
                        <th>RT</th>
                    </tr>
                </thead>
                <tbody>
                    ${processes.map(p => `
                        <tr>
                            <td>${p.name}</td>
                            <td>${p.arrivalTime}</td>
                            <td>${p.burstTime}</td>
                            <td>${p.startTimes[0] !== undefined ? p.startTimes[0] : '-'}</td>
                            <td>${p.completionTime}</td>
                            <td>${p.turnaroundTime}</td>
                            <td>${p.waitingTime}</td>
                            <td>${p.startTimes[0] !== undefined ? p.startTimes[0] - p.arrivalTime : '-'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        detailedMetricsTableContainer.innerHTML = tableHtml;
    };

    const clear = () => {
        ganttChart.innerHTML = '';
        readyQueueDiv.innerHTML = 'No processes added.'; // Reset text
        completedProcessesDiv.innerHTML = 'No processes completed yet.'; // Reset text
        detailedMetricsTableContainer.innerHTML = ''; // Clear detailed metrics table
    };

    return {
        visualizeGanttChart,
        updateReadyQueue,
        updateCompletedProcesses,
        displayMetricsTable,
        clear
    };
})();