-- Creation of database's table called "products"
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    date DATE,
    name VARCHAR(40),
    quantity INT,
    distance FLOAT
);

CREATE INDEX products_global_idx ON products (id, "date", name, quantity, distance);

-- Insert data in products table
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-01-01', 'Product 1', 1, 1.0);
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-11-01', 'Product 2', 6, 4.0);
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-11-01', 'Product 3', 1, 1.0);
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-01-01', 'Product 4', 6, 4.0);
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-01-01', 'Product 5', 11, 1.0);
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-03-01', 'Product 6', 6, 4.0);
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-04-01', 'Product 7', 9, 3.0);
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-01-01', 'Product 8', 7, 4.0);
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-05-01', 'Product 9', 10, 3.0);
INSERT INTO products (date, name, quantity, distance) VALUES ('2020-01-01', 'Product 10', 6, 4.0);
