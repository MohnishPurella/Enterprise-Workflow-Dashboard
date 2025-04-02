import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  status: string;
  priority: string;
  dueDate: string;
  createdDate: string;
  type: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Mock task data
  private tasks: Task[] = [
    {
      id: 'T-1001',
      title: 'Approve Q1 Budget Allocation',
      description: 'Review and approve the Q1 financial allocation for the marketing department.',
      assignedTo: 'Alice Johnson',
      status: 'Pending',
      priority: 'High',
      dueDate: '2025-04-03',
      createdDate: '2025-03-28',
      type: 'Approval',
      tags: ['Finance', 'Q1', 'Urgent']
    },
    {
      id: 'T-1002',
      title: 'Review Supplier Onboarding Documents',
      description: 'Ensure compliance with company standards for new supplier onboarding.',
      assignedTo: 'Bob Singh',
      status: 'In Progress',
      priority: 'Medium',
      dueDate: '2025-04-05',
      createdDate: '2025-03-30',
      type: 'Review',
      tags: ['Procurement', 'Compliance']
    },
    {
      id: 'T-1003',
      title: 'Resolve Employee Portal Login Issue',
      description: 'Troubleshoot login failure reported by multiple users.',
      assignedTo: 'Carlos Nguyen',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2025-04-01',
      createdDate: '2025-03-31',
      type: 'Action',
      tags: ['IT Support', 'Bug']
    },
    {
      id: 'T-1004',
      title: 'Finalize Training Calendar',
      description: 'Complete and publish Q2 training schedule.',
      assignedTo: 'Dana Kapoor',
      status: 'Completed',
      priority: 'Low',
      dueDate: '2025-03-30',
      createdDate: '2025-03-20',
      type: 'Action',
      tags: ['HR', 'Training']
    },
    {
      id: 'T-1005',
      title: 'Escalation: Vendor Payment Delayed',
      description: 'Investigate delayed payment to vendor X and resolve ASAP.',
      assignedTo: 'Emily Chen',
      status: 'Pending',
      priority: 'High',
      dueDate: '2025-04-02',
      createdDate: '2025-03-31',
      type: 'Escalation',
      tags: ['Finance', 'Escalation']
    }
  ];

  constructor() {}

  // Get all tasks
  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  // Add a new task
  addTask(task: Task): void {
    this.tasks.push(task);
  }

  // Delete a task by ID
  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
