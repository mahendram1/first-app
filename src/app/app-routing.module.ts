import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayListComponent } from './user/display-list/display-list.component';
import { CreateEmployeeComponent } from './user/create-employee/create-employee.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path:'display', component:DisplayListComponent},
{path:'add', component:CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
