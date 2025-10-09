document.addEventListener('DOMContentLoaded', () => {
    let processList = [];

    const numProcessesInput = document.getElementById('num-processes');
    const generateTableBtn = document.getElementById('generate-table-btn');
    const processTableWrapper = document.getElementById('process-table-wrapper');
    const addProcessesFromTableBtn = document.getElementById('add-processes-from-table-btn');

    const algorithmSelect = document.getElementById('algorithm-select');
    const quantumTimeGroup = document.getElementById('quantum-time-group');
    const quantumTimeInput = document.getElementById('quantum-time');

    const startBtn = document.getElementById('start-simulation-btn');
    const resetBtn = document.getElementById('reset-simulation-btn');

    const generateProcessTable = () => {
        const num = parseInt(numProcessesInput.value, 10);
        if (isNaN(num) || num < 1) {
            alert('Please enter a valid number of processes (1 or more).');
            return;
        }

        let tableHtml = `
            <table id="process-input-table">
                <thead>
                    <tr>
                        <th>Process Name</th>
                        <th>Arrival Time (AT)</th>
                        <th>Burst Time (BT)</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let i = 1; i <= num; i++) {
            tableHtml += `
                <tr>
                    <td>P${i}</td>
                    <td><input type="number" class="at-input" value="0" min="0"></td>
                    <td><input type="number" class="bt-input" value="5" min="1"></td>
                </tr>
            `;
        }

        tableHtml += `
                </tbody>
            </table>
        `;
        processTableWrapper.innerHTML = tableHtml;
    };

    generateProcessTable();

    generateTableBtn.addEventListener('click', generateProcessTable);

    addProcessesFromTableBtn.addEventListener('click', () => {
        processList = [];
        const rows = document.querySelectorAll('#process-input-table tbody tr');
        let isValid = true;
        rows.forEach(row => {
            const processName = row.querySelector('td:first-child').textContent;
            const arrivalTime = parseInt(row.querySelector('.at-input').value, 10);
            const burstTime = parseInt(row.querySelector('.bt-input').value, 10);

            if (isNaN(arrivalTime) || arrivalTime < 0 || isNaN(burstTime) || burstTime < 1) {
                isValid = false;
                return;
            }
            // Create a new Process object using the constructor
            const newProcess = new Process(processList.length + 1, processName, burstTime, arrivalTime);
            processList.push(newProcess);
        });

        if (!isValid) {
            alert('Please ensure all Arrival Times are non-negative and Burst Times are positive integers.');
            processList = [];
        } else {
            // Update the UI with the loaded processes
            visualizer.updateReadyQueue(processList);
            console.log('Processes loaded:', processList);
        }
    });

    algorithmSelect.addEventListener('change', () => {
        if (algorithmSelect.value === 'roundRobin') {
            quantumTimeGroup.style.display = 'flex';
        } else {
            quantumTimeGroup.style.display = 'none';
        }
    });

    startBtn.addEventListener('click', () => {
        const selectedAlgorithm = algorithmSelect.value;
        const quantum = parseInt(quantumTimeInput.value, 10);

        if (processList.length === 0) {
            alert('Please load processes using the "Load Processes" button first.');
            return;
        }
        if (selectedAlgorithm === 'roundRobin' && (isNaN(quantum) || quantum < 1)) {
            alert('Please enter a valid Quantum Time for Round Robin (1 or more).');
            return;
        }

        // Use a deep copy of the processList to not affect original data
        const processesForSimulation = processList.map(p => new Process(p.id, p.name, p.burstTime, p.arrivalTime));

        // Clear previous simulation results
        visualizer.clear();
        metrics.clear();

        // Run the simulation
        const simulationResult = scheduler(selectedAlgorithm, processesForSimulation, quantum);

        // Display results
        visualizer.visualizeGanttChart(simulationResult.ganttData);
        visualizer.updateCompletedProcesses(simulationResult.processes);
        visualizer.displayMetricsTable(simulationResult.processes);
        metrics.calculateAndDisplay(simulationResult.processes);
    });

    resetBtn.addEventListener('click', () => {
        processList = [];
        numProcessesInput.value = 3;
        generateProcessTable();
        visualizer.clear();
        metrics.clear();
        quantumTimeInput.value = 2;
        quantumTimeGroup.style.display = 'none';
    });
});