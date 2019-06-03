INSERT INTO Users (firstname, lastname, password, email, goal, createdAt, updatedAt)
VALUES('Anna', 'King', 'password', 'aking@gmail.com', 'learn more about the stock market', NOW(), NOW()),
('Jesse', 'Doe', 'password', 'jdoe@gmail.com', 'keep track of my stocks', NOW(), NOW()),
('Geoffrey', 'Harris', 'password', 'mrharris@gmail.com', 'make more money', NOW(), NOW())

Create Table Stocks
INSERT INTO Stocks (ticker, company, price, shares, stock_value, ownerId)
VALUES ('fb', "facebook", 40.00, 2.00, 80.00, 9),
