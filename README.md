# Parcel Mario Many Couriers

## What the project does?

Trivago compares hotel prices from other search engines, this application compares parcel prices from other search engines. At the moment, searching from 3 companies: parcel2go.com, parcelmonkey.co.uk and www.p4d.co.uk. From the first two, receives data trough the API, from www.p4d.co.uk receives data by scanning the website and searching for data (scraping).
At this moment, the parcel dimensions is permanently entered and this is: 10kg, 10cm height, 10cm width and 10cm length and country from and destination is UK.

## Technical notes

Trelo board: https://trello.com/b/IUPKOh2o/parcel-mario

Live preview: https://parcel-mario-many-couriers.herokuapp.com/

- Run `npm install` after cloning to download all dependencies
- Use `npm start` to build application and run server
- Run postgress server with data from database.sql

## Inspiration

When I was running my company, I sent parcels to various countries around the world. Usually, these were large packages: 20kg 65cm x 55cm x 35 cm. I searched for the best prices in a dozen or so search engines such as parcel2go.com. Each such company has its own contracts signed with courier companies, as a result of the price of such large packages differ very much. Typing the price of a package from each of these search engines takes a lot of time. This application will solve this problem.

## What technologies it uses?

- (will have) HTML5 - BEM class names
- (will have) CSS3 (SCSS)
- Java Script
- React - use as much as is possible only Vanilla Java Script
- Node
- Express
- Database postgress
- Responsive Web Design (with mobile first approach)
