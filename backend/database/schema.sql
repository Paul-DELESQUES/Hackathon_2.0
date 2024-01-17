-- SQLBook: Code
DROP DATABASE IF EXISTS loreal;
CREATE DATABASE loreal;
USE loreal;
DROP TABLE IF EXISTS product;

CREATE TABLE product (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  category ENUM ("hair", "makeup", "hygiene"),
  sub_cat ENUM ("coloration", "gel", "shampoo", "redlips", "mascara", "nail", "eye_shadow", "perfume", "deo"),
  price DECIMAL,
  description TEXT,
  quantity_unitary DECIMAL,
  quantity_total INT,
  color VARCHAR(50),
  picture BLOB
);
