import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PortfolioManagementComponent } from './portfolio-management/portfolio-management.component';

@NgModule({
  declarations: [
    PortfolioManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [PortfolioManagementComponent]
})
export class AppModule { }
