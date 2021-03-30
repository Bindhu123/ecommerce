import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  createProduct(productBody): Observable<Product> {
    const baseUrl = "http://localhost:3000/products";
    return this.http.post<Product>(baseUrl, productBody);
  }
  viewProduct(): Observable<Product> {
    const baseUrl = "http://localhost:3000/products";
    return this.http.get<Product>(baseUrl);
  }
  viewSingleProduct(categoryId): Observable<Product> {
    const baseUrl = "http://localhost:3000/products/"+categoryId;
    return this.http.get<Product>(baseUrl);
  }
  updateProduct(productId,productBody): Observable<Product> {
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.http.put<Product>(baseUrl, productBody);
  }

  deleteProduct(productId): Observable<Product> {
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.http.delete<Product>(baseUrl);
  }
  searchCategoryProduct(categoryId): Observable<Product> {
    console.log("seviceid"+categoryId);
    
    const baseUrl = "http://localhost:3000/products?category_id="+categoryId;
    return this.http.get<Product>(baseUrl);
  }

  searchDAteProduct(dateParams): Observable<Product> {
    const baseUrl = "http://localhost:3000/products/date="+dateParams;
    return this.http.get<Product>(baseUrl);
  }

  getCategory() {
    const baseUrl = "http://localhost:3000/categories";
    return this.http.get<Category>(baseUrl);
  }

}
