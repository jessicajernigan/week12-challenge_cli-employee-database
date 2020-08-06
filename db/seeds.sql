INSERT INTO roles
  (role_name, department_id)
VALUES
  ('Inbound Salesperson', 3),
  ('VP of Sales', 3),
  ('Outbound Salesperson', 3),
  ('Account Manager', 4),
  ('Front End Developer', 1),
  ('Back End Developer', 1),
  ('Engineering Manager', 1),
  ('VP of Product', 3),
  ('Visual Designer', 2),
  ('UX Designer', 2),
  ('Affiliate Manager', 5),
  ('Controller', 7),
  ('Accountant', 7),
  ('Content Strategist', 6),
  ('SEO Manager', 6),
  ('SEO Generalist', 6),
  ('VP of Marketing', 5),
  ('Marketing Analyst', 5),
  ('Recruiter', 8),
  ('HR Manager', 8),
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

INSERT INTO managers
  (first_name, last_name, role_id, department_id)
VALUES
  ('Cornelius', 'Suttree', 7, 1),
  ('Abednego', 'Jones', 8, 2),
  ('Judge', 'Holden', 2, 3),
  ('Marion', 'Sylder', 15, 4),
  ('Anton', 'Chigurh', 17, 5),
  ('Lester', 'Ballard', 12, 6),
  ('John Grady', 'Cole', 20, 7);



INSERT INTO employees
  (first_name, last_name, salary, role_id, department_id, manager_id)
VALUES
  ('Culla', 'Holme', 80000.00, 5, 1, 1), -- Engineering
  ('Rinthy', 'Holme', 70000.00, 6, 1, 1), -- Engineering
  ('Louis', 'Toadvine', 50000.00, 6, 3, 3), -- Engineering
  ('Grannyrat', 'Chambers', 50000.00, 6, 3, 3), -- Engineering
  ('The', 'Kid', 50000.00, 9, 2, 2), -- Product
  ('Ben', 'Tobin', 50000.00, 10, 2, 2), -- Product
  ('Marcus', 'Webster', 50000.00, 10, 2, 2), -- Product
  ('John', 'Glanton', 50000.00, 1, 3, 3), -- Sales
  ('Doc', 'Irving', 40000.00, 3, 3, 3), -- Sales 
  ('Arthur', 'Ownby', 44000.00, 4, 4, 2), -- Client Services
  ('John', 'Rattner', 36000.00, 4, 4, 2), -- Client Services
  ('Llewelyn', 'Moss', 50000.00, 11, 5, 5), -- Marketing
  ('Carla Jean', 'Moss', 50000.00, 18, 5, 5), -- Marketing
  ('Fred', 'Kirby', 50000.00, 16, 6, 6), -- SEO
  ('Fate', 'Turner', 50000.00, 14, 6, 6), -- SEO
  ('Lacey', 'Rawlins', 50000.00, 12, 7, 7), -- Finance
  ('Jimmy', 'Blevins', 70000.00, 13, 7, 7), -- Finance
  ('Boyd', 'Parham', 65000.00, 19, 8, 8), -- HR
  ('Mac', 'McGovern', 53000.00, 21, 8, 8); -- HR












  