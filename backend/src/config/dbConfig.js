const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

const dbConfig = 'mongodb+srv://kristman058:d2YDX0dso515NcRW@cluster0.sdrp2kl.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig)
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.log(error));

module.exports = connection;
