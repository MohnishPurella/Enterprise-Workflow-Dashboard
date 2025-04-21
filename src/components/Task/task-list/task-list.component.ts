import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
      
  }

  taskList = [
    {
      "id": "task-001",
      "title": "Design Landing Page",
      "description": "Create responsive designs for the landing page using Figma.",
      "status": "In Progress",
      "assignee": "user-101",
      "createdBy": "user-100",
      "dueDate": "2025-04-25",
      "createdAt": "2025-04-10T10:00:00Z",
      "updatedAt": "2025-04-18T14:20:00Z",
      "priority": "High",
      "comments": [
        {
          "id": "comment-001",
          "taskId": "task-001",
          "authorId": "user-100",
          "message": "Make sure it's mobile-first.",
          "createdAt": "2025-04-12T09:15:00Z"
        }
      ]
    },
    {
      "id": "task-002",
      "title": "API Integration for Auth",
      "description": "Connect frontend with the authentication API.",
      "status": "Todo",
      "assignee": "user-102",
      "createdBy": "user-100",
      "dueDate": "2025-04-22",
      "createdAt": "2025-04-11T13:30:00Z",
      "updatedAt": "2025-04-15T09:45:00Z",
      "priority": "Medium",
      "comments": []
    },
    {
      "id": "task-003",
      "title": "Set Up CI/CD Pipeline",
      "description": "Use GitHub Actions to automate builds and tests.",
      "status": "Review",
      "assignee": "user-103",
      "createdBy": "user-101",
      "dueDate": "2025-04-20",
      "createdAt": "2025-04-09T08:15:00Z",
      "updatedAt": "2025-04-18T10:05:00Z",
      "priority": "High",
      "comments": [
        {
          "id": "comment-002",
          "taskId": "task-003",
          "authorId": "user-103",
          "message": "Pipeline ready, pending approval.",
          "createdAt": "2025-04-17T18:40:00Z"
        }
      ]
    },
    {
      "id": "task-004",
      "title": "Create Unit Tests for Workflow Module",
      "description": "Add Jasmine/Karma tests for all services and components.",
      "status": "Todo",
      "assignee": "user-104",
      "createdBy": "user-100",
      "dueDate": "2025-04-28",
      "createdAt": "2025-04-16T11:45:00Z",
      "updatedAt": "2025-04-16T11:45:00Z",
      "priority": "Low",
      "comments": []
    },
    {
      "id": "task-005",
      "title": "Finalize User Role Permissions",
      "description": "Map all features to appropriate user roles and update guards.",
      "status": "Done",
      "assignee": "user-105",
      "createdBy": "user-101",
      "dueDate": "2025-04-15",
      "createdAt": "2025-04-05T09:00:00Z",
      "updatedAt": "2025-04-15T16:30:00Z",
      "priority": "Medium",
      "comments": [
        {
          "id": "comment-003",
          "taskId": "task-005",
          "authorId": "user-105",
          "message": "All roles and route guards updated.",
          "createdAt": "2025-04-15T12:20:00Z"
        }
      ]
    },
    {
      "id": "task-006",
      "title": "Implement Kanban Board View",
      "description": "Add drag-and-drop functionality using Angular CDK.",
      "status": "In Progress",
      "assignee": "user-101",
      "createdBy": "user-103",
      "dueDate": "2025-04-23",
      "createdAt": "2025-04-13T15:10:00Z",
      "updatedAt": "2025-04-18T08:50:00Z",
      "priority": "High",
      "comments": []
    }
  ]  

  viewTask(taskData: any){
    this.router.navigate(['/tasks/details', taskData?.id]);
  }

  editTask(taskData: any){
    console.log(taskData);
  }

  deleteTask(taskData: any){
    console.log(taskData);
  }
}
