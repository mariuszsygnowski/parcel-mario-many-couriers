import Main from "../../components/Main/Main";
import { connect } from "react-redux";
import {
  fetch_single_courier,
  addResponseCount,
  setNewQuotes,
  toggleModal,
  setInitialState,
  getInitialState
} from "../../actions";

function mapStateToProps(state) {
  return {
    data_from_all_couriers: state.main.data_from_all_couriers,
    courier_names: state.main.courier_names,
    quotes: state.main.quotes,
    how_many_responses: state.main.how_many_responses,
    modal: state.main.modal,
    data: state.main.data
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetch_data: url => dispatch(fetch_single_courier(url)),
    setNewQuotes: quotes => dispatch(setNewQuotes(quotes)),
    addResponseCount: () => dispatch(addResponseCount()),
    toggleModal: () => dispatch(toggleModal()),
    setInitialState: () => dispatch(setInitialState()),
    getInitialState: () => dispatch(getInitialState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
