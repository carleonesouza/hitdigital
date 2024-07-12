import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NavbarComponent
  ],
  exports:[NavbarComponent]
})
export class ComponentsModule { }
