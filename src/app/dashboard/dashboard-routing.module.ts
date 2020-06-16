import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { Shell } from '@app/shell/shell.service';


const routes: Routes = [
  Shell.childRoutes([
   { path: '', redirectTo: '/users' ,pathMatch: 'full' },
    { path: 'users', component: UserListComponent, data: { title: 'Users' } }
  ])
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []

})
export class DashboardRoutingModule { }
