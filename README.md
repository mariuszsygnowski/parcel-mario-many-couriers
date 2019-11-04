# Parcel Mario Many Couriers

## What the project does?

Trivago compares hotel prices from other search engines, this application compares parcel prices from other search engines. At the moment, searching from 3 companies: parcel2go.com, parcelmonkey.co.uk and www.p4d.co.uk. From the first two, receives data trough the API, from www.p4d.co.uk receives data by scanning the website and searching for data (scraping).

## Technical notes

Trelo board: https://trello.com/b/IUPKOh2o/parcel-mario

Live preview: https://parcel-mario-many-couriers.herokuapp.com/

- Run `npm install` after cloning to download all dependencies
- Use `npm start` to build application and run server
- Run postgress server with data from database.sql
- create in main folder file .env. In that file set:
    - LOCAL_SERVER_PORT=3001
    - DB_NAME=p2g
    - DB_USERNAME=yourusername
    - DB_PASSWORD=yourpassowrd
    - DB_HOST=localhost
    - PARCELMONKEY_APIVERSION=3.3
    - free registration on parcelmonkey.co.uk to get userId and token 
    - PARCELMONKEY_USERID=userid_form_website_parcelmonkey
    - PARCELMONKEY_TOKEN=token_form_website_parcelmonkey

## Inspiration

When I was running my company, I sent parcels to various countries around the world. Usually, these were large packages: 20kg 65cm x 55cm x 35 cm. I searched for the best prices in a dozen or so search engines such as parcel2go.com. Each such company has its own contracts signed with courier companies, as a result of the price of such large packages differ very much. Typing dimensions, weight and country from and destination country of a package from each of these search engines takes a lot of time. This application will solve this problem.

## What technologies it uses?

- HTML5 - BEM class names
- CSS3 (SCSS)
- JavaScript
- React (with hooks) - use as much as is possible only Vanilla JavaScript
- Redux
- Node
- Express
- Database postgress
- Responsive Web Design (with mobile first approach)

## Few boring stuff how this application works

1. Application send to server instruction to get data form company couriers.
2. After received data back, insert that data into postgress database.
3. When all data are in database, application receive that data and magic is starting.

I know, that I made a lot of faults but I don't affraid to do them so if you have any suggestion please leave me a feedback.
