import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
const BASIC_MODULES = [FormsModule, ReactiveFormsModule, BrowserModule];
@NgModule({
  declarations: [NavbarComponent],
  imports: [BASIC_MODULES, CommonModule],
  exports: [BASIC_MODULES, NavbarComponent, TranslateModule],
})
export class SharedModule {}
