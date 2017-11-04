const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const routes = require('./router.js')

const server = express()
  .use(bodyParser.json())
  .use('/main', routes)
  .use('/', express.static(path.resolve(__dirname, '../client')))
  .get('/*', (req, res) => {
    res.send('This is the wildcard endpoint')
  })


server.listen(3000, function(){
  console.log('server running ==================');
})
