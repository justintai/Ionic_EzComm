CREATE TABLE IF NOT EXISTS items (items_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255) NOT NULL, price REAL NOT NULL, stock INTEGER NOT NULL, min_purc INTEGER, promo_price REAL, image TEXT, created_date VARCHAR(255));
CREATE TABLE IF NOT EXISTS orders (order_id INTEGER PRIMARY KEY AUTOINCREMENT, items_id INTEGER NOT NULL, qty INTEGER NOT NULL, amount REAL NOT NULL, cus_name VARCHAR(255) NOT NULL, cus_tel VARCHAR(255), cus_address TEXT, shipping_no VARCHAR(255), order_date VARCHAR(255) NOT NULL, status INTEGER);
--