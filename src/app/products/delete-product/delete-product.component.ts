import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId = 0;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.productId = params.id;

      this.productService.deleteProduct(this.productId).subscribe(data => {
        console.log("deleted");
        this.router.navigate(['products']);
        
      })


    })
  }

}
