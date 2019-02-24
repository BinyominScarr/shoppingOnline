import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { OrderService } from '../services/order.service';
import { CartService } from '../services/cart.service';
import { ProductInCartService } from '../services/productInCart.service';

import { Injectable } from '@angular/core';

@Injectable()
export class ServiceManager {

  constructor(
    private userService: UserService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private orderService: OrderService,
    private cartService: CartService,
    private productInCartService: ProductInCartService,
  ) { }

  categories;
  products;
  orders;
  currentCart;
  currentProductsInCart;
  cartTotal;

  htmlCartObj = {};
  htmlCartArr = [];

  cities = [' ',
    'ashdod',
    'be\'er sheva',
    'haifa',
    'jerusalem',
    'netanya',
    'petah tikva',
    'rishon leziyyon',
    'tel aviv',
    'holon',
    'bnei brak'
  ];

  async loadData() {

    this.categories = await this.categoryService.getCategories();
    this.products = await this.productService.getAllProducts();
    this.orders = await this.orderService.getAllOrders();

  }

  async loadServices() {

    this.categories = await this.categoryService.getCategories();
    this.products = await this.productService.getAllProducts();
    this.orders = await this.orderService.getAllOrders();

    if (this.userService.currentUser.role === 'admin') {

      return;

    } else {

      try {

        this.currentCart = await this.cartService.getCart(this.userService.currentUser.id);

      } catch {

        this.currentCart = await this.cartService.createCart(this.userService.currentUser.id);

      }

      this.currentProductsInCart = await this.productInCartService.getProductsInCart(this.currentCart._id);

      for (const product of this.products) {

        this.htmlCartObj[product._id] = { img: product.image, name: product.productName, };

      }

      for (const product of this.currentProductsInCart) {

        this.htmlCartObj[product.productId].quantity = product.quantity;
        this.htmlCartObj[product.productId].price = product.price;

      }

      this.htmlCartArr = Object.entries(this.htmlCartObj).filter(product => product[1]['quantity'] !== undefined);
      this.cartTotal = 0;
      this.currentProductsInCart.forEach(product => this.cartTotal += product.price);
    }

  }

}
