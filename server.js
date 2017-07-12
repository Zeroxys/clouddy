const express = require('express')
const port = process.env.PORT || 8080

const app = new express()

// app.use(express.static('./dist/fonts'))
// app.use(express.static('./dist/img'))
app.use(express.static('dist'))

app.get('/', (req,res) => {
  res.status(200).sendfile('./dist/index.html')
})

app.listen(port, (err) => {
  if(!err) {
    return console.log(`Server run on port ${port}`)
  }

  console.log(`Error happened : ${err}`)
})