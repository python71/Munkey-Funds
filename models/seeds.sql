INSERT INTO Users (firstname, lastname, password, email, goal, createdAt, updatedAt)
VALUES('Anna', 'King', 'password', 'aking@gmail.com', 'learn more about the stock market', NOW(), NOW()),
('Jesse', 'Doe', 'password', 'jdoe@gmail.com', 'keep track of my stocks', NOW(), NOW()),
('Geoffrey', 'Harris', 'password', 'mrharris@gmail.com', 'make more money', NOW(), NOW())

INSERT INTO Stocks (stock, shares, createdAt, updatedAt, userId)
VALUES ('fb', 40, NOW(), NOW(), (SELECT id FROM Users WHERE email='aking@gmail.com')),
('aapl', 60, NOW(), NOW(), (SELECT id FROM Users WHERE email='aking@gmail.com')),
('fslr', 10, NOW(), NOW(), (SELECT id FROM Users WHERE email='aking@gmail.com')),
('fb', 50, NOW(), NOW(), (SELECT id FROM Users WHERE email='jdoe@gmail.com')),
('goog', 60, NOW(), NOW(), (SELECT id FROM Users WHERE email='jdoe@gmail.com')),
('goog', 20, NOW(), NOW(), (SELECT id FROM Users WHERE email='mrharris@gmail.com'))