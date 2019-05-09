import { DynamicSort } from "./DynamicSort";

const SortingBy = (sort_by, quotes) => {
  let output = {};
  let minPrice = 0;

  Object.entries(quotes).forEach(item => {
    item[1].forEach(courier => {
      courier.data.forEach(en => {
        en.entries.sort(DynamicSort("price"));
        en.min_price_service_name = en.entries[0].price;
      });
      courier.min_price_in_courier = courier.data[0].min_price_service_name; //I always sort by "price a-z" inside each courier as
      //what is a reason to know highest price from each parcel courier
      //But even I will change my mnid is easy to add that feature

      courier.data.sort(DynamicSort("min_price_service_name"));
      minPrice = courier.data[0].min_price_service_name;
      courier.min_price_service_name = minPrice;
    });
    output = Object.assign(output, {
      [item[0]]: item[1]
    }); //sorting via each courier

    output[item[0]].sort(DynamicSort(sort_by));
  });
  return output;
};

export default SortingBy;
