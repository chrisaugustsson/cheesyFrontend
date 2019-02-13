import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { NgxMdModule } from 'ngx-md';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { ReportComponent } from './report/report.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { NewReportComponent } from './new-report/new-report.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ReportsComponent,
    ReportComponent,
    LoginFormComponent,
    LoginComponent,
    NewReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
