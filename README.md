# CPU Scheduling Simulator

An interactive web-based simulator that visualizes and demonstrates various CPU scheduling algorithms in operating systems. This educational tool allows users to understand how different scheduling algorithms work and compare their performance in real-time.

## 🌐 Live Demo

Visit the live application: [cpu-scheduling-simulator-blue.vercel.app](https://cpu-scheduling-simulator-blue.vercel.app)

## 📋 Features

- **Interactive Process Creation**: Add custom processes with specific arrival and burst times
- **Multiple Scheduling Algorithms**:
  - First-Come, First-Served (FCFS)
  - Shortest Job Next (SJN)
  - Shortest Remaining Time First (SRTF)
  - Round Robin (RR) with configurable time quantum
- **Real-time Visualization**: Watch processes move through the ready queue to CPU execution
- **Live Performance Metrics**: Track waiting time, turnaround time, and throughput as simulation runs
- **Comparative Analysis**: Side-by-side comparison of algorithm performance on the same process set
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

No special prerequisites required! This is a pure HTML/CSS/JavaScript application that runs directly in the browser.

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cpu-scheduling-simulator.git
```

2. Navigate to the project directory
```bash
cd cpu-scheduling-simulator
```

3. Open `index.html` in your web browser
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Alternatively, use a local development server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

## 📁 Project Structure

```
cpu-scheduling-simulator/
│
├── index.html
├── README.md
├── LICENSE
├── .gitignore
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   ├── scheduler.js
│   │   ├── process.js
│   │   ├── queue.js
│   │   ├── visualizer.js
│   │   ├── metrics.js
│   │   ├── utils.js
│   │   └── algorithms/
│   │       ├── fcfs.js
│   │       ├── sjn.js
│   │       ├── srtf.js
│   │       └── roundrobin.js
│   └── images/
│       ├── icons/
│       └── screenshots/
│
├── components/
│   ├── input-form.html
│   ├── visualization.html
│   └── metrics-panel.html
│
├── docs/
│   ├── README.md
│   ├── algorithm-guide.md
│   └── user-manual.md
│
└── tests/
    ├── test-data.js
    └── algorithm-tests.js
```

## 🎮 Usage

1. **Add Processes**: Enter arrival time and burst time for each process
2. **Select Algorithm**: Choose from FCFS, SJN, SRTF, or Round Robin
3. **Configure Settings**: For Round Robin, set the time quantum
4. **Run Simulation**: Click "Start Simulation" to watch the visualization
5. **Analyze Results**: View performance metrics and compare algorithms

## 🧮 Scheduling Algorithms

### First-Come, First-Served (FCFS)
Processes are executed in order of arrival. Simple but can cause long waiting times for short processes.

### Shortest Job Next (SJN)
Non-preemptive algorithm that executes the process with the shortest burst time next. Minimizes average waiting time but may cause starvation.

### Shortest Remaining Time First (SRTF)
Preemptive version of SJN. The process with the smallest remaining time is executed next.

### Round Robin (RR)
Each process receives a fixed time quantum. Provides fair CPU allocation and good response time for interactive systems.

## 📊 Performance Metrics

- **Turnaround Time**: Total time from process submission to completion
- **Waiting Time**: Time spent waiting in the ready queue
- **Response Time**: Time from arrival to first CPU allocation
- **Throughput**: Number of processes completed per unit time
- **CPU Utilization**: Percentage of time CPU is actively executing processes

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- No external dependencies or frameworks required

## 👥 Contributors

- **Pachatya Darsan Gohain** [RA2411030010262]
- **Ramesh Harisabapathi Chettiar** [RA2411030010263]

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

## 🙏 Acknowledgments

- Inspired by operating systems course curriculum
- Built as an interactive learning showcase project
- Special thanks to educators and students in the OS community

---

**Note**: This is an educational project designed to help students understand CPU scheduling algorithms through interactive visualization.
