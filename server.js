const express = require('express')
const compression = require('compression')
const errorHandler = require('express-error-handler')
const bodyParser = require('body-parser')
const serveStatic = require('serve-static')
const port = process.env.PORT || 3000
const app = new express()

// set our enviroment
app.set('port', (process.env.PORT || 80))
app.use(serveStatic('dist'))
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
app.use(compression())

// set routes

app.get('/', (req, res, next) => {
  res.status(200).sendFile(__dirname + '/dist/index.html')
})

app.get('/*', (req, res, next) => {
  res.status(404).sendFile(__dirname + '/dist/404.html')
})

app.post('/api/person', (req, res, next) => {
  console.log(`its ok : ${req.body}`)
})

app.listen(port, err => {
  if (err) {
    console.log(`Error happened :${err}`)
  }

  console.log(`Server running at port : ${port}`)
})