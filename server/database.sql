CREATE DATABASE Internship;


CREATE TABLE Quotes (
  id SERIAL PRIMARY KEY,
  product_type VARCHAR(200),
  gender VARCHAR(200),
  smoker VARCHAR(200),
  postal_code VARCHAR(200),
  coverage VARCHAR(200),
  residency VARCHAR(200),
  email VARCHAR(200)
);