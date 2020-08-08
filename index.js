const inquirer = require('inquirer'); // Call 'inquirer' package
const { viewRoles, viewEmployees, viewDepts } = require('./db/index.js'); 


const employeeDbPrompt = () => {
  console.log(`
  • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • 
  |                                                                         |
  |      W E L C O M E   T O   T H E   E M P L O Y E E   D A T A B A S E    |  
  |                                                                         |
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • 
  `);

  return inquirer.prompt([
    {
      type: 'list',
      name: 'selectType',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add an Employee',
        'Update an Employee\'s Role'
      ]
    }
  ]).then(answers => {
    switch (answers.selectType) {
      case "View All Departments": viewDepts();
        break;
      case "View All Roles": viewRoles();
        break;
      case "View All Employees": viewEmployees();
        break;
      default: console.log('Done!');
    }
  });
};

employeeDbPrompt();