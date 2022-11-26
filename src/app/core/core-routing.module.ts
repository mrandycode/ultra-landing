import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';

const routes: Routes = [
  {
    path: 'human-resource',
    component: HumanResourceComponent,
    pathMatch: 'full'
  },
  {
    path: 'customer',
    component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
