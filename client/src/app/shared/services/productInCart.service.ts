import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductInCart } from '../models/productInCart.model';

@Injectable()
export class ProductInCartService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8200/shopping/api/productincart';

  getProductsInCart(cartId) {

    return new Promise((resolve, reject) => {

      this.http.get(this.url, { params: new HttpParams().set('cartId', cartId) })
        .toPromise()
        .then(res => {
          resolve(res);
        });

    });

  }

  addToCart(product: ProductInCart) {

    this.http.post(this.url, product)
      .subscribe(res => { });

  }

  updateCart(cartId, productId, quantity, price) {
    this.http.put(this.url, { cartId, productId, quantity, price })
      .subscribe(res => { });
  }

  removeFromCart(cartId, productId) {

    this.http.delete(this.url, {
      params: new HttpParams()
        .set('cartId', cartId)
        .set('productId', productId)
    })
      .subscribe(res => { });
  }

  clearCart(cartId) {
    this.http.delete(this.url + '/clearcart', {
      params: new HttpParams()
        .set('cartId', cartId)
    })
      .subscribe(res => { });
  }

}
