import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  productList: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // window.location.reload();
    this.productService.viewProduct().subscribe(data => {
      this.productList = data;

    })
  }

}
