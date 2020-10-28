import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { GetcustomerComponent } from './getcustomer/getcustomer.component';
import { GetbynameComponent } from './getbyname/getbyname.component';
import { AllcustomerComponent } from './allcustomer/allcustomer.component';
import { ServiceComponent } from './service/service.component';
import { ModelComponent } from './model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    GetcustomerComponent,
    GetbynameComponent,
    AllcustomerComponent,
    ServiceComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
