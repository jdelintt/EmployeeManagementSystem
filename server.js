var express = require("express");
var mysql = require("mysql");
const inquirer = require("inquirer");

require("./app/questions")(app);


inquirer.prompt(questions).then((answers) => {

    
}
