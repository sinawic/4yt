
CREATE DATABASE sinawic;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

INSERT INTO users (name, email)
VALUES ('Jane Doe', 'jane.doe@example.com'),
       ('Alice Smith', 'alice.smith@example.com'),
       ('Bob Johnson', 'bob.johnson@example.com');

DROP DATABASE sinawic;
