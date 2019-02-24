import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './shared/services/auth.service';

import { LoginComponent } from './login/login.component';
import { AdministrationComponent } from './administration/administration.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'shopping', component: ShoppingComponent, canActivate: [AuthService] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthService] },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
