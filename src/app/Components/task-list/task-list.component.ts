import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TaskPriorityPipe } from '../../Pipes/Task Proprity/task-priority.pipe';
import { TaskStatusDirective } from '../../Directives/Task Status/task-status.directive';
import { Task, TaskService } from '../../Services/Task/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableModule, TaskPriorityPipe, TaskStatusDirective],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  
  tasks: Task[] = [];

  constructor( 
    private taskService: TaskService
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
}
