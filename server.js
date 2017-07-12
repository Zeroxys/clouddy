const express = require('express')
//const port = process.env.PORT || 8080

const app = new express()

app.set('port', (process.env.PORT || 80))
app.use(express.static('dist'))

app.get('/', (req,res) => {
  res.status(200).sendfile('./dist/index.html')
})

app.listen(app.get('port'), (err) => {
  if(!err) {
    return console.log(`Server run on port ${app.get('port')}`)
  }

  console.log(`Error happened : ${err}`)
})