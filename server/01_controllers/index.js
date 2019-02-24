const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const dbConnection = require('./../00_models/index');

const user = require('./user');
const category = require('./category');
const product = require('./product');
const cart = require('./cart');
const ProductInCart = require('./productInCart');
const Order = require('./order');

const app = express();
const port = process.env.PORT || 8200;

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/../02_views')));

user.init(app, cors);
category.init(app, cors);
product.init(app, cors);
cart.init(app, cors);
ProductInCart.init(app, cors);
Order.init(app, cors);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
