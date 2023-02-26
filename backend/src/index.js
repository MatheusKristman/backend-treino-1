const express = require('express');
const app = express();
require('./config/dbConfig');
const router = require('./routes');

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  return res.json({
    nome: "Heudmann",
    profissao: 'Engenheiro',
  });
});

app.listen(3333, () => {
  console.log('running on port 3333');
});