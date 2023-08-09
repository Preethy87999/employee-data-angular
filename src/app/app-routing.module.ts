import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
