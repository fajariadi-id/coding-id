-- task 1
-- create db
CREATE DATABASE db_company

-- table master_employee
-- create table
CREATE TABLE master_employee(
	employee_id BIGINT,
	`name` VARCHAR(50),
	address VARCHAR(255)
)

-- task 2
-- add column on table master_employee
ALTER TABLE master_employee
ADD `position` VARCHAR(50),
ADD phone VARCHAR(15)	

-- task 3
-- insert 3 row data to table master_employee
INSERT INTO master_employee
VALUES(1, 'Budi', 'Jakarta City', 'Developer', '08167446567'),
(2, 'Ani', 'Bogor City', 'Sales', '08157626637'),
(3, 'Andi', 'Jakarta City', 'Developer', '08177627349')


SELECT * FROM master_employee;
SELECT * FROM master_position

-- task 4 & task 5
-- show data from table master_employee with position as 'Developer'
-- sort by name (DESCENDING)
SELECT * FROM master_employee
WHERE `position` = 'Developer'
ORDER BY `name` DESC

-- task 6 & task 7
-- count employee data by position
-- show position with more than 1 employee
SELECT `position`, COUNT(*) FROM master_employee
GROUP BY `position`
HAVING COUNT(*) > 1

-- task 8
-- update 'Budi' address to 'Jakarta City' and his phone number '08146726382'
UPDATE master_employee
SET address = 'Jakarta City', phone = '08146726382'
WHERE `name` = 'Budi'

-- task 9
-- delete all data 'Developer'
DELETE FROM master_employee
WHERE `position` = 'Developer'

-- table master_position
-- task 1
-- create table master_position
CREATE TABLE master_position(
	position_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	position_name VARCHAR(50),
	salary INT
)

SELECT * FROM master_position;

-- insert data to table master position
INSERT INTO master_position (position_name, salary)
VALUES('Developer', 7000000),
('Sales', 5000000),
('Admin', 4000000)

-- task 2
-- add primary key (auto increment) to field employee_id
ALTER TABLE master_employee
MODIFY employee_id BIGINT AUTO_INCREMENT PRIMARY KEY

-- modify datatype of position field in table master_employee to bigint not null
ALTER TABLE master_employee
MODIFY `position` BIGINT NOT NULL

-- update data position
UPDATE master_employee
SET `position` = 1

UPDATE master_employee
SET `position` = 2
WHERE employee_id = 3

-- select me.name, me.address, me.phone, mp.position_name
-- from master_employee me
-- inner join master_position mp
-- on mp.position_id = me.position



