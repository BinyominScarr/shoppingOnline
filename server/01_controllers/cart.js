const cart = require('./../00_models/cart');
const url = '/shopping/api/carts';

let init = (app, middleware) => {

  app.get(url, middleware, (req, res) => {

    cart.CartModel.findOne({ customerId: req.query.customerId })
      .then(cart => {
        res.status(200).send(cart);
      })
      .catch((error) => {
        res.status(401).send(error);
      });

  });

  app.post(url, (req, res) => {

    let newCart = new cart.CartModel(req.body);

    newCart.save()
      .then(savedCart => {
        res.status(201).send(savedCart);
      })
      .catch((error) => {
        res.status(400).send(error);
      });

  });

}

module.exports = { init };
