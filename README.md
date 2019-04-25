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

When I was running my company, I sent parcels to various countries around the world. Usually, these were large packages: 20kg 65cm x 55cm x 35 cm. I searched for the best prices in a dozen or so search engines such as parcel2go.com. Each such company has its own contracts signed with courier companies, as a result of the price of such large packages differ very much. Typing dimensions, weight and country from and destination country of a package from each of these search engines takes a lot of time. This application will solve this problem.

## What technologies it uses?

- (will have) HTML5 - BEM class names
- (will have) CSS3 (SCSS)
- Java Script
- React - use as much as is possible only Vanilla Java Script
- Node
- Express
- Database postgress
- Responsive Web Design (with mobile first approach)

## Few boring stuff how this application works

1. Application "ask" server for fetch data.
2. Server ask company couriers.
3. After received data back, insert that data into postgress database.
4. Then application "ask" data from database.
5. When receive data from single courier company, I push to this.state that data and then componentDidUpdate cath that change so is starting create object with that data and sort by price by default.

I know, that I made a lot of faults but I don't affraid to do them so if you have any suggestion please leave me a feedback.
