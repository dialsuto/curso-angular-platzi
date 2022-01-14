import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'Curso Angular Platzi';
  items = ['Angela', 'Diego', 'Julian'];
  power = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push('Prueba');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

}
