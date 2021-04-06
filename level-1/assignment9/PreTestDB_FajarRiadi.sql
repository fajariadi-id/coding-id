-- Nomor 1
CREATE DATABASE db_customer

-- Nomor 2
CREATE TABLE master_province(
	pk_province_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	province_name VARCHAR(50)
);

CREATE TABLE master_city(
	pk_city_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	city_name VARCHAR(50),
	fk_province_id BIGINT NOT NULL
);

CREATE TABLE master_customer (
	pk_customer_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	`name` VARCHAR(50),
	address VARCHAR(255),
	fk_city_id BIGINT NOT NULL
);

-- Nomor 3
INSERT INTO master_province (province_name)
VALUES ('Aceh'),
('Banten'),
('Jawa Barat'),
('Jawa Tengah'),
('Jawa Timur'),
('DKI Jakarta');

INSERT INTO master_city
VALUES (1, 'Tangerang', 2),
(3, 'Jakarta Barat', 6),
(5, 'Jakarta Selatan', 6);

INSERT INTO master_customer(`name`, address, fk_city_id)
VALUES('Ani Indah Sari', 'Jl. Bogor Baru No.4', 1),
('Indra Alfiansyah', 'Jl. Kyai Maja No.12', 3),
('Indah Sari', 'Jl. Suka Maju Blok.E', 1),
('Asep Sudrajat', 'Jl. Intan Blok D', 5),
('Zulkifli Rahman', 'Jl. Kemanggisan No. 14', 1);

-- Add constraint foreign key after insert values
ALTER TABLE master_customer
ADD CONSTRAINT city FOREIGN KEY(fk_city_id) REFERENCES master_city(pk_city_id);

ALTER TABLE master_city
ADD CONSTRAINT province FOREIGN KEY(fk_province_id) REFERENCES master_province(pk_province_id);

-- Nomor 4
SELECT pk_city_id, city_name, province_name
FROM master_city INNER JOIN master_province
ON fk_province_id = pk_province_id;

-- Nomor 5
SELECT pk_city_id, city_name, province_name
FROM master_city RIGHT JOIN master_province b
ON fk_province_id = pk_province_id
ORDER BY pk_city_id ASC,
province_name LIKE 'Jawa Barat' DESC,
province_name LIKE 'Jawa Tengah' DESC;

-- Nomor 6
SELECT `name` AS `Customer Name` , address AS Address, city_name AS City, province_name AS Province
FROM master_customer INNER JOIN master_city ON fk_city_id = pk_city_id
INNER JOIN master_province ON fk_province_id = pk_province_id;


-- Nomor 7
CREATE VIEW v_number_of_customer
AS
SELECT pk_city_id, city_name AS City, COUNT(city_name) AS `Number of Customer`
FROM master_customer INNER JOIN master_city
ON fk_city_id = pk_city_id
GROUP BY city_name
ORDER BY pk_city_id;

SELECT * FROM v_number_of_customer;



