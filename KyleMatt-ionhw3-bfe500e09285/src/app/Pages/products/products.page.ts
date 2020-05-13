import { Component, OnInit } from '@angular/core';
import { Products } from './products.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  ID:number;
  newProduct = new Products();
  editProduct = new Products();
  constructor(private mainservice: MainserviceService) { }

  ngOnInit() {
  }

  addProduct(){
    this.mainservice.postproducts(this.newProduct);
  }

  updateProduct(){
    this.mainservice.putproducts(this.editProduct.prod_ID,this.editProduct);
  }

  deleteProduct(){
    this.mainservice.deleteproducts(this.ID);
  }
}
