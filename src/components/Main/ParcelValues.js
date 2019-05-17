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
  const dimensionsArray = [
    {
      inputType: "number",
      setValue: value => setWeight(Number(value)),
      val: parcel_weight,
      placeholder: "Weight in kg",
      labelName: "Weight"
    },
    {
      inputType: "number",
      setValue: value => setWidth(Number(value)),
      val: parcel_width,
      placeholder: "Weight in kg",
      labelName: "Weight"
    },
    {
      inputType: "number",
      setValue: value => setHeight(Number(value)),
      val: parcel_height,
      placeholder: "Weight in kg",
      labelName: "Weight"
    },
    {
      inputType: "number",
      setValue: value => setLength(Number(value)),
      val: parcel_length,
      placeholder: "Weight in kg",
      labelName: "Weight"
    }
  ];
  return (
    <form>
      <div>
        <InputCountry
          // nameClass={this.state.displayOffOn}
          setValue={value => setCountryFrom(value)}
          val={country_from}
          labelName="Country from"
        />
        <InputForm
          // nameClass={this.state.displayOffOn}
          inputType={"text"}
          setValue={value => setPostcodeFrom(value)}
          val={postcode_from}
          placeholder={"Postcode / Zip. Default is RM19 1ZY"}
          labelName=""
        />
      </div>
      <div>
        <InputCountry
          // nameClass={this.state.displayOffOn}
          setValue={value => setCountryTo(value)}
          val={country_to}
          labelName="Country to"
        />

        <InputForm
          // nameClass={this.state.displayOffOn}
          inputType={"text"}
          setValue={value => setPostcodeTo(value)}
          val={postcode_to}
          placeholder={"Postcode / Zip. Default is EC1R 3DD"}
          labelName=""
        />
      </div>
      <div>
        {dimensionsArray.map(item => {
          return (
            <InputForm
              inputType={item.inputType}
              setValue={item.setValue}
              val={item.val}
              placeholder={item.placeholder}
              labelName={item.labelName}
            />
          );
        })}
      </div>
    </form>
  );
};

export default ParcelValues;
