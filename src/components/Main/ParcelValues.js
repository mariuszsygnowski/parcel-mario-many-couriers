import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import InputCountry from "./InputCountry";
import "./parcelValues.scss";
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
      className: "parcelValues__dimensions-weight",
      setValue: value => setWeight(Number(value)),
      val: parcel_weight,
      inputType: "number",
      placeholder: "Weight in kg",
      labelName: "Weight:",
      units: "kg"
    },
    {
      className: "parcelValues__dimensions-width",
      setValue: value => setWidth(Number(value)),
      val: parcel_width,
      inputType: "number",
      placeholder: "Width in cm",
      labelName: "Width",
      units: "cm"
    },
    {
      className: "parcelValues__dimensions-height",
      setValue: value => setHeight(Number(value)),
      val: parcel_height,
      inputType: "number",
      placeholder: "Height in cm",
      labelName: "Height",
      units: "cm"
    },
    {
      className: "parcelValues__dimensions-length",
      setValue: value => setLength(Number(value)),
      val: parcel_length,
      inputType: "number",
      placeholder: "Length in cm",
      labelName: "Length",
      units: "cm"
    }
  ];
  return (
    <form className="parcelValues">
      <div className="parcelValues__countries">
        <div className="parcelValues__countryFromAndTo">
          <InputCountry
            className="parcelValues__countryFromAndTo-selectCountry"
            setValue={value => setCountryFrom(value)}
            val={country_from}
            labelName="From:"
          />
          <InputForm
            className="parcelValues__countryFromAndTo-inputPostcode"
            title="Please enter a Zip Code"
            inputType={"text"}
            setValue={value => setPostcodeFrom(value)}
            val={postcode_from}
            placeholder={"Optional postcode"}
            labelName="from"
          />
        </div>
        <div className="parcelValues__countryFromAndTo">
          <InputCountry
            className="parcelValues__countryFromAndTo-selectCountry"
            setValue={value => setCountryTo(value)}
            val={country_to}
            labelName="To:"
          />

          <InputForm
            className="parcelValues__countryFromAndTo-inputPostcode"
            inputType={"text"}
            setValue={value => setPostcodeTo(value)}
            val={postcode_to}
            placeholder={"Optional postcode"}
            labelName="to"
          />
        </div>
      </div>
      <div className="parcelValues__dimensions">
        {dimensionsArray.map(item => {
          return (
            <InputForm
              key={item.labelName}
              className={item.className}
              inputType={item.inputType}
              setValue={item.setValue}
              val={item.val}
              placeholder={item.placeholder}
              labelName={item.labelName}
              units={item.units}
            />
          );
        })}
      </div>
    </form>
  );
};

export default ParcelValues;
