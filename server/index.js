const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Carrega variables entorn de fitxer .env
require('dotenv').config()

//Per evitar l'error de CORS en fer peticions des d'un altre servidor
const cors = require('cors')

const uri = `mongodb+srv://dbUser:${process.env.PASSWORD}@cluster0.tuhp5.mongodb.net/uci_database?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

/*
Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
Note As req.body's shape is based on user-controlled input, all properties and values in this object 
are untrusted and should be validated before trusting. For example, req.body.foo.toString() may fail in multiple ways, 
for example the foo property may not be there or may not be a string, and toString may not 
be a function and instead a string or other user input.
*/
const bodyParser = require('body-parser')

//Middleware
app.use(bodyParser.json())
app.use(cors())

// Rutes de la API
const cyclists = require('./routes/api/cyclists')
//En cas de ruta iniciada amb  /api/cyclists,
// la ruta completa la processarà el fitxer superior
app.use('/api/cyclists', cyclists)

// PRODUCTION
//xtoni  -> cal definir la var entorn  NODE_END  en .env
if (process.env.NODE_ENV === 'production') {
  //Static folder que hem creat en fer   npm run build
  app.use(express.static(__dirname + '/public/'))
  //Handle Single Page Application :   qualsevol ruta -- xtoni
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

// Sobre 'process':  https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process

// Iniciam el servidor
const port = process.env.PORT || 80
app.listen(port, () => {
  console.log(`Servidor iniciat a http://localhost:${port}`)
})
