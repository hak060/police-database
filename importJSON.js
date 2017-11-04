const ticketdata = require('./ticketdata.json')
const mysql = require('mysql')
const db = require('./db/db.js')

ticketdata.map(ticket => {
  var sqlString = `insert into tickets (name, violation, description, image, result) \
    values ("${ticket.name}", "${ticket.violation}", "${ticket.description}", "${ticket.image}", "${ticket.result}")`;
  db.connection.query(sqlString, function(err, rows) {
    console.log(err);
  });
})

/*
  insert into tickets (name, violation, description, image, result) \
   values ("jay", "speeding", "NA", "NA", "pending")
  {
    "name": "jay",
    "violation": "speeding",
    "description": "NA",
    "image": "NA",
    "result": "pending"
  },
*/