const db = require('./db.js')
const mysql = require('mysql')



module.exports = {
  issue: {
    post: function(data, callback) {
      let sqlString = `insert into tickets (name, violation, description, image, result) \
        values ("${data.name}", "${data.violation}", "${data.description}", "${data.image}", "pending")`;
      console.log('sqlString =====', sqlString)
      db.connection.query(sqlString, function (err, rows) {
        callback(err, rows);
      });
    }
  },

  all: {
    get: function (callback) {
      let sqlString = `select * from tickets`;
      db.connection.query(sqlString, function(err, rows) {
        callback(err, rows);
      });
    }
  },

  filter: {
    get: function (keyward, callback) {
      let sqlString = `select * from tickets where result = "${keyward}"`;
      console.log('sqlString =====', sqlString)
      db.connection.query(sqlString, function (err, rows) {
        callback(err, rows);
      });
    }
  },

  changePending: {
    post: function (data, callback) {
      let sqlString = `update tickets set result = "${data.decision}" where \
      name = "${data.ticket.name}" and \
      violation = "${data.ticket.violation}" and \
      description = "${data.ticket.description}" and \
      image = "${data.ticket.image}"`;
      console.log('sqlString =====', sqlString)
      db.connection.query(sqlString, function (err, rows) {
        callback(err, rows);
      });
    }
  }
}

/*
  insert into tickets (name, violation) values ("change", "change")
  update tickets set result = "dismissed" where name = "jay" and violation = "none"
*/

/*
create table tickets (
  id integer auto_increment,
  name text,
  violation text,
  description text,
  image text,
  result text,
  primary key (id)
);
*/