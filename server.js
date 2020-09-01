var express = require("express");
var mysql = require("mysql");
const inquirer = require("inquirer");
var express = require("express");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/questions")(app);

inquirer.prompt(initialQuestion).then((answers) => {});
