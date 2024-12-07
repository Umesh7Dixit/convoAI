import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginSignupComponent } from '../app/common/login-signup/login-signup.component';
import { DashboardComponent } from '../app/brand/dashboard/dashboard.component';
import { MapViewComponent } from '../app/brand/map-view/map-view.component';
import { PoOverViewComponent } from '../app/brand/po-over-view/po-over-view.component';
import { ProductsComponent } from '../app/brand/products/products.component';
import { SuppliersComponent } from '../app/brand/suppliers/suppliers.component';
import { FormComponent } from './brand/form/form.component';
import { DocumentComponent } from './brand/document/document.component';
import { ResetPasswordComponent } from './common/reset-password/reset-password.component';
import { BrandSupplierComponent } from './shared-component/brand-supplier/brand-supplier.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '',   redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginSignupComponent },
    { path: 'reset-password', component: ResetPasswordComponent},
    { path: 'brand-dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'brand-map', component: MapViewComponent },
    { path: 'brand-po', component: PoOverViewComponent },
    { path: 'brand-product', component: ProductsComponent },
    { path: 'brand-supplier', component: SuppliersComponent },
    { path: 'brand-form', component: FormComponent },
    { path: 'brand-document', component: DocumentComponent },
    { path: 'brand-supplier-form', component : BrandSupplierComponent}
];

//{ path: 'brand-dashboard', component: DashboardComponent, canActivate: [AuthGuard] },