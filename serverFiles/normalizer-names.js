module.exports = {
  // This is the function which will be called in the main file, which is server.js
  // The parameters 'name' and 'surname' will be provided inside the function
  // when the function is called in the main file.
  // Example: concatenameNames('John,'Doe');
  courierNameP4D: courier_name => {
    let output = "";

    if (
      courier_name === "Parcelforce 24" ||
      courier_name === "Parcelforce by 9am" ||
      courier_name === "Parcelforce by 10am" ||
      courier_name === "Parcelforce 48" ||
      courier_name === "Parcelforce AM" ||
      courier_name === "Parcelforce Large" ||
      courier_name === "Sunday Delivery" ||
      courier_name === "Saturday Delivery" ||
      courier_name === "Parcelforce by 12pm"
    ) {
      output = "Parcelforce";
    }
    if (
      courier_name === "Express Sameday Collect" ||
      courier_name === "UPS Express"
    ) {
      output = "UPS";
    }
    if (
      courier_name === "DHL Express" ||
      courier_name === "DHL Express PRE NOON" ||
      courier_name === "DHL Express PRE 9AM" ||
      courier_name === "DHL Express"
    ) {
      output = "DHL";
    }
    if (output === "") {
      console.log("new courier_nameP4D: ", courier_name);
    }

    return output;
  },
  courierName: (courier_name, courier) => {
    let output = "";

    if (courier_name === "MyHermes" || courier_name === "Hermes") {
      output = "Hermes";
    }
    if (courier_name === "Parcelforce") {
      output = "Parcelforce";
    }
    if (courier_name === "Yodel") {
      output = "Yodel";
    }
    if (courier_name === "UPS" || courier_name === "UPS Access Point") {
      output = "UPS";
    }
    if (courier_name === "TNT") {
      output = "TNT";
    }
    if (courier_name === "Collect+") {
      output = "Collect+";
    }
    if (courier_name === "InPost") {
      output = "InPost";
    }
    if (courier_name === "DX") {
      output = "DX";
    }
    if (courier_name === "DPD") {
      output = "DPD";
    }
    if (courier_name === "PalletForce") {
      output = "PalletForce";
    }
    if (
      courier_name === "DHL" ||
      courier_name === "DHL Parcel UK" ||
      courier_name === "DHL Parcel UK"
    ) {
      output = "DHL";
    }
    if (output === "") {
      console.log("new courier_name: ", courier_name, courier);
    }

    return output;
  },

  deliveryTime: (deliveryTime, courier) => {
    let output = "";

    if (
      deliveryTime === "Fast" ||
      deliveryTime === "Saturday Delivery" ||
      deliveryTime === "Sunday Delivery" ||
      deliveryTime === "DHL Parcel UK" ||
      deliveryTime === "Parcelforce 24" ||
      deliveryTime === "Parcelforce by 9am" ||
      deliveryTime === "Parcelforce by 10am" ||
      deliveryTime === "Parcelforce by 12pm" ||
      deliveryTime === "DHL Parcel Next Day" ||
      deliveryTime === "Next Day before 9am" ||
      deliveryTime === "Next Day before 10.30am" ||
      deliveryTime === "DHL Parcel UK Next Day" ||
      deliveryTime === "Next Day Before 12pm" ||
      deliveryTime === "Next Day Before 10am" ||
      deliveryTime === "DPD Pickup" ||
      deliveryTime === "Next Day Before 9am" ||
      deliveryTime === "Sunday" ||
      deliveryTime === "Saturday" ||
      deliveryTime === "Next working day" ||
      deliveryTime === "DX Next Day"
    ) {
      output = "Fast";
    }
    if (
      deliveryTime === "Parcelforce 48" ||
      deliveryTime === "1-2 days drop off service" ||
      deliveryTime === "Medium" ||
      deliveryTime === "Parcelforce Large" ||
      deliveryTime === "2 working days"
    ) {
      output = "Medium";
    }
    if (deliveryTime === "Slow") {
      output = "Slow";
    }
    if (output === "") {
      console.log("new deliveryTime: ", deliveryTime, courier);
    }
    return output;
  },
  serviceName: (serviceName, courier) => {
    let output = "";

    if (
      serviceName === "Service: access point™ to access point™" ||
      serviceName === "Access Point™ to Access Point™"
    ) {
      output = "Service: access point™ to access point™";
    }
    if (serviceName === "ukparcels_dpddropoff24") {
      output = "Drop off - DPD";
    }
    if (serviceName === "Yodel Northern Ireland") {
      output = "Yodel Northern Ireland";
    }
    if (serviceName === "Yodel Highland and Islands") {
      output = "Yodel Highland and Islands";
    }
    if (
      serviceName === "Parcelforce Worldwide Express 24 Drop Off" ||
      serviceName === "ukparcels_podopf24"
    ) {
      output = "Drop off at post office - Parcelforce Worldwide Express 24";
    }
    if (serviceName === "ukparcels_pfdropoff24") {
      output = "Drop off at depot - Parcelforce Worldwide Express 24";
    }
    if (
      serviceName === "Parcelforce Worldwide Express 48 Drop Off" ||
      serviceName === "ukparcels_podopf48"
    ) {
      output = "Drop off at post office - Parcelforce Worldwide Express 48";
    }
    if (serviceName === "ukparcels_pfdropoff48") {
      output = "Drop off at depot - Parcelforce Worldwide Express 48";
    }
    if (
      serviceName === "Parcelforce Worldwide by 9am" ||
      serviceName === "ukparcels_pf24before0900"
    ) {
      output = "Parcelforce Worldwide by 9am";
    }
    if (serviceName === "ukparcels_podopfby09") {
      output = "Drop off at post office - Parcelforce Worldwide by 9am";
    }
    if (
      serviceName === "Parcelforce Worldwide by 10am" ||
      serviceName === "ukparcels_pf24before1000"
    ) {
      output = "Parcelforce Worldwide by 10am";
    }
    if (serviceName === "ukparcels_podopfby10") {
      output = "Drop off at post office - Parcelforce Worldwide by 10am";
    }
    if (
      serviceName === "Parcelforce Worldwide Express AM" ||
      serviceName === "ukparcels_pf24before1200" ||
      serviceName === "Parcelforce AM"
    ) {
      output = "Parcelforce Worldwide Express AM";
    }
    if (serviceName === "ukparcels_podopfby12") {
      output = "Drop off at post office - Parcelforce Worldwide by 12am";
    }
    if (serviceName === "Parcelforce Worldwide Multi 12 Noon") {
      output = "Parcelforce Worldwide Multi 12 Noon";
    }
    if (serviceName === "Parcelforce Worldwide Large 24") {
      output = "Parcelforce Worldwide Large 24";
    }
    if (
      serviceName === "Parcelforce Worldwide Large 48" ||
      serviceName === "Parcelforce Large"
    ) {
      output = "Parcelforce Worldwide Large 48";
    }
    if (
      serviceName === "Parcelforce Worldwide Express 24" ||
      serviceName === "ukparcels_pf24" ||
      serviceName === "Parcelforce 24"
    ) {
      output = "Parcelforce Worldwide Express 24";
    }
    if (
      serviceName === "Parcelforce Worldwide Express 48" ||
      serviceName === "ukparcels_pf48" ||
      serviceName === "Parcelforce 48"
    ) {
      output = "Parcelforce Worldwide Express 48";
    }
    if (serviceName === "Palletforce Delivery - Next Day") {
      output = "Palletforce Delivery - Next Day";
    }
    if (serviceName === "Palletforce Delivery - 48 Hours") {
      output = "Palletforce Delivery - 48 Hours";
    }
    if (
      serviceName === "ukparcels_pfsaturday" ||
      serviceName === "Saturday Delivery"
    ) {
      output = "Parcelforce Saturday delivery";
    }
    if (
      serviceName === "ukparcels_pfsunday" ||
      serviceName === "Sunday Delivery"
    ) {
      output = "Parcelforce Sunday delivery";
    }
    if (serviceName === "TNT UK Saturday Express") {
      output = "TNT UK Saturday Express";
    }
    if (serviceName === "TNT UK 12:00 Express") {
      output = "TNT UK 12:00 Express";
    }
    if (serviceName === "TNT UK Express Service") {
      output = "TNT UK Express Service";
    }
    if (
      serviceName === "Hermes UK Collection" ||
      serviceName === "Hermes UK Collection Small Parcel"
    ) {
      output = "Hermes UK Collection";
    }
    if (serviceName === "Hermes ParcelShop") {
      output = "Drop off - Hermes ParcelShop";
    }
    if (serviceName === "Hermes UK Collection Medium Parcel") {
      output = "Hermes UK Collection Medium Parcel";
    }
    if (serviceName === "Hermes ParcelShop Small") {
      output = "Drop off - Hermes ParcelShop Small";
    }
    if (serviceName === "Hermes ParcelShop Medium") {
      output = "Drop off - Hermes ParcelShop Medium";
    }
    if (serviceName === "Hermes Light and Large") {
      output = "Hermes Light and Large";
    }
    if (serviceName === "TNT UK 10:00 Express") {
      output = "TNT UK 10:00 Express";
    }
    if (serviceName === "TNT UK 09:00 Express") {
      output = "TNT UK 09:00 Express";
    }
    if (serviceName === "Yodel 24" || serviceName === "Yodel XpressPack 24") {
      output = "Yodel 24";
    }
    if (serviceName === "Yodel 48" || serviceName === "Yodel XpressPack 48") {
      output = "Yodel 48";
    }
    if (serviceName === "Collect+ Economy") {
      output = "Collect+ Economy";
    }
    if (
      serviceName === "UPS Standard®" ||
      serviceName === "UPS Express" ||
      serviceName === "Next Day"
    ) {
      output = "UPS Standard";
    }
    if (serviceName === "Express Sameday Collect") {
      output = "UPS Express Sameday Collect";
    }
    if (serviceName === "UPS Access Point™") {
      output = "Drop off - UPS Access Point™";
    }
    if (serviceName === "InPost 48") {
      output = "Drop off - InPost 48";
    }
    if (serviceName === "DX24" || serviceName === "ukbag_fast") {
      output = "DX 24H";
    }
    if (serviceName === "DX48") {
      output = "DX 48H";
    }
    if (serviceName === "InPost 24") {
      output = "Drop off - InPost 24";
    }
    if (serviceName === "DPD Drop Off") {
      output = "Drop off - DPD";
    }
    if (serviceName === "UPS Express® by 10.30am") {
      output = "UPS Express® by 10.30am";
    }
    if (serviceName === "UPS Express Saver® by 12pm") {
      output = "UPS Express Saver® by 12pm";
    }
    if (serviceName === "Collect+") {
      output = "Drop off - Collect+";
    }
    if (serviceName === "TNT UK Standard Service") {
      output = "TNT UK Standard Service";
    }
    if (serviceName === "Yodel by 12pm") {
      output = "Yodel by 12pm";
    }
    if (
      serviceName === "DHL UK" ||
      serviceName === "ukparcels_UKMailDomestic_NextDay" ||
      serviceName === "DHL Express"
    ) {
      output = "DHL UK NextDay";
    }
    if (
      serviceName === "ukparcels_UKMailDomestic_NextDay0900" ||
      serviceName === "DHL Express PRE 9AM"
    ) {
      output = "DHL UK NextDay by 9am";
    }
    if (serviceName === "ukparcels_UKMailDomestic_NextDay1030") {
      output = "DHL UK NextDay by 10am";
    }
    if (serviceName === "DHL Express PRE NOON") {
      output = "DHL UK NextDay by 12am";
    }
    if (serviceName === "ukparcels_UKMailDomestic_Saturday") {
      output = "DHL UK Saturday delivery";
    }
    if (serviceName === "") {
      output = "";
    }
    if (serviceName === "") {
      output = "";
    }
    if (serviceName === "") {
      output = "";
    }
    if (serviceName === "") {
      output = "";
    }
    if (output === "") {
      console.log("new serviceName: ", serviceName, courier);
    }
    return output;
  }
};
