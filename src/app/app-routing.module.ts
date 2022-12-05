import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserRepoComponent } from './components/user-repo/user-repo.component'

const routes: Routes = [
  { path: '', component: DashboardComponent }
  ,
  { path: 'user/:id', component: UserRepoComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
