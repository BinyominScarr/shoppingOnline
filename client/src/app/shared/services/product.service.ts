import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8200/shopping/api/products';

  getAllProducts() {

    return new Promise((resolve, reject) => {

      this.http.get(this.url)
        .toPromise()
        .then(res => {
          resolve(res);
        });

    });

  }

  updateProduct(product: Product) {

    this.http.put(this.url, product)
      .subscribe(res => { });

  }

}
