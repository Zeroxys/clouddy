const https = require('https')
const app = require('./server/app.js')

https.createServer(app).listen(80)