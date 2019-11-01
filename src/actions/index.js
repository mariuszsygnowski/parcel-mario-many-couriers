export function fetch_single_courier(url, box_values) {
  return function(dispatch, getState) {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(box_values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
      .then(courier_arr => {
        dispatch({
          type: 'ADD_DATA_FROM_SINGLE_COURIER',
          courier_arr
        });
        return courier_arr;
      })
      .catch(error => error.message);
  };
}

export function dataCourier() {
  return {type: 'AWA'};
}
export function setNewQuotes(quotes) {
  return {type: 'SET_NEW_QUOTES', quotes};
}
export function addResponseCount() {
  return {
    type: 'ADD_RESPONSE_QUNNTITY'
  };
}
export function setModal(value) {
  return {
    type: 'SET_MODAL',
    true_or_false: value
  };
}
export function setInitialState() {
  return {
    type: 'SET_INITIAL_STATE'
  };
}

export function setPostcodeFrom(postcode) {
  return {type: 'SET_POSTCODE_FROM', postcode};
}
export function setPostcodeTo(postcode) {
  return {type: 'SET_POSTCODE_TO', postcode};
}
export function setCountryFrom(country_code) {
  return {type: 'SET_COUNTRY_FROM', country_code};
}
export function setCountryTo(country_code) {
  return {type: 'SET_COUNTRY_TO', country_code};
}
export function setWeight(value) {
  return {type: 'SET_WEIGHT', value};
}
export function setWidth(value) {
  return {type: 'SET_WIDTH', value};
}
export function setHeight(value) {
  return {type: 'SET_HEIGHT', value};
}
export function setLength(value) {
  return {type: 'SET_LENGTH', value};
}
