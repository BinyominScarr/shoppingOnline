const order = require('./../00_models/order');
const url = '/shopping/api/orders';
// order.OrderModel.findOne({ ord_dt: { $eq: req.body } }).limit(3).count(true)

let init = (app, middleware) => {

  app.get(url, middleware, (req, res) => {

    order.OrderModel.find({})
      .then(order => {
        res.status(200).send(order);
      })
      .catch(error => res.status(401).send(error));

  });

  app.post(url, (req, res) => {

    let newOrder = new order.OrderModel(req.body);

    newOrder.save()
      .then(savedOrder => {
        res.status(201).send(savedOrder);
      })
      .catch((error) => {
        res.status(400).send(error);
      });

  });

}

module.exports = { init };
