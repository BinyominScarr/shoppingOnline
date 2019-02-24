// THIS WHOLE COMPONENET IS PRETTY SELF EXPLANATORY, -
// - ESPECIALLY IF YOU GO THROUGHT THE COMPONENTS BY ORDER AND READ THE PREVIOUS COMMENTS.
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ProductService } from '../shared/services/product.service';
import { ServiceManager } from '../shared/managers/service.manager';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor(
    public serviceManager: ServiceManager,
    private productService: ProductService
  ) { }

  selectedProducts;
  currentCategory;
  currentProduct;

  formGroupConfig = {
    productName: this.formController(1, 50, 'Name', /[A-Za-z0-9]/),
    categoryId: this.formController(1, 1, 'Category ID', /[1-4]/),
    price: this.formController(1, 6, 'Price', /^(00|[1-9]{1}[0-9]{0,2})[.]{1}[0-9]{2}$/),
    image: this.formController(5, Infinity, 'Image Link', /^\S+(\.png|\.jpg|\.jpeg|\.svg)$/),
  };

  form = new FormGroup(this.formGroupConfig);

  formController(min, max, label, regex?) {
    return new FormControl('', [
      f => !f.value && !f.pristine ? { error: '' } : null,
      f => !f.value && f.dirty ? { error: `${label} is required` } : null,
      f => f.value && f.value.length < min ? { error: `${label} is too short (min ${min} characters).` } : null,
      f => f.value && f.value.length > max ? { error: `${label} is too long (max ${max} characters).` } : null,
      f => f.value && !RegExp(regex).test(f.value) ? { error: `${f.value} is an invalid ${label}.` } : null,
    ]);
  }

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

  editProduct(productName) {

    const productHolder = this.serviceManager.products.filter(el => el.productName === productName);

    this.currentProduct = {
      productName: productName,
      categoryId: productHolder[0].categoryId,
      price: productHolder[0].price,
      image: productHolder[0].image
    };

  }

  clicked(product) {

    product.click();

  }

  addProduct() {

    this.currentProduct = {
      productName: 'new product',
      categoryId: '',
      price: '',
      image: ''
    };

  }

  updateProduct() {

    this.currentProduct = {
      productName: this.form.value.productName,
      categoryId: Number(this.form.value.categoryId),
      price: Number(this.form.value.price),
      image: this.form.value.image
    };

    this.productService.updateProduct(this.currentProduct);

    window.location.reload();

  }

  ngOnInit() {

    this.serviceManager.loadServices();

  }

}
