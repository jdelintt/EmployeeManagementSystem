const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mypass",
  database: "team_manager_db",
});

connection.connect();

const orm = {
  getDepartments() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM departments", (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  getRoles() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM roles", (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  getEmployees() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employees", (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  createDepartment(values) {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO departments SET ?", values, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  createRole(values) {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO roles SET ?", values, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  createEmployee(values) {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO employees SET ?", values, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  updateEmployee(id, values) {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE employees SET ? WHERE ?",
        [values, { id }],
        (err, data) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });
  },
  updateDepartment(id, values) {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE department SET ? WHERE ?",
        [values, { id }],
        (err, data) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });
  },
};

module.exports = orm;
