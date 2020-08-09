const inquirer = require('inquirer'); // Call 'inquirer' package
const cTable = require('console.table'); // Call 'console.table' package
const { connection } = require("./db/connection");
const rolesArray = []
// var deasync = require('deasync');
// const { viewRoles, viewEmployees, viewDepts } = require('./db/index.js');


// "Main Menu" prompt
const employeeDbPrompt = () => {
  console.log(`
  • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • 
  |                                                                         |
  |      W E L C O M E   T O   T H E   E M P L O Y E E   D A T A B A S E    |  
  |                                                                         |
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • 
  `);
  // retrieveAllRoles();

  return inquirer.prompt([
    {
      type: 'list',
      name: 'selectAction',
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
    switch (answers.selectAction) {
      case "View All Departments": viewDepts();
        break;
      case "View All Roles": viewRoles();
        break;
      case "View All Employees": viewEmployees();
        break;
      case "Add a Department": addDeptFollowUpPrompt();
        break;
      case "Add an Employee": addEmpFollowUpPrompt();
        break;
      case "Update an Employee\'s Role": updateRole();
        break;
      default: exitProgramHandler();
    }
  })
};

// "Follow Up" prompt -- after user takes an action in the program, this presents options to do more or exit the program.
const genericFollowUpPrompt = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selectOption',
      message: 'Anything else?',
      choices: [
        "Nope! That\'s all I needed.",
        "Take me back to the main menu."
      ]
    }
  ]).then(answers => {
    switch (answers.selectOption) {
      case "Take me back to the main menu.": employeeDbPrompt();
        break;
      default: exitProgramHandler();
    }
  })
};

// Essentially the same as the user typing 'CTRL + C'.
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


/// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • ///
/// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • /// • ///

///  B E G I N   D B   Q U E R I E S 

const viewRoles = () => {
  console.log(`
   • = • = • = • = • = • = • = • = • = • = • = • = • = • =
  |                                                       |
  |      N O W   S H O W I N G   A L L   R O L E S        |  
  |                                                       |
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = 
  `);

  connection.query(`
  SELECT 
  r.id AS 'Role ID', 
  r.role_name AS 'Role', 
  d.dept_name AS 'Department'
  FROM
    roles r JOIN departments d 
    ON r.department_id = d.id
    ORDER BY r.id ASC;`,

    function (err, res) {
      if (err) throw err;
      console.table(res);
      genericFollowUpPrompt();
    })
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
    e.id AS 'EID',
    e.first_name AS 'Employee First Name',
    e.last_name AS 'Employee Last Name',
    r.role_name AS 'Job Title',
    r.salary AS Salary,
    d.dept_name AS Department,
    m.first_name AS 'Manager First Name',
    m.last_name AS 'Manager First Name'
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
      genericFollowUpPrompt();
    });
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
      genericFollowUpPrompt();
    });
};


// Adding a department occurs in two parts: 
// 1. A function to prompt the user for the input.
const addDeptFollowUpPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'newDept',
      message: 'What department would you like to add?'
    }
  ])
    .then((answers) => {
      const { newDept } = answers
      let newDeptString = JSON.stringify(newDept).replace(/^"(.*)"$/, '$1'); // Regex to remove quotes from beginning and end of a string.
      addNewDept(newDeptString);
    })
  // .then(genericFollowUpPrompt);
};

// 2. A second function to insert that value and return a successful response to the user.
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
      genericFollowUpPrompt();
    }
  );
};



// const retrieveAllRoles = () => {
//     connection.query('SELECT role_name FROM roles',
//       function (err, res) {
//         if (err) throw err;
//         rolesArray.push(res);
//       });

// };


const addEmpFollowUpPrompt = (roles) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the employee\'s first name?'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the employee\'s last name?'
    },
    {
      type: 'list',
      name: 'role_name',
      message: 'What is the employee\'s role?',
      choices: [
        'Inbound Salesperson',
        'VP of Sales',
        'Outbound Salesperson',
        'Account Manager',
        'Front End Developer',
        'Back End Developer',
        'Engineering Manager',
        'VP of Product',
        'Visual Designer',
        'UX Designer',
        'Affiliate Manager',
        'Controller',
        'Accountant',
        'Content Strategist',
        'SEO Manager',
        'SEO Generalist',
        'VP of Marketing',
        'Marketing Analyst',
        'Recruiter',
        'HR Manager',
        'Office Administrator'
      ]
    },
    {
      type: 'list',
      name: 'manager',
      message: 'Who is the employee\'s manager?',
      choices: [
        "Cornelius Suttree",
        "Abednego Jones",
        "Judge Holden",
        "Marion Sylder",
        "Anton Chigurh",
        "Lester Ballard",
        "Billy Parham"
      ]
    }
  ])
    .then((newEmp) => {
      const { firstName, lastName, role_name, manager } = newEmp
      // const newEmp = Object.create( firstName, lastName, role, manager )
      // console.log('Here is the new employee: ', newEmp);
      // console.log('Here is newEmp.role_name: ', newEmp.role_name);
      let roleName = role_name;
      let mgrName = manager;
      // console.log('roleName: ', roleName)
      return Promise.all([getRoleId(roleName), getMgrId(mgrName), newEmp])
    }).then((values) => {
      // console.log(values)
      addNewEmployee(values) 
    });
};


// 2. A function to retrieve the role_id and department_id
const getRoleId = (roleName) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT id AS role_id, department_id FROM roles WHERE ?',
      {
        role_name: roleName,
      },
      function (err, res) {
        if (err) reject(err);
        // console.log('res containing department_id and role_id: ', res);
        resolve(res);
      })
  })
}

// 3. A function to retrieve the manager_id
const getMgrId = (mgrName) => {
  return new Promise((resolve, reject) => {
    const [first_name, last_name] = mgrName.split(' ');
    const query = connection.query('SELECT id AS manager_id FROM managers WHERE ?',
      [
        {
          first_name: first_name,
        },
        {
          last_name: last_name
        }],
      function (err, res) {
        if (err) reject(err);
        // console.log('Should show an id: ', res);
        resolve(res);
      })
    // console.log(query.sql);
  })
}


// 4. A function to insert that value and return messaging to the user.
const addNewEmployee = (values) => {
  // console.log('values array prior to reformatting: ', values);
  const firstName = values[2].first_name
  const lastName = values[2].last_name
  const roleId = values[0][0].role_id
  const departmentId = values[0][0].department_id 
  const managerId = values[1][0].manager_id
  console.log('first_name: ', firstName, 'last_name: ', lastName, 'role_id: ', roleId, '//// department_id: ', departmentId, '//// manager_id: ', managerId)

  console.log(
    `
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = •  
  |                                                                            |
  |      A   N E W   E M P L O Y E E   H A S   B E E N   A D D E D             |  
  |                                                                            |
   • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = • = •
  `
  );
  const query = connection.query(
    'INSERT INTO employees SET ? AND SET ? AND SET ?',

    function (err, res) {
      if (err) throw err;
      genericFollowUpPrompt();
    }
  );
};

employeeDbPrompt();

