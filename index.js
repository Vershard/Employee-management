const Manager = require("./lib/Manager"); 
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern"); 
const inquirer = require("inquirer");
const path = require('path');
const fs = require('fs');

const outputDirectory = path.resolve(__dirname, "Output");
const outputPath = path.join(outputDirectory, "team.html")

const render = require('./src/html-template.js');


const team = [];

function mainMenu(){

    function setUpManager(){
        inquirer.prompt([
            {
                type: "input",
                name: "managersName",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "managersId",
                message: "What is the manager's work ID?"
            },
            {
                type: "input",
                name: "managersEmail",
                message: "What is the manager's email?"
            },
            {
                type: "input",
                name: "managersNumber",
                message: "What is the manager's office number?"
            }
        ]).then(answers =>{
            const manager = new Manager(answers.managersName, answers.managersId, answers.managersEmail, answers.managersNumber)
            team.push(manager)
            console.log("NEW TEAM MEMBER", team)
            addTeamMembers()
        })
    }

    function addTeamMembers(){

        inquirer.prompt([
            {
                type: "list",
                name: "userChoice",
                message: "Which type of team member do you want to add?",
                choices: ["Engineer", "Intern", "I dont want to add anymore members."]
            }
        ]).then( answer => {
            if(answer.userChoice === "Engineer"){
                addEngineer()
            } else if (answer.userChoice === "Intern"){
                addIntern()
            } else {renderTeam()}
        })
    }

    function addEngineer(){
        console.log("We  chose to make an Engineer so now use inquirer.prompt to ask them questions and  create new Engineer and push to team array")
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the Engineers name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the Engineers ID?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineers email?"
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is the Engineers Github?"
            },
        ]).then(answers =>{
            const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.gitHub)
            team.push(newEngineer)
            console.log("NEW TEAM MEMBER", team)
            addTeamMembers()
        })
    

    }


    function addIntern(){
        console.log("We  chose to make an Intern so now use inquirer.prompt to ask them questions and  create new Intern and push to team array")
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the Interns name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the Interns ID?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the Interns email?"
            },
            {
                type: "input",
                name: "schoolName",
                message: "What is the Intern school name?"
            }
        ]).then(answers =>{
            const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.schoolName)
            team.push(newIntern)
            console.log("NEW TEAM MEMBER", team)
            addTeamMembers()
        })
    

    }

    function renderTeam(){
        if(!fs.existsSync(outputDirectory)){
            fs.mkdirSync(outputDirectory)
        }
        // console.log(JSON.stringify(team))
                fs.writeFileSync(outputPath, render(team), "utf-8")
    }
   

setUpManager()
}

mainMenu()