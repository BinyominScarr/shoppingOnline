import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8200/shopping/api/carts';

  getCart(customerId: string) {

    return new Promise((resolve, reject) => {

      this.http.get(this.url, { params: new HttpParams().set('customerId', customerId) })
        .toPromise()
        .then(res => {
          res == null ?
          reject(res) :
          resolve(res);
        });

    });

  }

  createCart(customerId: string) {

    return new Promise((resolve, reject) => {

      this.http.post(this.url, {
        customerId: customerId,
        creationDate: new Date().toString().substring(0, 24)
      })
        .toPromise()
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });

    });

  }

}
