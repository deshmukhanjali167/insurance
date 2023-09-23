import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddInsuranceComponent } from './pages/add-insurance/add-insurance.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    AddInsuranceComponent,
    InsuranceComponent,
    LoginComponent,
    
    LayoutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
