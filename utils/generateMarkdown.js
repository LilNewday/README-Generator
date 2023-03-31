// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  if(license === 'BSD') {
    badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  }
  if (license === 'GPL') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  if (license === 'ISC') {
    badge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
  }
  if (license === 'Apache') {
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  }
  if (license === 'Unlicense') {
    badge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
  }
  else if (license === '') {
      badge = '';
  } 
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    link = '(https://opensource.org/licenses/MIT)';
  }
  if(license === 'BSD') {
    link = '(https://opensource.org/licenses/BSD-3-Clause)';
  }
  if (license === 'GPL') {
    link = '(https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'ISC') {
    link = '(https://opensource.org/licenses/ISC)';
  }
  if (license === 'Apache') {
    link = '(https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'Unlicense') {
    link = '(http://unlicense.org/)';
  }
  else if (license === '') {
      link = '';
  } 
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  B
  return section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
