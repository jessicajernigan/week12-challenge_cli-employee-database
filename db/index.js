
const { genericFollowUpPrompt } = require("../index")



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
  }).then(() => genericFollowUpPrompt())
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
};

const addNewDept = (newDept) => {
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
    'INSERT INTO products SET ?',
    {
      flavor: 'Rocky Road',
      price: 3.0,
      quantity: 50,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + ' product inserted!\n');
      // Call updateProduct() AFTER the INSERT completes
      updateProduct();
    }
  );
  // logs the actual query being run
  console.log(query.sql);
};







module.exports = { viewRoles, viewEmployees, viewDepts };