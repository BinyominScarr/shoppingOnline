const category = require('./../00_models/category');

let init = (app, middleware) => {

  app.get('/shopping/api/categories', middleware, (req, res) => {

    category.CategoryModel.find({})
      .then(category => {
        res.status(200).send(category);
      })
      .catch(error => res.status(401).send(error));
  });

}

module.exports = { init }
