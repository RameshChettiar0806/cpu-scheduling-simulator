const runTests = () => {
    console.log("Running FCFS tests...");
    const fcfsProcesses = testData.scenario1.map((p, i) => new Process(i, p.name, p.burstTime, p.arrivalTime));
    fcfs(fcfsProcesses);
    const avgWaitingTimeFCFS = (fcfsProcesses.reduce((sum, p) => sum + p.waitingTime, 0) / fcfsProcesses.length).toFixed(2);
    console.log(`FCFS Avg Waiting Time: ${avgWaitingTimeFCFS}`);
    console.log("Expected: 14.33");

    console.log("\nRunning SJN tests...");
    const sjnProcesses = testData.scenario1.map((p, i) => new Process(i, p.name, p.burstTime, p.arrivalTime));
    sjn(sjnProcesses);
    const avgWaitingTimeSJN = (sjnProcesses.reduce((sum, p) => sum + p.waitingTime, 0) / sjnProcesses.length).toFixed(2);
    console.log(`SJN Avg Waiting Time: ${avgWaitingTimeSJN}`);
    console.log("Expected: 7.00");

    console.log("\nRunning Round Robin tests (quantum=4)...");
    const rrProcesses = testData.scenario3_rr.map((p, i) => new Process(i, p.name, p.burstTime, p.arrivalTime));
    roundRobin(rrProcesses, 4);
    const avgWaitingTimeRR = (rrProcesses.reduce((sum, p) => sum + p.waitingTime, 0) / rrProcesses.length).toFixed(2);
    console.log(`RR Avg Waiting Time: ${avgWaitingTimeRR}`);
    console.log("Expected: 5.67");
};