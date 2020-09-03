var initialQuestion = [
  {
    type: "list",
    name: "questionStart",
    message: "What section needs to be changed?",
    choices: ["Department", "Roles", "Employee"],
  },
];

var addEmployee = [
  {
    type: "input",
    name: "employee",
    message: "What is the name of your department?",
  },
];

var addDepartment = [{}];

var addRole = [{}];

module.exports = initialQuestion;
module.exports = addEmployee;
