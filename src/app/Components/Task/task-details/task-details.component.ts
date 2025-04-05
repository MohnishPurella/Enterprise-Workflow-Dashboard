import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit{
  
  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   console.log(params['id']);
    // });
  }
}
