import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesEmployeePageRoutingModule } from './sales-employee-routing.module';

import { SalesEmployeePage } from './sales-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesEmployeePageRoutingModule
  ],
  declarations: [SalesEmployeePage]
})
export class SalesEmployeePageModule {}
