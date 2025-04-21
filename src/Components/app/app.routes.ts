import { Routes } from '@angular/router';
import { TaskListComponent } from '../Task/task-list/task-list.component';
import { TaskDetailsComponent } from '../Task/task-details/task-details.component';

export const routes: Routes = [
    {path:'tasks', component:TaskListComponent},
    {path:'tasks/details/:id', component:TaskDetailsComponent}
];
