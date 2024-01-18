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
  sub_cat ENUM ("coloration", "hairspray", "shampoo", "lipstick", "mascara", "nail", "face_powder", "cream"),
  price DECIMAL,
  description TEXT,
  quantity_unitary DECIMAL,
  quantity_total INT,
  color VARCHAR(50),
  picture TEXT
);
