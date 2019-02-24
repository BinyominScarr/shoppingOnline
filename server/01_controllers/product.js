const product = require('./../00_models/product');
const url = '/shopping/api/products';

let init = (app, middleware) => {

  app.get(url, middleware, (req, res) => {

    product.ProductModel.find({})
      .then(product => {
        res.status(200).send(product);
      })
      .catch(error => res.status(401).send(error));

  });

  app.post(url, (req, res) => {

    let newProduct = new product.ProductModel(req.body);

    newProduct.save()
      .then(savedProduct => {
        res.status(201).send(savedProduct);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  app.put(url, (req, res) => {

    product.ProductModel.updateOne(
      { productName: req.body.productName },
      {
        productName: req.body.productName,
        categoryId: req.body.categoryId,
        image: req.body.image,
        price: req.body.price
      },
      { upsert: true }
    )
      .then(updatedProduct => {
        res.status(201).send(updatedProduct);
      })
      .catch((error) => {
        res.status(400).send(error);
      });

  });

}

module.exports = { init }
