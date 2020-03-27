// Se requiere el paquete de express
const express = require('express')
// Se crea la variable u objeto de express
const app = express()
// Variables de la aplicacion
app.set('appName','Sitio del Colegio')
app.set('port',3000)
app.set('view engine','ejs')
// Configurara la carpeta de static
app.use(express.static('static'))
// Ruta principal
app.get('/', (req, res) => {
    res.render('index.ejs')
})
// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})