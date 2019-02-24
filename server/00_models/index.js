const mongoose = require('mongoose');
const db = 'shopping';

mongoose.set('useCreateIndex', true);

mongoose.connect(`mongodb://localhost:27017/${db}`, { useNewUrlParser: true }, (err) => {

  if (!err) {

    console.log(`db running on db ${db}`);

  } else {

    console.log(err.message);

  }
  
});

module.exports = { mongoose }
