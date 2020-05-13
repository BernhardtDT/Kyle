import { Component, OnInit } from '@angular/core';
import { SaleEmployee } from './salesemployee.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-sales-employee',
  templateUrl: './sales-employee.page.html',
  styleUrls: ['./sales-employee.page.scss'],
})
export class SalesEmployeePage implements OnInit {

  ID:number;
  newSaleEmployee = new SaleEmployee();
  editSaleEmployee = new SaleEmployee();
  constructor(private mainservice: MainserviceService) { }

  ngOnInit() {
  }
  addSaleEmp(){
    this.mainservice.postsalesemployee(this.newSaleEmployee);
  }

  updateSaleEmp(){
    this.mainservice.putsalesemployee(this.editSaleEmployee.saleEmp_ID,this.editSaleEmployee);
  }

  deleteSaleEmp(){
    this.mainservice.deletesalesemployee(this.ID);
  }
}
