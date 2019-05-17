import Main from "../../components/Main/Main";
import { connect } from "react-redux";
import {
  fetch_single_courier,
  addResponseCount,
  setNewQuotes,
  setModal,
  setInitialState
} from "../../actions";

function mapStateToProps(state) {
  return {
    data_from_all_couriers: state.main.data_from_all_couriers,
    courier_names: state.main.courier_names,
    quotes: state.main.quotes,
    how_many_responses: state.main.how_many_responses,
    modal: state.main.modal,
    initial_state_main: state.main,
    box_values: state.boxValues
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetch_data: (url, box_values) =>
      dispatch(fetch_single_courier(url, box_values)),
    setNewQuotes: quotes => dispatch(setNewQuotes(quotes)),
    addResponseCount: () => dispatch(addResponseCount()),
    setModal: value => dispatch(setModal(value)),
    setInitialState: () => dispatch(setInitialState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
