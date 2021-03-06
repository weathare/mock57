var jsonServer = require('json-server');
var server     = jsonServer.create();
var router     = jsonServer.router('db.json');
var middleware = jsonServer.defaults();
var auth       = require('basic-auth');
var bodyParser = require('body-parser');
var logger     = require('morgan-body');

server.use(middleware);
server.use(bodyParser.json());
logger(server);
server.use(function (req, res, next) {
  var check = auth(req);
  if (!check || check.name !== 'john' || check.pass !== 'qwertyuiop@') {
    res.sendStatus(401);
    res.end('Acccess denide');
 } else {
    next();
  }
});

server.use(router);
server.listen(3000, function() {
  console.log("JSON Server is running");
});
