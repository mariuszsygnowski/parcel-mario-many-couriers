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
    } else if (courier_name === "UPS") {
      output = "UPS";
    } else if (courier_name === "TNT") {
      output = "TNT";
    } else if (courier_name === "Collect+") {
      output = "Collect+";
    } else if (courier_name === "UPS Access Point") {
      output = "UPS Access Point";
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
    } else if (serviceName === "Yodel Northern Ireland") {
      output = "Yodel Northern Ireland";
    } else if (serviceName === "Yodel Highland and Islands") {
      output = "Yodel Highland and Islands";
    } else if (serviceName === "Parcelforce Worldwide Express AM") {
      output = "Parcelforce Worldwide Express AM";
    } else if (serviceName === "Parcelforce Worldwide Express 24") {
      output = "Parcelforce Worldwide Express 24";
    } else if (serviceName === "Parcelforce Worldwide Express 48") {
      output = "Parcelforce Worldwide Express 48";
    } else if (serviceName === "Palletforce Delivery - 48 Hours") {
      output = "Palletforce Delivery - 48 Hours";
    } else if (serviceName === "Next Day") {
      output = "Next Day";
    } else if (serviceName === "Parcelforce Worldwide Multi 12 Noon") {
      output = "Parcelforce Worldwide Multi 12 Noon";
    } else if (serviceName === "Parcelforce Worldwide Large 48") {
      output = "Parcelforce Worldwide Large 48";
    } else if (serviceName === "Palletforce Delivery - Next Day") {
      output = "Palletforce Delivery - Next Day";
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
    } else if (serviceName === "Slow") {
      output = "Slow";
    } else {
      console.log("new serviceName: ", serviceName);
    }
    return output;
  }
};
