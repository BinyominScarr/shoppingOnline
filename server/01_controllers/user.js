const jwt = require('jsonwebtoken');
const user = require('./../00_models/user');
const url = '/shopping/api/users';

let init = (app, middleware) => {

  app.post(url, (req, res) => {

    let newUser = new user.UserModel(req.body);

    newUser.save()
      .then(savedUser => {
        let data = {
          user: savedUser,
          isLoggedIn: true,
        };
        res.header('xx-auth', jwt.sign(data, 'secret'));
        res.status(201).send(JSON.stringify({ "status": "register success" }));
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  app.get(url, middleware, (req, res) => {

    if (req.header('xx-auth')) {
      user.UserModel.findOne({
        'email': req.header('xx-auth').substring(64, req.header('xx-auth').length),
        'password': req.header('xx-auth').substring(0, 64)
      })
        .then(user => {
          if (user != null) {
            let data = {
              user: user,
              isLoggedIn: true,
            };
            res.header('xx-auth', jwt.sign(data, 'secret'));
            res.status(200).send(JSON.stringify({ "status": "login success" }));
          } else {
            res.sendStatus(401);
          }
        })
        .catch(error => res.status(401).send(error));
    } else res.sendStatus(401);
  });

}

module.exports = { init }
