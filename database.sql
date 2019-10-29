create database p2g
CREATE TABLE results (
    id serial PRIMARY KEY,
    unique_search_id NUMERIC NOT NULL,
    company_name VARCHAR(20) NOT NULL,
    courier_name VARCHAR(20) NOT NULL,
    courier_delivery_time VARCHAR(20) NOT NULL,
    service_name VARCHAR(60) NOT NULL,
    price NUMERIC(6,2) NOT NULL,
    time VARCHAR(25) NOT NULL
);
INSERT INTO results VALUES (DEFAULT, 1, 'parcelmonkey.co.uk', 'UPS', 'one_day', 'TNT UK Saturday Express', 30.24, '20/04/2019, 12:16:38')