import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList: Category;

  constructor(private productServcie: ProductService) { }

  ngOnInit(): void {
    this.productServcie.getCategory().subscribe(data => {
      this.categoryList = data;
    })
  }

}
