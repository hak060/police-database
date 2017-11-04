const router = require('express').Router()
const models = require('../db/models.js')

router.post('/issueTicket', function (req, res) {
  console.log('got issueTicket request', req.body);
  res.send('got issueTicket request');
})

router.get('/all', function (req, res) {
  console.log('got All Ticket request', req.body);
  models.all.get(function(err, rows) {
    console.log('rows ========= ', rows);
    res.send(rows);
  })
})

router.post('/filter', function (req, res) {
  // console.log('got pending ticket request =====', req.body.type);
  models.filter.get(req.body.type, function(err, rows) {
    console.log('rows ========= ', rows);
    res.send(rows);
  })
})

module.exports = router