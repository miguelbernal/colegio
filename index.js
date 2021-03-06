// Se requiere el paquete de express
const express = require('express')
var usuariosRouter = require('./routes/usuarios');
// Se crea la variable u objeto de express
const app = express()
// Variables de la aplicacion
app.set('appName','Colegio Nacional Gral. Elizardo Aquino')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')
// Configurara la carpeta de static
app.use(express.static('static'))
// para poder usar json en la peticiones del cliente para que el servidor lo reconozca
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})
app.get('/electronica', (req, res) => {
    var title = app.get('appName')+" | Electrónica"
    res.render('electronica.ejs', {title: title} )
})
app.get('/electricidad', (req, res) => {
    var title = app.get('appName')+" | Electricidad"
    res.render('electricidad.ejs', {title: title} )
})
app.get('/contacto', (req, res) => {
    var title = app.get('appName')+" | Contacto"
    res.render('contacto.ejs', {title: title} )
})
// admin
app.get('/admin', (req, res) => {
    var title = app.get('appName')+" | Admin"
    res.render('admin.ejs', {title: title} )
})

// menu
app.get('/menu', (req, res) => {
    var title = app.get('appName')+" | Menu"
    res.render('menu.ejs', {title: title} )
})

// servidor (api)
app.use('/api/usuarios', usuariosRouter);

// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
