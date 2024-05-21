CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(name, email) 
VALUES ('Jhon Doe', 'john@gmail.com'), 
       ('Jane Doe', 'jane@gmail.com'),
       ('John Smith', 'johnsmith@gmail.com'),
('Alice Johnson', 'alicejohnson@yahoo.com'),
('Robert Brown', 'robertbrown@hotmail.com'),
('Emily Davis', 'emilydavis@outlook.com'),
('Michael Miller', 'michaelmiller@gmail.com'),
('Jessica Wilson', 'jessicawilson@yahoo.com'),
('David Anderson', 'davidanderson@hotmail.com'),
('Laura Thomas', 'laurathomas@outlook.com'),
('Daniel Jackson', 'danieljackson@gmail.com'),
('Megan White', 'meganwhite@yahoo.com'),
('Christopher Harris', 'christopherharris@hotmail.com'),
('Amanda Martin', 'amandamartin@outlook.com'),
('Joshua Thompson', 'joshuathompson@gmail.com'),
('Sarah Garcia', 'sarahgarcia@yahoo.com'),
('Andrew Martinez', 'andrewmartinez@hotmail.com'),
('Hannah Robinson', 'hannahrobinson@outlook.com'),
('Matthew Clark', 'matthewclark@gmail.com'),
('Olivia Rodriguez', 'oliviarodriguez@yahoo.com'),
('James Lewis', 'jameslewis@hotmail.com'),
('Sophia Lee', 'sophialee@outlook.com');

