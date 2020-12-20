import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportExcelComponent } from './import-excel/import-excel.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { ManageIPOComponent } from './manage-ipo/manage-ipo.component';
import { ManageStockExchangesComponent } from './manage-stock-exchanges/manage-stock-exchanges.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateIpoComponent } from './create-ipo/create-ipo.component';
import { ComparisonChartsComponent } from './comparison-charts/comparison-charts.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { CompanyServiceService } from './Services/company-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateStockExchangeComponent } from './create-stock-exchange/create-stock-exchange.component';
import { FormsModule } from '@angular/forms';
import { AddStockexchangeComponent } from './add-stockexchange/add-stockexchange.component';

import { AuthenticationService } from './Services/authentication.service';
import { JwtTockenService } from './Services/jwt-tocken.service';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FilterBySectorComponent } from './filter-by-sector/filter-by-sector.component';
import { FilterBySEComponent } from './filter-by-se/filter-by-se.component';
@NgModule({
  declarations: [
    AppComponent,
    ImportExcelComponent,
    ManageCompaniesComponent,
    ManageIPOComponent,
    ManageStockExchangesComponent,
    CreateCompanyComponent,
    CreateIpoComponent,
    ComparisonChartsComponent,
    UserLoginComponent,
    UserSignUpComponent,
    MenuComponent,
    CreateStockExchangeComponent,
    AddStockexchangeComponent,
    UserPageComponent,
    AdminPageComponent,
    FilterBySectorComponent,
    FilterBySEComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [CompanyServiceService,
  AuthenticationService,
JwtTockenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
