// Se requiere el paquete de express
const express = require('express')
// Se crea la variable u objeto de express
const app = express()
// Variables de la aplicacion
app.set('appName','Colegio Nacional Gral. Elizardo Aquino')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')
// Configurara la carpeta de static
app.use(express.static('static'))
// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})
app.get('/electronica', (req, res) => {
    var title = app.get('appName')+" | Electrónica"
    res.render('electronica.ejs', {title: title} )
})
// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
