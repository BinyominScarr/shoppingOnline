import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// import { Category } from '../models/product.model';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8200/shopping/api/categories';

  getCategories() {

    return new Promise((resolve, reject) => {

      this.http.get(this.url)
        .toPromise()
        .then(res => {
          resolve(res);
        });

    });

  }

}
