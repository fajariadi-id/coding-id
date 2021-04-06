-- create db
CREATE DATABASE db_store

-- create table
CREATE TABLE master_customer (
	pk_customer_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	nama VARCHAR(50),
	alamat VARCHAR(255)
)

-- insert data
INSERT INTO master_customer(nama, alamat)
VALUES('Ani Indah Sari', 'Jl. Bogor Baru No. 4'),
('Indra Alfiansyah', 'Jl. Kyai Maja No. 12'),
('Indah Sari', 'Jl. Ahmad No. 17'),
('Asep Sudrajat', 'Jl. Intan Blok D'),
('Zulkifli Rahman', 'Jl. Kemanggisan No. 14')

-- display table
SELECT * FROM master_customer;

-- show data with name begin with letter 'I'
SELECT * FROM master_customer
WHERE nama LIKE '%indah%'

-- show first letter of each names
SELECT nama, LEFT(nama, 1) AS initial_name, alamat FROM master_customer

-- update Indah's address
UPDATE master_customer
SET alamat = 'Jl. Suka Maju Blok.E'
WHERE nama = 'Indah Sari'

-- show the number of each first letter
-- then show data where count_data > 1
SELECT LEFT(nama, 1) AS initial_name, COUNT(*) AS count_data FROM master_customer
GROUP BY initial_name
HAVING count_data > 1


