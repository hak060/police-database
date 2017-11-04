const mysql = require('mysql')

exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  passward: '',
  database: 'lapd'
});

/*
  use lapd;
  
*/