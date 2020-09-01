module.exports = function (app) {
  var initialQuestion = [
    {
      type: "list",
      name: "questionStart",
      message: "What section needs to be changed?",
      choices: ["Department", "Roles", "Employee"],
    },
  ];
};
