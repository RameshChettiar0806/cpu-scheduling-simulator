const metrics = (() => {
    const avgWaitingTimeEl = document.getElementById('avg-waiting-time');
    const avgTurnaroundTimeEl = document.getElementById('avg-turnaround-time');
    const calculateAndDisplay = (processes) => {
        const totalWaitingTime = processes.reduce((sum, p) => sum + p.waitingTime, 0);
        const totalTurnaroundTime = processes.reduce((sum, p) => sum + p.turnaroundTime, 0);
        const avgWaitingTime = (totalWaitingTime / processes.length).toFixed(2);
        const avgTurnaroundTime = (totalTurnaroundTime / processes.length).toFixed(2);
        avgWaitingTimeEl.textContent = avgWaitingTime;
        avgTurnaroundTimeEl.textContent = avgTurnaroundTime;
    };
    const clear = () => {
        avgWaitingTimeEl.textContent = '0';
        avgTurnaroundTimeEl.textContent = '0';
    };
    return {
        calculateAndDisplay,
        clear
    };
})();