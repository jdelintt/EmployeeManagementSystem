const inquirer = require("inquirer");

require("console.table");

const orm = require("./db");

// const initialQuestion = require("./app/questions");

// var initialQuestion = [
//   {
//     type: "list",
//     name: "questionStart",
//     message: "What section needs to be changed?",
//     choices: ["Department", "Roles", "Employee"],
//   },
// ];

// var addEmployee = [
//   {
//     type: "input",
//     name: "employee",
//     message: "What is the name of your department?",
//   },
// ];

// var addDepartment = [{}];

// var addRole = [{}];

// Start inquirer prompts//

async function loop() {
  let running = true;
  try {
    while (running) {
      const { action } = await displayMenu();
      switch (action) {
        case "View Departments":
          await displayDepartments();
          break;
        case "View Roles":
          await displayRoles();
          break;
        case "View Employees":
          await displayEmployees();
          break;
        case "Add Department":
          await addDepartment();
          break;
        case "Add Role":
          await addRole();
          break;
        case "Add Employee":
          await addEmployee();
          break;
        case "Exit":
          running = false;
          console.log("Thanks... Bye!!!");
          break;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function displayMenu() {
  return await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What section needs to be changed?",
      choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Exit",
      ],
    },
  ]);
}

async function displayDepartments() {
  const departments = await orm.getDepartments();
  if (departments.length) console.table(departments);
  else console.log("No departments");
}

async function displayRoles() {
  const roles = await orm.getRoles();
  if (roles.length) console.table(roles);
  else console.log("No roles");
}

async function displayEmployees() {
  const employees = await orm.getEmployees();
  if (employees.length) console.table(employees);
  else console.log("No employees");
}

async function addDepartment() {
  const responses = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of this department?",
    },
  ]);
  orm.createDepartment(responses);
}

async function addRole() {
  const departments = await orm.getDepartments();
  const responses = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of this role?",
    },
    {
      type: "number",
      name: "salary",
      message: "What is the salary of this role?",
    },
    {
      type: "list",
      name: "department_id",
      message: "Which deparment is this role in?",
      choices: departments.map((department) => ({
        name: department.name,
        value: department.id,
      })),
    },
  ]);
  orm.createRole(responses);
}

async function addEmployee() {}

// inquirer
//   .prompt(initialQuestion)
//   .then((answers) => {
//     console.log(answers.questionStart);
//     var initialQ = answers.questionStart;
//     return initialQ;
//   })
//   .then(function (result) {
//     if (result === "Department") {
//       inquirer.prompt(addEmployee).then((answers) => {
//         console.log(answers);
//       });
//     } else if (result === "Roles") {
//     } else result === "Department";
//   });

loop();
