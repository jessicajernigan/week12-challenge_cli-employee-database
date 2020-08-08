const inquirer = require('inquirer'); // Call 'inquirer' package
const cTable = require('console.table'); // Call 'console.table' package
const { connection } = require("./db/connection");
// var deasync = require('deasync');
// const { viewRoles, viewEmployees, viewDepts } = require('./db/index.js');



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
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add an Employee",
        "Update an Employee\'s Role",
        "Never mind; please exit the program."
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
      case "Add a Department": addDeptFollowUpPrompt();
        break;
      case "Add an Employee": addEmployee();
        break;
      case "Update an Employee\'s Role": updateRole();
        break;
      default: exitProgramHandler();
    }
  })
    // .then(genericFollowUpPrompt);
};


const addDeptFollowUpPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'newDept',
      message: 'What is the new department?'
    }
  ])
    .then((answers) => {
      const { newDept } = answers
      let newDeptString = JSON.stringify(newDept).replace(/^"(.*)"$/, '$1'); // Regex to remove quotes from beginning and end of a string.
      addNewDept(newDeptString);
    })
    .then(genericFollowUpPrompt);
}; 


const genericFollowUpPrompt = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selectType',
      message: 'Anything else?',
      choices: [
        "Nope! That\'s all I needed.",
        "Take me back to the main menu."
      ]
    }
  ]).then(answers => {
    switch (answers.selectType) {
      case "Take me back to the main menu.": employeeDbPrompt();
        break;
      default: exitProgramHandler();
    }
  })
};


// Terminates the node session -- saves the user from typing 'CTRL + C'
exitProgramHandler = () => {
  console.log(
    `
  • = • = • = • = • = • = • 
  |                       |
  |      G O O D B Y E    |  
  |                       |
  • = • = • = • = • = • = • 
  `
  );
  return process.exit();
};


const viewRoles = () => {
  console.log(`
   • = • = • = • = • = • = • = • = • = • = • 
  |                                         |
  |      V I E W   A L L   R O L E S        |  
  |                                         |
   • = • = • = • = • = • = • = • = • = • = • 
  `);

  connection.query(`
  SELECT 
  r.id 'Role ID', 
  r.role_name 'Role', 
  d.dept_name 'Department'
  FROM
    roles r JOIN departments d 
    ON r.department_id = d.id
    ORDER BY r.id ASC;`,
    
   function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
    // return(res);
  })
  genericFollowUpPrompt();
};



const viewEmployees = () => {
  console.log(`
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • =
  |                                                               |
  |      N O W   S H O W I N G   A L L   E M P L O Y E E S        |  
  |                                                               |
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • =  
  `);

  connection.query(`
  SELECT 
    e.id 'EID',
    e.first_name 'Employee First Name',
    e.last_name 'Employee Last Name',
    r.role_name 'Job Title',
    r.salary Salary,
    d.dept_name Department,
    m.first_name 'Manager First Name',
    m.last_name 'Manager First Name'
  FROM 
    employees e
    JOIN roles r
      ON r.id = e.role_id
    JOIN departments d
      ON d.id = e.department_id
    JOIN managers m
      ON m.id = e.manager_id;`,
    
   function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
  });
  genericFollowUpPrompt();
};

const viewDepts = () => {
  console.log(`
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • =  
  |                                                                   |
  |      N O W   S H O W I N G   A L L   D E P A R T M E N T S        |  
  |                                                                   |
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = 
  `);

  connection.query('SELECT * FROM departments ORDER BY id ASC;', // Used quotes instead of backticks here due to simplicity of the query.
    
   function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
  });
  genericFollowUpPrompt();
};


const addNewDept = (newDeptString) => {
  console.log(
    `
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = •  
  |                                                                            |
  |      A   N E W   D E P A R T M E N T   H A S   B E E N   A D D E D         |  
  |                                                                            |
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = •
  `
  );
  const query = connection.query(
    'INSERT INTO departments SET ?',
    {
      dept_name: newDeptString
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + ' department added!\n');
      // Call updateProduct() AFTER the INSERT completes
      genericFollowUpPrompt();
    }
  );
  // logs the actual query being run
  console.log(query.sql);
};

employeeDbPrompt();

