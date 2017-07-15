const express = require('express')
const errorHandler = require('express-error-handler')
//const port = process.env.PORT || 8080

const app = new express()

app.set('port', (process.env.PORT || 80))
app.use(express.static('dist'))

app.get('/', (req,res) => {
  res.status(200).sendfile('./dist/index.html')
})
