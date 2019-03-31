//#########################
//#########APP#############
//#########################
require('./config.js')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//Usando Parser
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//Parse  application/json
app.use(bodyParser.json());


app.get('/socio', function(req, res) {
  res.json('Salve noix, vai o get');
});
//Petição post requerindo Parse
app.post('/socio', function(req, res) {
  let objBody = req.body;
  if (objBody.nome === undefined) {
    res.status(400).json({
      ok: false,
      aviso: 'O nome é necessário'
    });
  }else{
    res.json({
      Socio: objBody
    });
  }

});
//Petição put requerindo parametros da url
app.put('/socio/:id', function(req, res) {
  let idSocio = req.params.id;
  res.json({
    id: idSocio
  });
});
app.delete('/socio', function(req, res) {
  res.json('Salve noix, vai o delete');
});
app.listen(process.env.PORT, () => {
  console.log('Servidor na porta ', process.env.PORT);
});
