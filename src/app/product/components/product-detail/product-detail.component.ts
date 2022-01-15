import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [ './product-detail.component.scss' ]
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.productsService.getProduct(id)
        .subscribe(product => {
          this.product = product;
        });
    });
  }

  createProduct(): void {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevos desde angular',
      image: './assets/images/banner-1.jpg',
      price: 123,
      description: 'prueba desde angular'
    };
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: 'update desde angular',
      price: 1111,
    };
    this.productsService.updateProduct('1', updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }
}
