# CPU Scheduling Simulator User Manual

### 1. Adding Processes
Use the "Add a Process" form on the left sidebar.
- **Process Name:** A unique identifier (e.g., P1, P2). If left blank, a name will be auto-generated.
- **Burst Time:** The total CPU time required for the process to complete. Must be a positive integer.
- **Arrival Time:** The time at which the process enters the ready queue. Must be a non-negative integer.
Click "Add Process" to add it to the simulation. The process will appear in the Ready Queue list.

### 2. Running a Simulation
- **Select Algorithm:** Choose a scheduling algorithm (FCFS, SJN, or Round Robin) from the dropdown.
- **Start Simulation:** Click this button to run the simulation based on the selected algorithm and the processes you've added. The Gantt chart and metrics will be updated.

### 3. Viewing Results
- **Gantt Chart:** Located in the main visualization area. It visually represents the CPU's timeline, showing which process is running at a given time.
- **Metrics Panel:** Displays calculated metrics like average waiting time and average turnaround time for the completed simulation.

### 4. Resetting
- **Reset:** Click this button to clear all processes and simulation data, allowing you to start a new simulation.