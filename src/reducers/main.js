// courier_names: ["p2g", "p4d", "parcelmonkey"],
const initialState = {
  data_from_all_couriers: [],
  courier_names: ['p2g', 'p4d', 'parcelmonkey'],
  how_many_responses: 0,
  quotes: {
    one_day: [],
    two_days: [],
    over_two_days: []
  },
  modal: false
};

function main(state = initialState, action) {
  switch (action.type) {
    case 'ADD_DATA_FROM_SINGLE_COURIER':
      // console.log(action.courier);
      let courier_arr = [];
      if (action.courier_arr.length === 0) {
        courier_arr = [{company_name: 'no results'}];
      } else {
        courier_arr = action.courier_arr;
      }

      const obj = {[courier_arr[0].company_name]: courier_arr};
      let newDataFromAllCouriers = [...state.data_from_all_couriers];
      newDataFromAllCouriers.push(obj);
      return Object.assign({}, state, {
        data_from_all_couriers: newDataFromAllCouriers
      });

    case 'ADD_RESPONSE_QUNNTITY':
      return Object.assign({}, state, {
        how_many_responses: state.how_many_responses + 1
      });

    case 'AWA':
      // console.log(action.a);
      return Object.assign({}, state);

    case 'SET_MODAL':
      return Object.assign({}, state, {
        modal: action.true_or_false
      });

    case 'SET_NEW_QUOTES':
      return Object.assign({}, state, action.quotes);

    case 'SET_INITIAL_STATE':
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

export default main;
