import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "products/:id", component: ProductDetailsComponent},
  {path: "cart", component: CartComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'}, 
  {path: "**", redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
