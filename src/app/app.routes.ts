import { Routes } from '@angular/router';
import { TaskListComponent } from './Components/Task/task-list/task-list.component';
import { TaskDetailsComponent } from './Components/Task/task-details/task-details.component';

export const routes: Routes = [
    { path:'task', component:TaskListComponent },
    { path: 'tasks/details', component: TaskDetailsComponent },
];
