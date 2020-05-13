import { Component, OnInit } from '@angular/core';
import {Customers} from '../customers/customers.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  ID:number;

  newCustomer = new Customers();
  editCustomer = new Customers()
  constructor(private mainservice: MainserviceService) { }

  ngOnInit()  {
  }
  addCustomer(){
    this.mainservice.postCustomers(this.newCustomer);
  }

  updateCustomer(){
    this.mainservice.putCustomer(this.editCustomer.cust_ID,this.editCustomer);
  }

  deleteCustomers(){
    this.mainservice.deleteCustomer(this.ID);
  }

}

