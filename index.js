const express = require("express");
require('dotenv').config();
const routes = require('./routes');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(routes.universityRoutes);

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});
