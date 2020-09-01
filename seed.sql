DROP DATABASE IF EXISTS team_manager_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE team_manager_db;

USE team_manager_db;

-- Create the table plans.
CREATE TABLE employee
(
  id int NOT NULL
  AUTO_INCREMENT,
  first_name varchar
  (30) NOT NULL,
  last_name VARCHAR
  (30) NOT NULL,
  dept_id int NOT NULL,
  manager_id int NULL

);

  CREATE TABLE role
  (
    id int NOT NULL
    AUTO INCREMENT, 
    title VARCHAR
    (30) NOT NULL,
    salary DECIMAL
    dept_id int NULL
    -- department_id
  
);

    CREATE TABLE department_id
    (
      id int NOT NULL
      AUTO_INCREMENT, 
      dept_name VARCHAR
      (30)
);


