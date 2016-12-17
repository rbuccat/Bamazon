CREATE database Bamazon;

use Bamazon;

CREATE TABLE products (
  item_id INT NOT NULL UNIQUE,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10, 2) NULL,
  stock_quantity INT NULL
);

select * from products;

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (1, 'Tide', 'Household Essentials', 17.99, 20);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (2, 'Band-Aid', 'Health', 8.99, 25);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (3, 'Gerber Oatmeal Cereal', 'Baby', 2.19, 10);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (4, 'Loreal Mascara', 'Beauty', 6.99, 7);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (5, '65" Samsung 4K TV', 'Electronics', 1099.99, 7);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (6, 'Pedigree Dog Food', 'Pets', 22.99, 10);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (7, 'Sharpee Permanent Marker, 12pk', 'Office Supplies', 18.99, 5);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (8, 'JanSport Backpack', 'Luggage', 34.99, 30);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (9, 'Pirates Booty', 'Grocery', 5.99, 8);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (10, 'Hanes T-shirt, 6pk', 'Clothing', 14.99, 12);

update products set stock_quantity = 7 where item_id = 5;

select stock_quantity from products where item_id = 5;