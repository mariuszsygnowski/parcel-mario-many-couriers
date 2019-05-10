const initialState = {
  data_from_all_couriers: [],
  courier_names: ["p2g", "parcelmonkey", "p4d"],
  how_many_responses: 0,
  quotes: {
    one_day: [],
    two_days: [],
    over_two_days: []
  },
  data: [],
  modal: false
};

function main(state = initialState, action) {
  switch (action.type) {
    case "ADD_DATA_FROM_SINGLE_COURIER":
      const courier_arr = action.courier_arr;
      console.log(courier_arr);
      state.data = courier_arr;
      const obj = { [courier_arr[0].company_name]: courier_arr };
      let newDataFromAllCouriers = [...state.data_from_all_couriers];
      newDataFromAllCouriers.push(obj);
      return Object.assign({}, state, {
        data_from_all_couriers: newDataFromAllCouriers
      });

    case "ADD_RESPONSE_QUNNTITY":
      return Object.assign({}, state, {
        how_many_responses: state.how_many_responses + 1
      });

    case "TOGGLE_MODAL":
      return Object.assign({}, state, {
        modal: !state.modal
      });

    case "SET_NEW_QUOTES":
      return Object.assign({}, state, {
        quotes: action.quotes
      });

    case "SET_INITIAL_STATE":
      return Object.assign({}, state, initialState);

    case "GET_INITIAL_STATE":
      return initialState;

    default:
      return state;
  }
}

export default main;
