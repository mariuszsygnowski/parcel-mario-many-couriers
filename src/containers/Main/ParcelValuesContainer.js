import ParcelValues from "../../components/Main/ParcelValues.js";
import { connect } from "react-redux";
import {
  setPostcodeFrom,
  setPostcodeTo,
  setCountryFrom,
  setCountryTo,
  setWeight,
  setWidth,
  setHeight,
  setLength
} from "../../actions";

function mapStateToProps(state) {
  return {
    postcode_from: state.boxValues.postcode_from,
    postcode_to: state.boxValues.postcode_to,
    country_from: state.boxValues.country_from,
    country_to: state.boxValues.country_to,
    parcel_weight: state.boxValues.weight,
    parcel_width: state.boxValues.width,
    parcel_height: state.boxValues.height,
    parcel_length: state.boxValues.length
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setPostcodeFrom: postcode => dispatch(setPostcodeFrom(postcode)),
    setPostcodeTo: postcode => dispatch(setPostcodeTo(postcode)),
    setCountryFrom: value => dispatch(setCountryFrom(value)),
    setCountryTo: value => dispatch(setCountryTo(value)),
    setWeight: value => dispatch(setWeight(value)),
    setWidth: value => dispatch(setWidth(value)),
    setHeight: value => dispatch(setHeight(value)),
    setLength: value => dispatch(setLength(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParcelValues);
