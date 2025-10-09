const scheduler = (algorithm, processes, quantum = 2) => {
    // Create a deep copy to ensure the original process list is not modified
    const processesCopy = processes.map(p => ({
        ...p
    }));

    if (algorithm === 'fcfs') {
        return fcfs(processesCopy);
    }
    if (algorithm === 'sjn') {
        return sjn(processesCopy);
    }
    if (algorithm === 'srtf') {
        return srtf(processesCopy);
    }
    if (algorithm === 'roundRobin') {
        return roundRobin(processesCopy, quantum);
    }

    // Default return for unsupported algorithms
    return {
        ganttData: [],
        processes: []
    };
};