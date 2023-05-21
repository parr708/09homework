// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation'
    },
    { 
        type: 'input',
        name: 'description',
        message: 'Description'
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Table of Contents'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage'
    },
    {
        type: 'input',
        name: 'license',
        message: 'License'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github', 
    },
    {
        type: 'input',
        name: 'license',
        message: 'License',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, function(err){
    if(err) throw err 
    console.log('file written')
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        console.log(answers) 
        const markdownText = generateMarkdown(answers);
        console.log(markdownText)
         writeToFile('README2.md', markdownText);
    });
}

// Function call to initialize app
init();
