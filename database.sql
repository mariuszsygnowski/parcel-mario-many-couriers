CREATE DATABASE p2g;

CREATE TABLE results (
    id serial PRIMARY KEY,
    unique_search_id VARCHAR(20) NOT NULL,
    company_name VARCHAR(20) NOT NULL,
    courier_name VARCHAR(20) NOT NULL,
    courier_delivery_time VARCHAR(20) NOT NULL,
    price NUMERIC NOT NULL
);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'UPS', 'one_day', 30.24);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'PARCELFORCE', 'one_day', 29.99);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'HERMES', 'one_day', 28.77);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'UPS', 'two_days', 25.24);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'PARCELFORCE', 'two_days', 27.11);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'HERMES', 'two_days', 26.10);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'UPS', 'over_two_days', 19.24);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'HERMES', 'over_two_days', 18.10);
INSERT INTO results VALUES (DEFAULT, '1aa', 'p2g', 'DPD', 'over_two_days', 15.10);

INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'UPS', 'one_day', 29.14);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'PARCELFORCE', 'one_day', 31.77);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'HERMES', 'one_day', 28.00);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'DX', 'one_day', 29.88);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'UPS', 'two_days', 25.24);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'PARCELFORCE', 'two_days', 27.11);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'HERMES', 'two_days', 26.10);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'PARCELFORCE', 'over_two_days', 15.21);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'HERMES', 'over_two_days', 11.28);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'DPD', 'over_two_days', 10.20);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'DX', 'over_two_days', 12.43);
INSERT INTO results VALUES (DEFAULT, '1aa', 'parcelmonkey', 'DHL', 'over_two_days', 13.56);

INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'HERMES', 'one_day', 29.60);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'DX', 'one_day', 29.18);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'UPS', 'two_days', 24.14);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'PARCELFORCE', 'two_days', 21.11);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'HERMES', 'two_days', 23.90);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'DX', 'two_days', 24.70);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'PARCELFORCE', 'over_two_days', 10.26);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'HERMES', 'over_two_days', 12.68);
INSERT INTO results VALUES (DEFAULT, '1aa', 'interparcel', 'DPD', 'over_two_days', 13.96);