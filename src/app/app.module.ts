import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { IntegrationService } from './services/integration.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatSnackBarModule,
    HttpClientModule ,
    ComponentsModule,
    MatProgressBarModule
    
  ],
  providers: [
    provideAnimationsAsync(), IntegrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
