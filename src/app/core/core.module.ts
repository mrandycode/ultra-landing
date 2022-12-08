import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SectionAComponent } from './section-a/section-a.component';
import { SectionBComponent } from './section-b/section-b.component';
import { SectionCComponent } from './section-c/section-c.component';
import { SectionDComponent } from './section-d/section-d.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { CustomerComponent } from './customer/customer.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
const componentsOfModules = [
  SectionAComponent,
  SectionBComponent,
  SectionCComponent,
  SectionDComponent,
  ContactUsComponent,
  HumanResourceComponent,
  CustomerComponent,
];

@NgModule({
  declarations: [componentsOfModules],
  imports: [CommonModule, CoreRoutingModule, SharedModule, Ng2TelInputModule],
  exports: [componentsOfModules],
})
export class CoreModule {}
