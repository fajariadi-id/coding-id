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

