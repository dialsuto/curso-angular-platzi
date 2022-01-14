import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {NavComponent} from './components/nav/nav.component';
import {TableProductsComponent} from './components/table-products/table-products.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'table-products',
        component: TableProductsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
