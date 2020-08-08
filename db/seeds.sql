USE employeeDB;

INSERT INTO roles
  (role_name, salary, department_id)
VALUES
  ('Inbound Salesperson', 45000.00, 3),
  ('VP of Sales', 80000.00, 3),
  ('Outbound Salesperson', 35000.00, 3),
  ('Account Manager', 40000.00, 4),
  ('Front End Developer', 85000.00, 1),
  ('Back End Developer', 82000.00, 1),
  ('Engineering Manager', 85000.00, 1),
  ('VP of Product', 90000.00, 3),
  ('Visual Designer', 65000.00, 2),
  ('UX Designer', 60000.00, 2),
  ('Affiliate Manager', 58000.00, 5),
  ('Controller', 71000.00, 7),
  ('Accountant', 61000.00, 7),
  ('Content Strategist', 58000.00, 6),
  ('SEO Manager', 70000.00, 6),
  ('SEO Generalist', 70000.00, 6),
  ('VP of Marketing', 80000.00, 5),
  ('Marketing Analyst', 48000.00, 5),
  ('Recruiter', 50000.00, 8),
  ('HR Manager', 60000.00, 8),
  ('Office Administrator', 42000.00, 8);


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


INSERT INTO managers
  (first_name, last_name, role_id, department_id)
VALUES
  ('Cornelius', 'Suttree', 7, 1),
  ('Abednego', 'Jones', 8, 2),
  ('Judge', 'Holden', 2, 3),
  ('Marion', 'Sylder', 15, 4),
  ('Anton', 'Chigurh', 17, 5),
  ('Lester', 'Ballard', 12, 6),
  ('Billy', 'Parham', 20, 7);


INSERT INTO employees
  (first_name, last_name, role_id, department_id, manager_id)
VALUES
  ('Culla', 'Holme', 5, 1, 1), -- Engineering
  ('Rinthy', 'Holme', 6, 1, 1), -- Engineering
  ('Louis', 'Toadvine', 6, 3, 3), -- Engineering
  ('Grannyrat', 'Chambers', 6, 3, 3), -- Engineering
  ('The', 'Kid', 9, 2, 2), -- Product
  ('Ben', 'Tobin', 10, 2, 2), -- Product
  ('Marcus', 'Webster', 10, 2, 2), -- Product
  ('John', 'Glanton', 1, 3, 3), -- Sales
  ('Doc', 'Irving', 3, 3, 3), -- Sales 
  ('Arthur', 'Ownby', 4, 4, 2), -- Client Services
  ('John', 'Rattner', 4, 4, 2), -- Client Services
  ('Llewelyn', 'Moss', 11, 5, 5), -- Marketing
  ('Carla Jean', 'Moss', 18, 5, 5), -- Marketing
  ('Fred', 'Kirby', 16, 6, 6), -- SEO
  ('Fate', 'Turner', 14, 6, 6), -- SEO
  ('Lacey', 'Rawlins', 12, 7, 7), -- Finance
  ('Jimmy', 'Blevins', 13, 7, 7), -- Finance
  ('Boyd', 'Parham', 19, 8, 8), -- HR
  ('Mac', 'McGovern', 21, 8, 8); -- HR












  