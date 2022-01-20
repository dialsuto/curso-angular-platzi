import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host}/products/`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.host}/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.host}/products/`, product);
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${environment.host}/products/${id}`, changes);
  }

  deleteProduct(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.host}/products/${id}`);
  }
}
