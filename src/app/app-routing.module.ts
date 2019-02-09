import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ReportsComponent } from "./reports/reports.component";
import { ReportComponent } from "./report/report.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'reports/:kmom', component: ReportComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
