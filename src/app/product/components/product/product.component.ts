import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product!: Product;

  @Output()
  productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  addCart(): void {
    console.log('click a add cart');
    this.productClicked.emit(this.product.id);
  }

}
