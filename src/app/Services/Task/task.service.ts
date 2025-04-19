import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Task {
  id: string = '';
  title: string = '';
  description: string = '';
  assignedTo: string = '';
  status: string = '';
  priority: string = '';
  dueDate: string = '';
  createdDate: string = '';
  createdBy: string = '';
  department: string = '';
  comments: { user: string; message: string; date: string }[] = [];
  attachments: { fileName: string; fileUrl: string }[] = [];
  approvalStatus: string = '';
  approvalBy: string = '';
  approvalDate: string = '';
  history: { status: string; date: string; changedBy: string }[] = [];
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
      createdBy: 'Michael Scott',
      department: 'Finance',
      comments: [
        {
          user: 'Alice Johnson',
          message: 'Need clarification on line 3.',
          date: '2025-03-29'
        }
      ],
      attachments: [
        {
          fileName: 'Q1_Budget.pdf',
          fileUrl: '/assets/Task_Docs/Q1_Budget.pdf'
        }
      ],
      approvalStatus: 'Pending',
      approvalBy: '',
      approvalDate: '',
      history: [
        {
          status: 'Created',
          date: '2025-03-28',
          changedBy: 'Michael Scott'
        },
        {
          status: 'Pending',
          date: '2025-03-28',
          changedBy: 'System'
        }
      ]
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
      createdBy: 'Samantha Green',
      department: 'Procurement',
      comments: [
        {
          user: 'Bob Singh',
          message: 'Documents from vendor A seem outdated.',
          date: '2025-04-01'
        }
      ],
      attachments: [
        {
          fileName: 'Supplier_Checklist.xlsx',
          fileUrl: '/assets/Task_Docs/Supplier_Checklist.xlsx'
        }
      ],
      approvalStatus: 'Under Review',
      approvalBy: '',
      approvalDate: '',
      history: [
        {
          status: 'Created',
          date: '2025-03-30',
          changedBy: 'Samantha Green'
        },
        {
          status: 'In Progress',
          date: '2025-03-31',
          changedBy: 'Bob Singh'
        }
      ]
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
      createdBy: 'Linda Park',
      department: 'IT',
      comments: [
        {
          user: 'Carlos Nguyen',
          message: 'Working on AD configuration issue.',
          date: '2025-04-01'
        },
        {
          user: 'Linda Park',
          message: 'Try clearing SSO cache on affected machines.',
          date: '2025-04-01'
        }
      ],
      attachments: [
        {
          fileName: 'Error_Log.txt',
          fileUrl: '/assets/logs/Error_Log.txt'
        }
      ],
      approvalStatus: 'Not Required',
      approvalBy: '',
      approvalDate: '',
      history: [
        {
          status: 'Created',
          date: '2025-03-31',
          changedBy: 'Linda Park'
        },
        {
          status: 'In Progress',
          date: '2025-04-01',
          changedBy: 'Carlos Nguyen'
        }
      ]
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
      createdBy: 'Raj Mehta',
      department: 'HR',
      comments: [
        {
          user: 'Dana Kapoor',
          message: 'Added new leadership training session.',
          date: '2025-03-28'
        }
      ],
      attachments: [
        {
          fileName: 'Q2_Training_Calendar.pdf',
          fileUrl: '/assets/Task_Docs/Q2_Training_Calendar.pdf'
        }
      ],
      approvalStatus: 'Not Required',
      approvalBy: '',
      approvalDate: '',
      history: [
        {
          status: 'Created',
          date: '2025-03-20',
          changedBy: 'Raj Mehta'
        },
        {
          status: 'Completed',
          date: '2025-03-29',
          changedBy: 'Dana Kapoor'
        }
      ]
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
      createdBy: 'Thomas Blake',
      department: 'Accounts Payable',
      comments: [
        {
          user: 'Emily Chen',
          message: 'Reached out to bank for transaction trace.',
          date: '2025-04-01'
        },
        {
          user: 'Vendor X',
          message: 'Still awaiting remittance confirmation.',
          date: '2025-04-01'
        }
      ],
      attachments: [
        {
          fileName: 'Invoice_VendorX.pdf',
          fileUrl: '/assets/Task_Docs/Invoice_VendorX.pdf'
        }
      ],
      approvalStatus: 'Escalation Raised',
      approvalBy: '',
      approvalDate: '',
      history: [
        {
          status: 'Created',
          date: '2025-03-31',
          changedBy: 'Thomas Blake'
        },
        {
          status: 'Pending',
          date: '2025-04-01',
          changedBy: 'Emily Chen'
        }
      ]
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
