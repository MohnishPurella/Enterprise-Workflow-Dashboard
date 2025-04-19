import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Task, TaskService } from '../../../Services/Task/task.service';
import { TaskStatusDirective } from '../../../Directives/Task Status/task-status.directive';
import { CommonModule } from '@angular/common';
import { TaskPriorityPipe } from "../../../Pipes/Task Proprity/task-priority.pipe";

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [RouterModule, TaskStatusDirective, CommonModule, TaskPriorityPipe],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit{

  tasks: Task[] = [];
  id:any = null;
  taskDetails:Task = new Task();

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
  ){ }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.taskDetails = this.tasks.find(k=> k.id == this.id) || new Task();
  }
}
