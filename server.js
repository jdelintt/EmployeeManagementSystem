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
    return answers;
  })
  .then(function (result) {
    console.log(answers);
  });
