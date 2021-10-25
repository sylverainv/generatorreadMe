const { prompt } = require("inquirer")
const fs = require("fs")
const path = require("path")
const generator = require ("./generator")
function askQuestions(){
    return prompt([
         //Title of project
        {
            type:"input",
            message : "What is the name of your Project?",
            name: "projectTitle"
        },
       //Description
        {
            type:"input",
            message : "What is the decription of your Project?",
            name: "description"
    
        },
        //Installation

        {
            type:"input",
            message : "What are the steps required to install your project??",
            name: "installation"
        },
        //Usage
        {
            type:"input",
            message : "Provide instructions and examples of your project in use for the Usage section.",
            name: "usage"
        },
        //License
        {
            type:"list",
            choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0'],
            name:"license"
        },
        //Contributions
        {
            type:"input",
            message : "If applicable, provide guidelines on how other developers can contribute to your project?",
            name: "contributing"
        },
        //Tests
        {
            type:"input",
            message : "If applicable, provide any tests written for your application and provide examples on how to run them?",
            name: "tests"
        },
        //Questions
        {
            type:"input",
            message : "How can you be reached for additional questions?",
            name: "Questions"
        },
    ])
}
async function createReadme(){
var answers = await askQuestions()
console.log (answers)
fs.writeFileSync(path.join(__dirname,"README.md"),generator(answers))
}
createReadme()
