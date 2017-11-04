const router = require('express').Router()

router.post('/issueTicket', function (req, res) {
  console.log('got issueTicket request', req.body);
  res.send('got issueTicket request');
})

router.get('/allTickets', function (req, res) {
  console.log('got AllTicket request', req.body);
  res.send('got AllTicket request');
})

router.post('/dismissedTickets', function (req, res) {
  console.log('got dismissedTickets request', req.body);
  res.send('got dismissedTickets request');
})

router.post('/finedTickets', function (req, res) {
  console.log('got finedTickets request', req.body);
  res.send('got finedTickets request');
})

module.exports = router