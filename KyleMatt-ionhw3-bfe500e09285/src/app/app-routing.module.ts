import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'customers',
        loadChildren: () =>
          import('./Pages/customers/customers.module').then(
            (m) => m.CustomersPageModule
          ),
      },
      {
        path: 'product-type',
    loadChildren: () =>
      import('./Pages/product-type/product-type.module').then(
        (m) => m.ProductTypePageModule
      ),
      }
    ],
  }]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
