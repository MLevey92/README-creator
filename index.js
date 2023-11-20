const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ( {title,description,motivation,installation,usage,collaborators,license} ) =>
`# <${title}>

## Description

${description}

-${motivation}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

${collaborators}

## License

${license}
`
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project Title: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Author: ',
            name: 'author',
        },
        {
            type: 'input',
            message: 'Author Github Link: ',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Give a short description of what the project does: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What motivated you to create this project?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'How do you install this package?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How do you use this package?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Collaborators: ',
            name: 'collaborators',
        },
        {
            type: 'input',
            message: 'project license: ',
            name: 'license',
        },

    ])
    .then((answers) => {
        const markdown = generateMarkdown(answers);

        fs.writeFile('README.md', markdown, (err) =>
            err ? console.log(err) : console.log('README created!')
        );
    });