import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdministrationComponent } from './administration/administration.component';


import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { CartService } from './shared/services/cart.service';
import { ProductInCartService } from './shared/services/productInCart.service';
import { CategoryService } from './shared/services/category.service';
import { ProductService } from './shared/services/product.service';
import { OrderService } from './shared/services/order.service';

import { ServiceManager } from './shared/managers/service.manager';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    DetailsComponent,
    PageNotFoundComponent,
    ShoppingComponent,
    CheckoutComponent,
    AdministrationComponent,
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    UserService,
    CartService,
    ProductInCartService,
    CategoryService,
    ProductService,
    OrderService,
    ServiceManager],

  bootstrap: [AppComponent]
})

export class AppModule { }
