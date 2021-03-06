import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ]
})
export class ProductComponent {

  @Input()
  product!: Product;

  @Output()
  productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(
    private cartService: CartService
  ) {
  }

  addCart(): void {
    this.cartService.addCart(this.product);
    // console.log('click a add cart');
    // this.productClicked.emit(this.product.id);
  }

}
