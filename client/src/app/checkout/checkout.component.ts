import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ServiceManager } from '../shared/managers/service.manager';
import { UserService } from '../shared/services/user.service';
import { OrderService } from '../shared/services/order.service';
import { ProductInCartService } from '../shared/services/productInCart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private serviceManager: ServiceManager,
    private userService: UserService,
    private orderService: OrderService,
    private productInCartService: ProductInCartService
  ) { }

  // BECOMES AN ARRAY OF PRODUCTS THAT COME UP IN THE SEARCH.
  searchedProducts;

  // CHANGES BASED ON IF AN ORDER WAS MADE, FOR HTML DISPLAY (*ngIf).
  orderSubmitted = false;

  // SEE THE 'LOGIN' COMPONENT, SAME STORY.
  formGroupConfig = {
    city: this.formController(3, 15, 'City', /^[a-zA-Z']*[ ]?[a-zA-Z']*$/),
    street: this.formController(3, 15, 'Street', /^[ ]{0,}[a-zA-Z]*[ ]{0,}$/),
    shippingDate: this.formController(10, 10, 'Shipping Date'),
    creditCard: this.formController(16, 16, 'Credit Card', /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(\d{4}){3}|(3[4,7])\d{2}\d{6}\d{5}$/)
  };

  // SEE THE 'LOGIN' COMPONENT, SAME STORY.
  form = new FormGroup(this.formGroupConfig);

  // SEE THE 'LOGIN' COMPONENT, SAME STORY.
  formController(min, max, label, regex?) {
    return new FormControl('', [
      f => !f.value && f.pristine ? { error: '' } : null,
      f => !f.value && f.dirty ? { error: `${label} is required` } : null,
      f => f.value && f.value.length < min ? { error: `${label} is too short (min ${min} characters).` } : null,
      f => f.value && f.value.length > max ? { error: `${label} is too long (max ${max} characters).` } : null,
      f => f.value && !RegExp(regex).test(f.value) ?
        {
          error: `${f.value} is an invalid ${label}. (please make sure there are no - or spaces)`
        }
        : null,
    ]);
  }

  searchProducts(searchString) {

    searchString = searchString.toLowerCase().trim();

    this.searchedProducts = new RegExp('\\b' + searchString + '\\b', 'i')
      .test(this.serviceManager.htmlCartArr.map(el => el[1].name).join(' '))
      && searchString !== '' ?
      this.serviceManager.htmlCartArr.filter(el => el[1].name.includes(searchString))
      : searchString === '' ? this.serviceManager.htmlCartArr
        : [];

  }

  // SUBMITS THE ORDER AND CLEARS THE CART.
  submitOrder() {

    const order = {
      customerId: this.userService.currentUser.id,
      cartId: this.serviceManager.currentCart._id,
      total: this.serviceManager.cartTotal,
      city: this.form.value.city.toLowerCase().trim(),
      street: this.form.value.street.toLowerCase().trim(),
      shippingDate: this.form.value.shippingDate,
      orderDate: new Date().toString().substring(0, 24),
      fourLastDigits: this.form.value.creditCard.substring(this.form.value.creditCard.length - 4)
    };

    this.orderService.submitOrder(order);

    this.form.reset();

    this.orderSubmitted = true;

    this.productInCartService.clearCart(this.serviceManager.currentCart._id);

  }

  ngOnInit() {

    // ASYNC AWAIT FUNCTION WHICH LOADS ALL OF THE SERVICES -
    // - BY PASSING VALUES BETWEEN THEM AS THEY 'ARRIVE'.
    this.serviceManager.loadServices();

  }

}
