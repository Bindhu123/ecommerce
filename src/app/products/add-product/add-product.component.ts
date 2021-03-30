import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.productService.createProduct().subscribe()
  }

  addNewProduct(form) {
    console.log(form.value);

    let newProduct = {
      id:form.value.product_category+1,
      categoryId: form.value.product_category,
      productName:form.value.product_name,
      description:form.value.product_desc,
      rating:form.value.product_rating,
      color:form.value.product_color,
      productImg:'',
      isAvailable:1,
      price:form.value.product_price,
      reviews:form.value.product_reviews,

    };
    console.log(newProduct);

    this.productService.createProduct(newProduct).subscribe(data => {
      console.log(data);
      
    })
    
    
  }

}
