var express = require("express");
var mysql = require("mysql");
const inquirer = require("inquirer");
const initialQuestion = require("./app/questions");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./app"));

inquirer
  .prompt(initialQuestion)
  .then((answers) => {
    console.log(answers.questionStart);
    var initialQ = answers.questionStart;
  })
  .then(function (result) {
    if (initialQ === "Department") {
    } else if (initialQ === "Roles") {
    }
    else (initialQ === "Department") {
        
    };
  });
