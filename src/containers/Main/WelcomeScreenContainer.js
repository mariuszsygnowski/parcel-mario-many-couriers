import WelcomeScreen from "../../components/Main/WelcomeScreen";
import { connect } from "react-redux";
import { fetch_single_courier } from "../../actions";

function mapStateToProps(state) {
  return {
    data_from_all_couriers: state.main.data_from_all_couriers
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetch_data: (url, box_values) =>
      dispatch(fetch_single_courier(url, box_values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen);
