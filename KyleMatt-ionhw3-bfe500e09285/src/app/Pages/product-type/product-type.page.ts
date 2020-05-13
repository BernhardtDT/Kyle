import { Component, OnInit } from '@angular/core';
import { ProductType } from './producttype.model';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.page.html',
  styleUrls: ['./product-type.page.scss'],
})
export class ProductTypePage implements OnInit {
  ID:number;
  newProductType = new ProductType();
  editProductType = new ProductType();
  constructor(private mainservice: MainserviceService) { }

  ngOnInit() {
  }

  addProductType(){
    this.mainservice.postproducttype(this.newProductType);
  }

  updateProductType(){
    this.mainservice.putproducttype(this.editProductType.prodType_ID,this.editProductType);
  }

  deleteProductType(){
    this.mainservice.deleteproducttype(this.ID);
  }
}
