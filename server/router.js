const router = require('express').Router()

router.get('/index/bundle.js', function (req, res) {
  console.log('index request', req)
  res.sendFile(path.resolve(__dirname, './client/compiled/bundle.js'))
})

module.exports = router