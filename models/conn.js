const { MongoClient } = require('mongodb');
require('dotenv').config();

const EMPTY_STRING = "";

function setConfig(value, defaultValue = EMPTY_STRING) {
  return value ? value : defaultValue;
}

const DB_NAME = setConfig(process.env.MONGO_DB);
const USER = setConfig(process.env.MONGO_USER);
const HOST=  setConfig(process.env.MONGO_SERVER);
const PASSWORD = setConfig(process.env.MONGO_PASSWORD);

const MONGO_DB_URL = `mongodb://${USER}:${PASSWORD}@${HOST}`

connection = () =>
  MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

module.exports = connection;
