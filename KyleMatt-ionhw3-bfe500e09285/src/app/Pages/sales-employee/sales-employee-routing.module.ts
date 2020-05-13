import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesEmployeePage } from './sales-employee.page';

const routes: Routes = [
  {
    path: '',
    component: SalesEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesEmployeePageRoutingModule {}
