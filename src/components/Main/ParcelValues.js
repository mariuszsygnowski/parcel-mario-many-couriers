import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import InputCountry from "./InputCountry";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const ParcelValues = ({
  props,
  setPostcodeFrom,
  postcode_from,
  setPostcodeTo,
  postcode_to,
  setCountryFrom,
  country_from,
  setCountryTo,
  country_to,
  setWeight,
  parcel_weight,
  setWidth,
  parcel_width,
  setHeight,
  parcel_height,
  setLength,
  parcel_length
}) => {
  return (
    <form>
      <div>
        <InputCountry
          // nameClass={this.state.displayOffOn}
          sendValue={value => setCountryFrom(value)}
          value={country_from}
          labelName="Country from"
        />
        <InputForm
          // nameClass={this.state.displayOffOn}
          sendValue={value => setPostcodeFrom(value)}
          value={postcode_from}
          placeholder={"Postcode / Zip. Default is RM19 1ZY"}
          labelName=""
        />
      </div>
      <div>
        <InputCountry
          // nameClass={this.state.displayOffOn}
          sendValue={value => setCountryTo(value)}
          value={country_to}
          labelName="Country to"
        />

        <InputForm
          // nameClass={this.state.displayOffOn}
          sendValue={value => setPostcodeTo(value)}
          value={postcode_to}
          placeholder={"Postcode / Zip. Default is EC1R 3DD"}
          labelName=""
        />
      </div>
      <div>
        <InputForm
          // nameClass={this.state.displayOffOn}
          sendValue={value => setWeight(value)}
          value={parcel_weight}
          placeholder={"Weight in kg"}
          labelName="Weight"
        />
        <InputForm
          // nameClass={this.state.displayOffOn}
          sendValue={value => setWidth(value)}
          value={parcel_width}
          placeholder={"Width in cm"}
          labelName="Width"
        />
        <InputForm
          // nameClass={this.state.displayOffOn}
          sendValue={value => setHeight(value)}
          value={parcel_height}
          placeholder={"Height in cm"}
          labelName="Height"
        />
        <InputForm
          // nameClass={this.state.displayOffOn}
          sendValue={value => setLength(value)}
          value={parcel_length}
          placeholder={"Length in cm"}
          labelName="Length"
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ParcelValues;
