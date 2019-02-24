import { Component, OnInit } from '@angular/core';

import { ServiceManager } from '../shared/managers/service.manager';
import { ProductInCartService } from '../shared/services/productInCart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent implements OnInit {

  constructor(
    public serviceManager: ServiceManager,
    private productInCartService: ProductInCartService
  ) { }

  // BECOMES AN ARRAY OF PRODUCTS BASED ON THE SELECTED CATEGORY.
  selectedProducts;

  // HOLDER FOR PRODUCT WHICH IS CURRENTLY BEING VIEWED.
  currentProduct = {
    img: undefined,
    name: undefined,
    price: undefined,
    id: undefined
  };

  // ATTRIBUTES FOR PRODUCT MODAL WINDOW IN THE HTML.
  qtyConfig = {
    type: 'text',
    maxlength: 3,
    minlength: 1,
    limit: 100
  };

  // SETS THE 'selectedProducts' VARIABLE TO AN ARRAY OF PRODUCTS WITH THE SELECTED CATEGORY ID.
  selectCategory(categoryId) {

    this.selectedProducts = this.serviceManager.products.filter(el => el.categoryId === categoryId);

  }


  searchProducts(searchString) {

    searchString = searchString.toLowerCase().trim();

    this.selectedProducts = new RegExp('\\b' + searchString + '\\b', 'i')
      .test(this.serviceManager.products.map(el => el.productName).join(' '))
      && searchString !== '' ?
      this.serviceManager.products.filter(el => el.productName.includes(searchString)) : '';

  }

  // SETS THE PRODUCT HOLDER TO THE PRODUCT IN THE MODAL WINDOW.
  productModal(productImg, productName, productPrice, productId) {

    this.currentProduct = {
      id: productId,
      img: productImg,
      name: productName,
      price: productPrice
    };

  }

  // REGISTERS CLICK EVENTS FROM THE PRODUCT IMAGE, -
  // - NAME AND PRICE AND CALLS THE CLICK EVENT ON THE 'Choose Ammount' BUTTON.
  clicked(product) {

    product.click();

  }

  // CHECKS IF A PRODUCT IS ALREADY IN THE CART AND CALLS THE ADDS / UPDATE FUNCTION AS NECESSARY.
  getQty(quantity) {

    if (this.serviceManager.htmlCartObj[this.currentProduct.id].quantity) {

      this.updateCart(
        this.currentProduct.id,
        Number(quantity),
        this.currentProduct.price * Number(quantity),
        this.serviceManager.currentCart._id,
      );

    } else {

      this.addToCart(
        this.currentProduct.id,
        this.currentProduct.img,
        this.currentProduct.name,
        Number(quantity),
        this.currentProduct.price * Number(quantity)
      );
    }

  }

  // CALLS THE 'productInCartService' UPDATE FUNCTION.
  updateCart(productId, quantity, price, cartId,) {

    this.productInCartService.updateCart(cartId, productId, quantity, price);
    this.serviceManager.loadServices();
  }

  // SETS A 'serviceManager' ARRAY WHICH HOLDS ALL THE PRODUCTS WHICH ARE IN THE CART DISPLAY INFO.
  // CALLS THE 'productInCartService' UPDATE FUNCTION.
  addToCart(productId, img, name, quantity, price) {

    this.serviceManager.htmlCartArr.push([this.currentProduct.id, {
      img: img,
      name: name,
      quantity: quantity,
      price: price
    }]);

    const productToAdd = {
      productId: productId,
      quantity: quantity,
      price: price,
      cartId: this.serviceManager.currentCart._id,
    };

    this.productInCartService.addToCart(productToAdd);
    this.serviceManager.loadServices();

  }

  removeFromCart(cartId, productId) {

    this.productInCartService.removeFromCart(cartId, productId);
    this.serviceManager.loadServices();

  }

  clearCart(cartId) {

    this.productInCartService.clearCart(cartId);
    this.serviceManager.loadServices();

  }

  ngOnInit() {

    // ASYNC AWAIT FUNCTION WHICH LOADS ALL OF THE SERVICES -
    // - BY PASSING VALUES BETWEEN THEM AS THEY 'ARRIVE'.
    this.serviceManager.loadServices();

  }

}
