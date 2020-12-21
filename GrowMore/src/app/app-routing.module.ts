import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStockExchangeServiceService } from './Services/add-stock-exchange-service.service';
import { AddStockexchangeComponent } from './add-stockexchange/add-stockexchange.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreateIpoComponent } from './create-ipo/create-ipo.component';
import { ImportExcelComponent } from './import-excel/import-excel.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { ManageIPOComponent } from './manage-ipo/manage-ipo.component';
import { ManageStockExchangesComponent } from './manage-stock-exchanges/manage-stock-exchanges.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { OnlyAuthenticatedUserGuard } from './only-authenticated-user.guard';
import { OnlyAdminUsersGuard } from './only-admin-users.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FilterBySectorComponent } from './filter-by-sector/filter-by-sector.component';
import { FilterBySEComponent } from './filter-by-se/filter-by-se.component';
import { ComparisonChartsComponent } from './comparison-charts/comparison-charts.component';


const routes: Routes = [
  {component : ImportExcelComponent, path:'excel-upload', canActivate: [OnlyAdminUsersGuard]},
  {component : ManageCompaniesComponent, path:'manage-company', canActivate: [OnlyAuthenticatedUserGuard]},
  {component : CreateCompanyComponent, path:'create-company', canActivate: [OnlyAdminUsersGuard]},
  {component : ManageIPOComponent, path:'manage-ipo', canActivate: [OnlyAuthenticatedUserGuard]},
  {component : CreateIpoComponent, path:'create-ipo', canActivate: [OnlyAdminUsersGuard]},
  {component : ManageStockExchangesComponent, path:'manage-se', canActivate: [OnlyAuthenticatedUserGuard]},
  {component : AddStockexchangeComponent, path:'create-se', canActivate: [OnlyAdminUsersGuard]},
  {component : UserLoginComponent, path:'login'},
  {component : UserSignUpComponent, path:'signup'},
  {component : AdminPageComponent, path:'admin-url',canActivate: [OnlyAdminUsersGuard]},
  {component : UserPageComponent, path:'user-url', canActivate: [OnlyAuthenticatedUserGuard]},
  {component : FilterBySectorComponent, path:'filter-sec', canActivate: [OnlyAuthenticatedUserGuard]},
  {component : FilterBySEComponent, path:'filter-se', canActivate: [OnlyAuthenticatedUserGuard]},
  {component : ComparisonChartsComponent, path:'compare-comp', canActivate: [OnlyAuthenticatedUserGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
