drop database lapd;
create database lapd;

use lapd;

create table tickets (
  id integer auto_increment,
  name text,
  violation text,
  description text,
  image text,
  result text,
  primary key (id)
);

/*
  mysql.server start
  mysql -u root < schema.sql
  mysql -u root
*/