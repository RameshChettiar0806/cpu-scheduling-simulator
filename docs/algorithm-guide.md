# CPU Scheduling Algorithms Guide

## 1. First-Come, First-Served (FCFS)
- **Concept:** The simplest scheduling algorithm. Processes are executed in the order they arrive.
- **Characteristics:** Non-preemptive. Simple to implement but can lead to long waiting times if a short process gets stuck behind a long one (Convoy Effect).

## 2. Shortest Job Next (SJN)
- **Concept:** The process with the shortest burst time is selected for execution next.
- **Characteristics:** Non-preemptive. Optimizes average waiting time but requires knowing the future burst time of processes. Can cause starvation for longer processes.

## 3. Round Robin (RR)
- **Concept:** A time-sharing algorithm. Each process is given a small unit of CPU time, called a time quantum. If the process does not finish within the quantum, it is preempted and put at the end of the ready queue.
- **Characteristics:** Preemptive. Provides fairness among processes. Performance heavily depends on the size of the time quantum.