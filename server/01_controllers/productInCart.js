const productInCart = require('./../00_models/productInCart');
const url = '/shopping/api/productincart';

let init = (app, middleware) => {

  app.get(url, middleware, (req, res) => {

    productInCart.ProductInCartModel.find({ cartId: req.query.cartId })
      .then(productsInCart => {
        res.status(200).send(productsInCart);
      })
      .catch((error) => {
        res.status(401).send(error);
      });

  });

  app.post(url, (req, res) => {

    let addProductToCart = new productInCart.ProductInCartModel(req.body);

    addProductToCart.save()
      .then(addedCartProduct => {
        res.status(201).send(addedCartProduct);
      })
      .catch((error) => {
        res.status(400).send(error);
      });

  });

  app.put(url, (req, res) => {

    productInCart.ProductInCartModel.updateOne(
      { cartId: req.body.cartId, productId: req.body.productId },
      { $inc: { quantity: req.body.quantity, price: req.body.price } },
    )
      .then(addedCartProduct => {
        res.status(201).send(addedCartProduct);
      })
      .catch((error) => {
        res.status(400).send(error);
      });

  });

  app.delete(url, (req, res) => {

    productInCart.ProductInCartModel.deleteOne(req.query)
      .then(productsInCart => res.status(204).send(productsInCart))
      .catch(error => res.status(400).send(error));
  });

  app.delete(url + '/:clearcart', (req, res) => {

    productInCart.ProductInCartModel.deleteMany(req.query)
      .then(productsInCart => res.status(204).send(productsInCart))
      .catch(error => res.status(400).send(error));
  });

}

module.exports = { init };
