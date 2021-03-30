import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsComponent, AddProductComponent, ViewProductComponent, UpdateProductComponent, DeleteProductComponent, ViewAllProductComponent, ViewAllProductByDateComponent, ViewAllProductByCategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
