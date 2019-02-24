import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Order } from '../models/order.model';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8200/shopping/api/orders';

  getAllOrders() {

    return new Promise((resolve, reject) => {

      this.http.get(this.url)
        .toPromise()
        .then(res => {
          resolve(res);
        });

    });

  }

  checkDate(date) {

    return new Promise((resolve, reject) => {

      this.http.get(this.url, { params: new HttpParams().set('shippingDate', date) })
        .toPromise()
        .then(res => {
          resolve(res);

        });

    });

  }

  submitOrder(order: Order) {

    this.http.post(this.url, order)
      .subscribe((res: any) => {

      });

  }

}
