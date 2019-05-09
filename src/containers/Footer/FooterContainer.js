import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
// import {} from "../actions";

function mapStateToProps(state) {
  return {
    weightValue: state.dimensionsAndWeight.weight,
    heightValue: state.dimensionsAndWeight.height,
    widthValue: state.dimensionsAndWeight.width,
    lengthValue: state.dimensionsAndWeight.length
  };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     // hideModal: () => dispatch(hideModal()),
//   };
// };

export default connect(mapStateToProps)(Footer);
