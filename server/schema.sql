CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
  );

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(100) NOT NULL,
  created_At CHAR(30) NOT NULL,
  user_Id INT NOT NULL,
  chatroom CHAR(30) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_Id) REFERENCES users(id)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

