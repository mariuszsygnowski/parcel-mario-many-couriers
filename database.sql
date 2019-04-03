CREATE DATABASE p2g;

CREATE TABLE results (
    id serial PRIMARY KEY,
    unique_search_id VARCHAR(20) NOT NULL,
    company_name VARCHAR(20) NOT NULL,
    courier_name VARCHAR(20) NOT NULL,
    courier_delivery_time VARCHAR(10) NOT NULL,
    price numeric NOT NULL
);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'UPS', 'one_day', 30.24);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'PARCELFORCE', 'one_day', 29.99);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'HERMES', 'one_day', 28.77);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'UPS', 'two_days', 25.24);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'PARCELFORCE', 'two_days', 27.11);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'HERMES', 'two_days', 26.10);

INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'UPS', 'one_day', 29.14);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'PARCELFORCE', 'one_day', 31.77);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'HERMES', 'one_day', 28.00);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'DX', 'one_day', 29.88);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'UPS', 'two_days', 25.24);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'PARCELFORCE', 'two_days', 27.11);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'HERMES', 'two_days', 26.10);

INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'HERMES', 'one_day', 29.60);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'DX', 'one_day', 29.18);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'UPS', 'two_days', 24.14);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'PARCELFORCE', 'two_days', 21.11);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'HERMES', 'two_days', 23.90);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'DX', 'two_days', 24.70);