-- create table ms_province
CREATE TABLE ms_province(
	pk_province_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	province_name VARCHAR(50)
)

-- insert data to ms_province
INSERT INTO ms_province (province_name)
VALUES ('Aceh'),
('Banten'),
('Jawa Barat'),
('Jawa Tengah'),
('Jawa Timur'),
('DKI Jakarta')

-- create table ms_city
CREATE TABLE ms_city(
	pk_city_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	city_name VARCHAR(50),
	fk_province_id BIGINT NOT NULL,
	
	CONSTRAINT province FOREIGN KEY(fk_province_id)
	REFERENCES ms_province(pk_province_id)
)

-- insert data to ms_city
INSERT INTO ms_city (city_name, fk_province_id)
VALUES ('Tangerang', 2),
('Jakarta Pusat', 6),
('Jakarta Barat', 6),
('Jakarta Timur', 6),
('Jakarta Selatan', 6),
('Jakarta Utara', 6),
('Bandung', 3)

-- add fk_city_id column to table master_customer
ALTER TABLE master_customer
ADD fk_city_id BIGINT NOT NULL;

-- update fk_city_id on table master_customer
UPDATE master_customer
SET fk_city_id = 1
WHERE (pk_customer_id = 1) OR (pk_customer_id = 3) OR (pk_customer_id = 5);

UPDATE master_customer
SET fk_city_id = 3 WHERE pk_customer_id = 2;

UPDATE master_customer
SET fk_city_id = 5 WHERE pk_customer_id = 4

-- initiate fk_city_id as FK on table master_customer
ALTER TABLE master_customer
ADD CONSTRAINT city
FOREIGN KEY(fk_city_id)
REFERENCES ms_city(pk_city_id)

-- create query No. 4 question
SELECT customer.nama, customer.alamat, city.city_name, province.province_name
FROM master_customer customer
INNER JOIN ms_city city
ON city.pk_city_id = customer.fk_city_id
INNER JOIN ms_province province
ON province.pk_province_id = city.fk_province_id;

-- create query No. 5 question
SELECT city.city_name, COUNT(fk_city_id) AS count_data
FROM ms_city city
LEFT JOIN master_customer customer
ON customer.fk_city_id = city.pk_city_id
GROUP BY city.city_name;

-- create query No. 6 question
SELECT city.city_name, COUNT(*) AS count_data
FROM ms_city city
INNER JOIN master_customer customer
ON customer.fk_city_id = city.pk_city_id
GROUP BY city.city_name;

-- create query No. 7 question
SELECT province.province_name, COUNT(fk_province_id) AS count_data
FROM master_customer customer 
INNER JOIN ms_city city
ON city.pk_city_id = customer.fk_city_id
RIGHT JOIN ms_province province
ON province.pk_province_id = city.fk_province_id
GROUP BY province.province_name;

-- create query No. 8 question
SELECT province.province_name, COUNT(*) AS count_data
FROM master_customer customer
INNER JOIN ms_city city
ON city.pk_city_id = customer.fk_city_id
INNER JOIN ms_province province
ON province.pk_province_id = city.fk_province_id
GROUP BY province.province_name

-- delete data city doesn't have resident
DELETE FROM ms_city
WHERE city_name NOT IN 
(SELECT city.city_name FROM ms_city city
INNER JOIN master_customer customer
ON customer.fk_city_id = city.pk_city_id
GROUP BY city.city_name
ORDER BY pk_city_id)

-- SELECT * FROM master_customer;
-- SELECT * FROM ms_city;
-- SELECT * FROM ms_province


