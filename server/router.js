const router = require('express').Router()

router.post('/issueTicket', function (req, res) {
  console.log('got issueTicket request', req.body);
  res.send('got issueTicket request');
})

router.get('/all', function (req, res) {
  console.log('got All Ticket request', req.body);
  res.send('got AllTicket request');
})

router.get('/pending', function (req, res) {
  console.log('got pending ticket request', req.body);
  res.send('got pending ticket request');
})

router.get('/dismissed', function (req, res) {
  console.log('got dismissed Ticket request', req.body);
  res.send('got dismissed Ticket request');
})

router.get('/fined', function (req, res) {
  console.log('got fined Ticket request', req.body);
  res.send('got fined Ticket request');
})

module.exports = router