// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    case 'EPL':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    default: 
      return ''
  }
 


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None') {
    return ''
  }

  return '\n- [Licenses](#license)\n'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  }

  return `\n## License\n this project is licensed under ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.name}

 ${renderLicenseBadge(data.license)}
 
 ## Description 
 
 ${data.description}
 
 ## Table of Contents 
 
 - [Installation](#installation)
         
 - [Usage](#usage) 
 
 ${renderLicenseLink(data.license)}
 
 - [Contributing](#contributing)
 
 - [Tests](#tests)
 
 - [Questions](#questions)
 
 ## Installation 
 
 ### To install necessary dependencies, run the following command:


 ${data.installation}
 
 ## Usage
 
 ${data.usage}
 
 ${renderLicenseSection(data.license)}
 
 ## Contributing 
 
 ${data.contribution}
 
 ## Tests 

 ### To run tests, run the following commmand:

 ${data.test}
 
 ## Questions

 If you have any questions reach me at ${data.email} and you check out some of my work at [${data.github}](https://github.com/Jordan1570)
 `
;
}

module.exports = generateMarkdown;
