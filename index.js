const Manager = require("./lib/Manager"); 
const Engineer = require("./lib/Engineer"); 
const Intern = require("./lib/Intern"); 
const inquirer = require("inquirer");



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
                name: "gitHub",
                message: "What is the Engineers Github?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineers email?"
            },
            {
                type: "input",
                name: "engineerNumber",
                message: "What is the Engineer office number?"
            }
        ]).then(answers =>{
            const Engineer = new Engineer(answers.engineerName, answers.gitHub, answers.engineerEmail, answers.engineerNumber)
            team.push(engineer)
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
                name: "internEmail",
                message: "What is the Interns email?"
            },
            {
                type: "input",
                name: "schoolName",
                message: "What is the Intern school name?"
            }
        ]).then(answers =>{
            const Intern = new Intern(answers.internName, answers.internEmail, answers.schoolName)
            team.push(intern)
            console.log("NEW TEAM MEMBER", team)
            addTeamMembers()
        })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }

    function renderTeam(){
        console.log("Here you will render all the team to an output directory and output path and to a template page to make the bootstrap cards")    }

// First create an Intern class and an Engineer class in the lib folder. Both will extend the Employee parent class.
// Come bak to index.js and within respective function "addEngineer" etc etc you wll ask the questions needed, log the answers, create a new Engineer and push to the team array.





setUpManager()
}

mainMenu()