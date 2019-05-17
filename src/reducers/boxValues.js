const initialState = {
  postcode_from: "RM191ZY",
  postcode_to: "EC1R3DD",
  country_from: "GB",
  country_to: "GB",
  weight: 1,
  width: 10,
  height: 10,
  length: 10
};

function boxValues(state = initialState, action) {
  switch (action.type) {
    case "SET_POSTCODE_FROM":
      return Object.assign({}, state, { postcode_from: action.postcode });
    case "SET_POSTCODE_TO":
      return Object.assign({}, state, { postcode_to: action.postcode });
    case "SET_COUNTRY_FROM":
      return Object.assign({}, state, { country_from: action.country_code });
    case "SET_COUNTRY_TO":
      return Object.assign({}, state, { country_to: action.country_code });
    case "SET_WEIGHT":
      return Object.assign({}, state, { weight: action.value });
    case "SET_WIDTH":
      return Object.assign({}, state, { width: action.value });
    case "SET_HEIGHT":
      return Object.assign({}, state, { height: action.value });
    case "SET_LENGTH":
      return Object.assign({}, state, { length: action.value });
    case "SET_DEFAULT":
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}

export default boxValues;
