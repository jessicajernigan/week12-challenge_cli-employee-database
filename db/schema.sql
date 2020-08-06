DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;



CREATE TABLE departments (
  id INTEGER PRIMARY KEY,
  dept_name TEXT
);


CREATE TABLE roles (
  id INTEGER PRIMARY KEY,
  role_name TEXT NOT NULL,
  department_id INTEGER UNSIGNED NOT NULL
);


CREATE TABLE managers (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_id INTEGER UNSIGNED NOT NULL,
  department_id INTEGER UNSIGNED NOT NULL
);


CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  salary DECIMAL(12,2),
  role_id INTEGER UNSIGNED NOT NULL,
  department_id INTEGER NOT NULL,
  manager_id INTEGER UNSIGNED
);