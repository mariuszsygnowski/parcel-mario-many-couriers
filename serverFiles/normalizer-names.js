module.exports = {
  // This is the function which will be called in the main file, which is server.js
  // The parameters 'name' and 'surname' will be provided inside the function
  // when the function is called in the main file.
  // Example: concatenameNames('John,'Doe');
  courierNameP4D: courier_name => {
    let output = courier_name;

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
    } else if (
      courier_name === "Express Sameday Collect" ||
      courier_name === "UPS Express"
    ) {
      output = "UPS";
    } else if (
      courier_name === "DHL Express" ||
      courier_name === "DHL Express PRE NOON" ||
      courier_name === "DHL Express PRE 9AM" ||
      courier_name === "DHL Express"
    ) {
      output = "DHL";
    } else {
      console.log("new courier_nameP4D: ", courier_name);
    }

    return output;
  },
  courierName: courier_name => {
    let output = courier_name;

    if (courier_name === "MyHermes" || courier_name === "Hermes") {
      output = "Hermes";
    } else if (courier_name === "Parcelforce") {
      output = "Parcelforce";
    } else if (courier_name === "Yodel") {
      output = "Yodel";
    } else if (courier_name === "UPS" || courier_name === "UPS Access Point") {
      output = "UPS";
    } else if (courier_name === "TNT") {
      output = "TNT";
    } else if (courier_name === "Collect+") {
      output = "Collect+";
    } else if (courier_name === "InPost") {
      output = "InPost";
    } else if (courier_name === "DX") {
      output = "DX";
    } else if (courier_name === "DPD") {
      output = "DPD";
    } else if (courier_name === "PalletForce") {
      output = "PalletForce";
    } else if (
      courier_name === "DHL" ||
      courier_name === "DHL Parcel UK" ||
      courier_name === "DHL Parcel UK"
    ) {
      output = "DHL";
    } else {
      console.log("new courier_name: ", courier_name);
    }

    return output;
  },

  deliveryTime: deliveryTime => {
    let output = deliveryTime;

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
    } else if (
      deliveryTime === "Parcelforce 48" ||
      deliveryTime === "1-2 days drop off service" ||
      deliveryTime === "Medium" ||
      deliveryTime === "Parcelforce Large" ||
      deliveryTime === "2 working days"
    ) {
      output = "Medium";
    } else if (deliveryTime === "Slow") {
      output = "Slow";
    } else {
      console.log("new deliveryTime: ", deliveryTime);
    }
    return output;
  },
  serviceName: serviceName => {
    let output = serviceName;

    if (
      serviceName === "Service: access point™ to access point™" ||
      serviceName === "Access Point™ to Access Point™"
    ) {
      output = "Service: access point™ to access point™";
    } else if (serviceName === "ukparcels_dpddropoff24") {
      output = "Drop off - DPD";
    } else if (serviceName === "Yodel Northern Ireland") {
      output = "Yodel Northern Ireland";
    } else if (serviceName === "Yodel Highland and Islands") {
      output = "Yodel Highland and Islands";
    } else if (
      serviceName === "Parcelforce Worldwide Express 24 Drop Off" ||
      serviceName === "ukparcels_podopf24"
    ) {
      output = "Drop off at post office - Parcelforce Worldwide Express 24";
    } else if (serviceName === "ukparcels_pfdropoff24") {
      output = "Drop off at depot - Parcelforce Worldwide Express 24";
    } else if (
      serviceName === "Parcelforce Worldwide Express 48 Drop Off" ||
      serviceName === "ukparcels_podopf48"
    ) {
      output = "Drop off at post office - Parcelforce Worldwide Express 48";
    } else if (serviceName === "ukparcels_pfdropoff48") {
      output = "Drop off at depot - Parcelforce Worldwide Express 48";
    } else if (
      serviceName === "Parcelforce Worldwide by 9am" ||
      serviceName === "ukparcels_pf24before0900"
    ) {
      output = "Parcelforce Worldwide by 9am";
    } else if (serviceName === "ukparcels_podopfby09") {
      output = "Drop off at post office - Parcelforce Worldwide by 9am";
    } else if (
      serviceName === "Parcelforce Worldwide by 10am" ||
      serviceName === "ukparcels_pf24before1000"
    ) {
      output = "Parcelforce Worldwide by 10am";
    } else if (serviceName === "ukparcels_podopfby10") {
      output = "Drop off at post office - Parcelforce Worldwide by 10am";
    } else if (
      serviceName === "Parcelforce Worldwide Express AM" ||
      serviceName === "ukparcels_pf24before1200" ||
      serviceName === "Parcelforce AM"
    ) {
      output = "Parcelforce Worldwide Express AM";
    } else if (serviceName === "ukparcels_podopfby12") {
      output = "Drop off at post office - Parcelforce Worldwide by 12am";
    } else if (serviceName === "Parcelforce Worldwide Multi 12 Noon") {
      output = "Parcelforce Worldwide Multi 12 Noon";
    } else if (serviceName === "Parcelforce Worldwide Large 24") {
      output = "Parcelforce Worldwide Large 24";
    } else if (
      serviceName === "Parcelforce Worldwide Large 48" ||
      serviceName === "Parcelforce Large"
    ) {
      output = "Parcelforce Worldwide Large 48";
    } else if (
      serviceName === "Parcelforce Worldwide Express 24" ||
      serviceName === "ukparcels_pf24" ||
      serviceName === "Parcelforce 24"
    ) {
      output = "Parcelforce Worldwide Express 24";
    } else if (
      serviceName === "Parcelforce Worldwide Express 48" ||
      serviceName === "ukparcels_pf48" ||
      serviceName === "Parcelforce 48"
    ) {
      output = "Parcelforce Worldwide Express 48";
    } else if (serviceName === "Palletforce Delivery - Next Day") {
      output = "Palletforce Delivery - Next Day";
    } else if (serviceName === "Palletforce Delivery - 48 Hours") {
      output = "Palletforce Delivery - 48 Hours";
    } else if (
      serviceName === "ukparcels_pfsaturday" ||
      serviceName === "Saturday Delivery"
    ) {
      output = "Parcelforce Saturday delivery";
    } else if (
      serviceName === "ukparcels_pfsunday" ||
      serviceName === "Sunday Delivery"
    ) {
      output = "Parcelforce Sunday delivery";
    } else if (serviceName === "TNT UK Saturday Express") {
      output = "TNT UK Saturday Express";
    } else if (serviceName === "TNT UK 12:00 Express") {
      output = "TNT UK 12:00 Express";
    } else if (serviceName === "TNT UK Express Service") {
      output = "TNT UK Express Service";
    } else if (serviceName === "Hermes UK Collection") {
      output = "Hermes UK Collection";
    } else if (serviceName === "TNT UK 10:00 Express") {
      output = "TNT UK 10:00 Express";
    } else if (serviceName === "TNT UK 09:00 Express") {
      output = "TNT UK 09:00 Express";
    } else if (
      serviceName === "Yodel 24" ||
      serviceName === "Yodel XpressPack 24"
    ) {
      output = "Yodel 24";
    } else if (
      serviceName === "Yodel 48" ||
      serviceName === "Yodel XpressPack 48"
    ) {
      output = "Yodel 48";
    } else if (serviceName === "Collect+ Economy") {
      output = "Collect+ Economy";
    } else if (serviceName === "Hermes ParcelShop") {
      output = "Drop off - Hermes ParcelShop";
    } else if (serviceName === "Hermes Light and Large") {
      output = "Hermes Light and Large";
    } else if (
      serviceName === "UPS Standard®" ||
      serviceName === "UPS Express" ||
      serviceName === "Next Day"
    ) {
      output = "UPS Standard";
    } else if (serviceName === "Express Sameday Collect") {
      output = "UPS Express Sameday Collect";
    } else if (serviceName === "UPS Access Point™") {
      output = "Drop off - UPS Access Point™";
    } else if (serviceName === "InPost 48") {
      output = "Drop off - InPost 48";
    } else if (serviceName === "DX24" || serviceName === "ukbag_fast") {
      output = "DX 24H";
    } else if (serviceName === "DX48") {
      output = "DX 48H";
    } else if (serviceName === "InPost 24") {
      output = "Drop off - InPost 24";
    } else if (serviceName === "DPD Drop Off") {
      output = "Drop off - DPD";
    } else if (serviceName === "UPS Express® by 10.30am") {
      output = "UPS Express® by 10.30am";
    } else if (serviceName === "UPS Express Saver® by 12pm") {
      output = "UPS Express Saver® by 12pm";
    } else if (serviceName === "Collect+") {
      output = "Drop off - Collect+";
    } else if (serviceName === "TNT UK Standard Service") {
      output = "TNT UK Standard Service";
    } else if (serviceName === "Yodel by 12pm") {
      output = "Yodel by 12pm";
    } else if (
      serviceName === "DHL UK" ||
      serviceName === "ukparcels_UKMailDomestic_NextDay" ||
      serviceName === "DHL Express"
    ) {
      output = "DHL UK NextDay";
    } else if (
      serviceName === "ukparcels_UKMailDomestic_NextDay0900" ||
      serviceName === "DHL Express PRE 9AM"
    ) {
      output = "DHL UK NextDay by 9am";
    } else if (serviceName === "ukparcels_UKMailDomestic_NextDay1030") {
      output = "DHL UK NextDay by 10am";
    } else if (serviceName === "DHL Express PRE NOON") {
      output = "DHL UK NextDay by 12am";
    } else if (serviceName === "ukparcels_UKMailDomestic_Saturday") {
      output = "DHL UK Saturday delivery";
    } else if (serviceName === "") {
      output = "";
    } else if (serviceName === "") {
      output = "";
    } else if (serviceName === "") {
      output = "";
    } else if (serviceName === "") {
      output = "";
    } else {
      console.log("new serviceName: ", serviceName);
    }
    return output;
  }
};
