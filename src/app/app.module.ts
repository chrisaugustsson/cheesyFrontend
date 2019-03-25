import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { NgxMdModule } from 'ngx-md';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from "ng2-charts";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserComponent } from './user/user.component';
import { UserCheeseComponent } from './user-cheese/user-cheese.component';
import { CheeseMarketComponent } from './cheese-market/cheese-market.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginFormComponent,
    LoginComponent,
    RegisterFormComponent,
    UserComponent,
    UserCheeseComponent,
    CheeseMarketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMdModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
