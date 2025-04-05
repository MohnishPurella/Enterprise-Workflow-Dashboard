import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TaskStatusDirective } from '../../../Directives/Task Status/task-status.directive';
import { TaskPriorityPipe } from '../../../Pipes/Task Proprity/task-priority.pipe';
import { Task, TaskService } from '../../../Services/Task/task.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableModule, TaskPriorityPipe, TaskStatusDirective, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  
  tasks: Task[] = [];

  constructor( 
    private taskService: TaskService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadTasks();
  }  

  loadTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }
  
  addTask(){ }

  deleteTask(rowTaskData: Task){
    this.taskService.deleteTask(rowTaskData.id);
    this.loadTasks();
  }

  showDetails(rowTaskData: Task){
    this.router.navigate(['/tasks/details']);
  }
}
