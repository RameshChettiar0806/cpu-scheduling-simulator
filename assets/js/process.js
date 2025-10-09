class Process {
    constructor(id, name, burstTime, arrivalTime) {
        this.id = id;
        this.name = name;
        this.burstTime = burstTime;
        this.remainingTime = burstTime;
        this.arrivalTime = arrivalTime;
        this.completionTime = 0;
        this.waitingTime = 0;
        this.turnaroundTime = 0;
        this.startTimes = [];
    }
}