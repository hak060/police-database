const db = require('./db.js')
const mysql = require('mysql')

module.exports = {
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
      var sqlString = `select * from tickets where result = "${keyward}"`;
      console.log('sqlString =====', sqlString)
      db.connection.query(sqlString, function (err, rows) {
        callback(err, rows);
      });
    }
  }
}