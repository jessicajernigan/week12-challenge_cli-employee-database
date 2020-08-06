INSERT INTO roles
  (role_name, department_id)
VALUES
  ('Inbound Salesperson', 3),
  ('Outbound Salesperson', 3),
  ('Enterprise Account Manager', 4),
  ('Front End Developer', 1),
  ('Back End Developer', 1),
  ('Visual Designer', 2),
  ('UX Designer', 2),
  ('Affiliate Manager', 5),
  ('Controller', 7),
  ('Accountant', 7),
  ('Content Strategist', 6),
  ('SEO Generalist', 6),
  ('Marketing Analyst', 5),
  ('Recruiter', 8),
  ('Office Administrator', 8);


INSERT INTO departments
  (dept_name)
VALUES
  ('Engineering'),
  ('Product'),
  ('Sales'),
  ('Client Services'),
  ('Marketing'),
  ('SEO'),
  ('Finance'),
  ('HR');


INSERT INTO employees
  (first_name, last_name, salary, role_id, department_id, manager_id)
VALUES
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Engineering
  ('Rinthy', 'Holme', 50000.00, 1, 1, 1), -- Engineering

  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Product
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Product
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Product
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Product
 
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Sales
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Sales
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Sales
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Sales 

  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Client Services
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Client Services
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Client Services  

  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Marketing
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Marketing

  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- SEO
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- SEO

  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Finance
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- Finance

  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- HR
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- HR
  ('Culla', 'Holme', 50000.00, 1, 1, 1), -- HR



INSERT INTO managers
  (first_name, last_name, department_id)
VALUES
  ('Ronald', 'Firbank', 1);







  