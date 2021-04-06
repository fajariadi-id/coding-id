-- No. 1
ALTER TABLE tr_purchase_detail
MODIFY pk_purchase_detail_id BIGINT AUTO_INCREMENT PRIMARY KEY

ALTER TABLE tr_purchase_header
MODIFY pk_purchase_header_id BIGINT AUTO_INCREMENT PRIMARY KEY;

ALTER TABLE ms_hero
MODIFY pk_hero_id BIGINT AUTO_INCREMENT PRIMARY KEY;

ALTER TABLE ms_equipment
MODIFY pk_equipment_id BIGINT AUTO_INCREMENT PRIMARY KEY

ALTER TABLE tr_purchase_detail
ADD CONSTRAINT fk_purchase_header FOREIGN KEY(fk_purchase_header_id) REFERENCES tr_purchase_header(pk_purchase_header_id),
ADD CONSTRAINT fk_equipment FOREIGN KEY(fk_equipment_id) REFERENCES ms_equipment(pk_equipment_id)

ALTER TABLE tr_purchase_header
ADD CONSTRAINT fk_hero FOREIGN KEY(fk_hero_id) REFERENCES ms_hero(pk_hero_id)

-- No. 2
ALTER TABLE ms_hero
ADD Hero_init_HP INT

ALTER TABLE ms_hero
ADD CONSTRAINT valid_hero_HP
CHECK(hero_init_hp >= 30 AND hero_init_hp <= 100)

-- No. 3
SELECT Hero_Name, Hero_Type, Equipment_Name, Equipment_Type, Equipment_Price, Amount, Sub_Total
FROM tr_purchase_detail
JOIN ms_equipment ON fk_equipment_id = pk_equipment_id
JOIN tr_purchase_header ON fk_purchase_header_id = pk_purchase_header_id
JOIN ms_hero ON fk_hero_id = pk_hero_id;

-- No. 4
SELECT Hero_Name, COALESCE(SUM(amount), 0) AS `Ownership of Equipment`
FROM tr_purchase_detail
JOIN ms_equipment ON fk_equipment_id = pk_equipment_id
JOIN tr_purchase_header ON fk_purchase_header_id = pk_purchase_header_id
RIGHT JOIN ms_hero ON fk_hero_id = pk_hero_id
GROUP BY hero_name

-- No. 5
UPDATE ms_equipment
SET equipment_price = equipment_price - (equipment_price * 0.2)
WHERE equipment_type = 'defend'

-- backup column equipment_price values
-- UPDATE ms_equipment
-- SET equipment_price = 2000
-- WHERE pk_equipment_id = 5;

-- UPDATE ms_equipment
-- SET equipment_price = 900
-- WHERE pk_equipment_id = 2

-- SELECT * FROM ms_equipment;
-- SELECT * FROM ms_hero;
-- SELECT * FROM tr_purchase_header;
-- SELECT * FROM tr_purchase_detail


