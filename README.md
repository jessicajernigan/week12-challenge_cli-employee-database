# week12-challenge_cli-employee-database


GIVEN a command-line application that accepts user input
WHEN I start the application

## Inquire prompt (list)
THEN I am presented with the following options: 
• view all departments
• view all roles
• view all employees
• add a department
• add a role
• add an employee
• and update an employee role


## SELECT * FROM roles
WHEN I choose to view all roles 
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

<!-- SELECT 
    r.id 'Role ID', r.role_name 'Role', d.dept_name 'Department'
FROM
    roles r
        JOIN
    departments d ON r.department_id = d.id
ORDER BY r.id ASC; -->


## console.table()
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including:
• employee ids
• first names
• last names
• job titles
• departments
• salaries
• managers that the employees report to 


<!-- SELECT 
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
ON m.id = e.manager_id; -->



WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

<!-- SELECT * FROM departments ORDER BY id ASC; -->


## INSERT INTO departments
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database



## INSERT INTO role
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database



## INSERT INTO employee
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database


## UPDATE employee:id
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 




### TABLES
employees (id, first_name, last_name, role_id, manager_id, salary_id)
roles (id, role_name) 
departments (id, department_name)


### High Level Project Plan:
- Set up project file/folder structure
- Create DB and tables
- Populate data
- Save queries in schema and seed files (don't forget drop statements)
- Write queries for table joins