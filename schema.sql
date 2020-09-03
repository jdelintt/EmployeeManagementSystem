DROP DATABASE IF EXISTS team_manager_db;


CREATE DATABASE team_manager_db;

USE team_manager_db;

CREATE TABLE departments
(
    id INT
    AUTO_INCREMENT NOT NULL,
    name VARCHAR
    (30) NOT NULL,
    PRIMARY KEY
    (id)
);


    CREATE TABLE roles
    (
        id INT
        AUTO_INCREMENT NOT NULL,
    title VARCHAR
        (30) NOT NULL,
    salary DECIMAL
        (16,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY
        (id),
    FOREIGN KEY roles
        (department_id) REFERENCES departments
        (id)
);

        CREATE TABLE employees
        (
            id INT
            AUTO_INCREMENT NOT NULL,
    first_name VARCHAR
            (30) NOT NULL,
    last_name VARCHAR
            (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY
            (id),
    FOREIGN KEY employees
            (role_id) REFERENCES roles
            (id),
    FOREIGN KEY
            (manager_id) REFERENCES employees
            (id)
);

  

