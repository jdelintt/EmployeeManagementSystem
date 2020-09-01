var express = require("express");
var mysql = require("mysql");
const inquirer = require("inquirer");
var express = require("express");
var questions = require("./app/questions");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

inquirer.prompt(questions.initialQuestion).then((answers) => {});
