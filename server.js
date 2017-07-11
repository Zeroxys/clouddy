const express = require('express')
const port = process.env.PORT || 8080

const app = new express()

app.use('/static', express.static('dist'))

app.get('/', (req,res) => {
  res.status(200).send('Hello world')
})

app.listen(port, (err) => {
  if(!err) {
    return console.log(`Server run on port ${port}`)
  }

  console.log(`Error happened : ${err}`)
})