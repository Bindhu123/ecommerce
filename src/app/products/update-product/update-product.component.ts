import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  productDetails: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramId => {
      this.productId = paramId.id;

      this.productService.viewSingleProduct(this.productId).subscribe(productData => {
        this.productDetails = productData;
        console.log(this.productDetails);
        
      })
    })
  }
  updateProduct(form) {
    console.log(form.value);

    let updateProduct = {
      id:form.value.id,
      category_id: form.value.categoryId,
      productName:form.value.productName,
      description:form.value.productDesc,
      rating:form.value.productRating,
      color:form.value.productColor,
      productImg:'',
      isAvailable:1,
      price:form.value.productPrice,
      reviews:form.value.productReviews,

    };

    this.productService.updateProduct(this.productId,updateProduct).subscribe(data => {
      console.log(data);
    })
    
  }

}
