var sodexo = require('sodexo');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/api/saldo', function(req, res) {
  if (!req.body.card || !req.body.document) return res.sendStatus(400);

  sodexo
    .saldo(req.body.card, req.body.document)
    .then(saldo => res.json(saldo))
    .catch(err => res.json({status: 'error', message: err}));
});

app.listen(app.get('port'), function() {
  console.log('Sodexo API is running on port', app.get('port'));
});
