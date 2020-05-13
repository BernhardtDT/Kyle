import { Injectable } from '@angular/core';
import { Observable, from} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { CustomersPageModule } from '../Pages/customers/customers.module';
import { ProductsPageModule } from '../Pages/products/products.module';
import { EmployeeTypePageModule } from '../Pages/employee-type/employee-type.module';
import { ProductTypePageModule } from '../Pages/product-type/product-type.module';
import { SalesEmployeePageModule } from '../Pages/sales-employee/sales-employee.module';
import { Customers } from '../Pages/customers/customers.model';
import { Products } from '../Pages/products/products.model';
import { ProductType } from '../Pages/product-type/producttype.model';
import { EmployeeType } from '../Pages/employee-type/employee.model';
import { SaleEmployee } from '../Pages/sales-employee/salesemployee.model';


@Injectable({
  
  providedIn: 'root'
})
export class MainserviceService {

    private customerGetURL = 'https://localhost:44301//api/customers';
    private customerPutURL = 'https://localhost:44301/api/customers/';
    private customerPostURL = 'https://localhost:44301/api/customers/';
    private customerDeleteURL = 'https://localhost:44301/api/customers/';

    private productGetURL = 'https://localhost:44301/api/products';
    private productPutURL = 'https://localhost:44301/api/products/';
    private productPostURL = 'https://localhost:44301/api/products/';
    private productDeleteURL = 'https://localhost:44301/api/products/';

    private salesemployeeGetURL = 'https://localhost:44301/api/salesEmployee';
    private salesemployeePutURL = 'https://localhost:44301/api/salesEmployee/';
    private salesemployeePostURL = 'https://localhost:44301/api/salesEmployee/';
    private salesemployeeDeleteURL = 'https://localhost:44301/api/salesEmployee/';

    private producttypeGetURL = 'https://localhost:44301/api/ProductType';
    private producttypePutURL = 'https://localhost:44301/api/ProductType/';
    private producttypePostURL = 'https://localhost:44301/api/ProductType/';
    private producttypeDeleteURL = 'https://localhost:44301/api/ProductType/';

    private employeetypesGetURL = 'https://localhost:44301/api/employeetypes';
    private employeetypesPutURL = 'https://localhost:44301/api/employeetypes/';
    private employeetypesPostURL = 'https://localhost:44301/api/employeetypes/';
    private employeetypesDeleteURL = 'https://localhost:44301/api/employeetypes/';

    constructor(private http:HttpClient){}

    public getCustomers():Observable<CustomersPageModule[]>{
      return this.http.get<CustomersPageModule[]>(this.customerGetURL);
    }

    public getproducts():Observable<ProductsPageModule[]>{
      return this.http.get<ProductsPageModule[]>(this.productGetURL);
    }

    public getProductTypes():Observable<ProductTypePageModule[]>{
      return this.http.get<ProductTypePageModule[]>(this.producttypeGetURL);
    }

    public getsalesEmployee():Observable<SalesEmployeePageModule[]>{
      return this.http.get<SalesEmployeePageModule[]>(this.salesemployeeGetURL);
    }
    public getemployeetypes():Observable<EmployeeTypePageModule[]>{
      return this.http.get<EmployeeTypePageModule[]>(this.employeetypesGetURL);
    }

    public postCustomers(customers:Customers){
      this.http.post<Customers>(this.customerPostURL, customers).subscribe()
    }

    public putCustomer(ID:number, customers:Customers){
      var rope1 =this.customerPutURL;
      var rope2 =rope1.concat(ID.toString());
      this.http.put<Customers>(rope2,customers).subscribe()
    }

    public deleteCustomer(ID:number){
      var rope1=this.customerDeleteURL;
      var rope2=rope1.concat(ID.toString());
      this.http.delete<Customers[]>(rope2).subscribe()
    }

    public postproducts(product:Products){
      this.http.post<Products>(this.productPostURL, product).subscribe()
    }

    public putproducts(ID:number, product:Products){
      var string1=this.productPutURL;
      var string2=string1.concat(ID.toString());
      this.http.put<Products>(string2, product).subscribe()
    }

    public deleteproducts(ID:number){
      var string1=this.productDeleteURL;
      var string2=string1.concat(ID.toString());
      this.http.delete<Products[]>(string2).subscribe()
    }

    public postproducttype(productType:ProductType){
      this.http.post<ProductType>(this.producttypePostURL, productType).subscribe()
    }

    public putproducttype(ID:number, productType:ProductType){
      var test1=this.producttypePutURL;
      var test2=test1.concat(ID.toString());
      this.http.put<ProductType>(test2, productType).subscribe()
    }

    public deleteproducttype(ID:number){
      var test1=this.producttypeDeleteURL;
      var test2=test1.concat(ID.toString());
      this.http.delete<ProductType[]>(test2).subscribe()
    }

    public postsalesemployee(salesEmployee:SaleEmployee){
      this.http.post<SaleEmployee>(this.salesemployeePostURL, salesEmployee).subscribe()
    }

    public putsalesemployee(ID:number, salesEmployee:SaleEmployee){
      var change1=this.salesemployeePutURL;
      var change2=change1.concat(ID.toString());
      this.http.put<SaleEmployee>(change2, salesEmployee).subscribe()
    }

    public deletesalesemployee(ID:number){
      var change1=this.salesemployeeDeleteURL;
      var change2=change1.concat(ID.toString());
      this.http.delete<SaleEmployee[]>(change2).subscribe()
    }

    public postemployeetype(employeeType:EmployeeType){
      this.http.post<EmployeeType>(this.employeetypesPostURL, employeeType)
    }

    public putemployeetype(ID:number, employeeType:EmployeeType){
      var type1=this.employeetypesPutURL;
      var type2=type1.concat(ID.toString());
      this.http.put<EmployeeType>(type2, employeeType).subscribe()
    }

    public deleteemployeetype(ID:number){
      var type1=this.employeetypesDeleteURL;
      var type2=type1.concat(ID.toString());
      this.http.delete<EmployeeType[]>(type2).subscribe()
    }
}