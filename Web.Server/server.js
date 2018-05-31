//Controlador: Carpeta que contiene todos los controladores de los modulos
var userCtrl = require('./Controlador/userCtrl.js');


/****************************************************************/
//Configuraciones principales del servidor, con esto escucha las peticiones...
var bodyParser = require('body-parser');
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    port = 9002;
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Se direccionan las vistas. EL mismos server levanta las vistas, para el caso de AngularJs.
//app.use('/', express.static(__dirname + '/../Web.App'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/****************************************************************/
//Inicio de las direcciones. Endpoints!
//La peticion es lo que se necesita del servidor ejemplo: getUsuario o doLogin.
app.get('/getStudent/:typeOfUser', userCtrl.getStudent);
app.post('/registerNewUser', userCtrl.registerNewUser);
app.post('/updateUser', userCtrl.updateUser);

//Pone el servidor en escucha de peticiones,lo levanta en el puerto requerido.
//Para ello se necesita que navegue hacia la ruta y darle "node server" por medio del cmp 
server.listen(port, function () {
    console.log('Servidor escuchando en el puerto: ' + port);
});