const { connection } = require("./connection");


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
  });
};



const viewEmployees = () => {
  console.log(`
   • = • = • = • = • = • = • = • = • = • = • = • = • 
  |                                                 |
  |      V I E W   A L L   E M P L O Y E E S        |  
  |                                                 |
   • = • = • = • = • = • = • = • = • = • = • = • = •  
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
};

const viewDepts = () => {
  console.log(`
   • = • = • = • = • = • = • = • = • = • = • = • = • = •  
  |                                                     |
  |      V I E W   A L L   D E P A R T M E N T S        |  
  |                                                     |
   • = • = • = • = • = • = • = • = • = • = • = • = • = • 
  `);

  connection.query('SELECT * FROM departments ORDER BY id ASC;', // Used quotes instead of backticks here due to simplicity of the query.
    
   function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.table(res);
  });
};




module.exports = { viewRoles, viewEmployees, viewDepts };