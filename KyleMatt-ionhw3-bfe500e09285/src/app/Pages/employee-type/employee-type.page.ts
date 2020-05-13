import { Component, OnInit } from '@angular/core';
import {EmployeeType} from '../employee-type/employee.model';
import { MainserviceService } from 'src/app/services/mainservice.service';


@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.page.html',
  styleUrls: ['./employee-type.page.scss'],
})
export class EmployeeTypePage implements OnInit {

  ID:number;
  newEmployeeType= new EmployeeType();
   editEmployeeType = new EmployeeType();
  constructor(private mainservice: MainserviceService) { }

  ngOnInit() {
  }
  addEmployeeType(){
    this.mainservice.postemployeetype(this.newEmployeeType);
  }

  updateEmployeeType(){
    this.mainservice.putemployeetype(this.editEmployeeType.empType_ID,this.editEmployeeType);
  }

  deleteEmployeeType(){
    this.mainservice.deleteemployeetype(this.ID);
  }
}
