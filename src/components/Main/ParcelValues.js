// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import cx from 'classnames';

import InputForm from './InputForm';
import InputCountry from './InputCountry';
import './parcelValues.scss';

const ParcelValues = props => {
  const [isOpen, setIsOpen] = useState(false);
  const navListClasses = cx('displayNone', {
    displayGrid: isOpen
  });

  const changeClassNames = event => {
    event.preventDefault();
    if (isOpen) {
      event.target.innerHTML = 'LONGER THAN 1M?';
    } else {
      event.target.innerHTML = 'Click here to close';
    }
    setIsOpen(!isOpen);
  };

  const dimensionsArray = [
    {
      className: 'parcelValues__values__dimensions-inputForm ',
      setValue: value => props.setWeight(Number(value)),
      val: props.parcel_weight,
      inputType: 'number',
      placeholder: 'Weight in kg',
      labelName: 'Weight',
      units: 'kg'
    },
    {
      className: `parcelValues__values__dimensions-inputForm ${navListClasses}`,
      setValue: value => props.setWidth(Number(value)),
      val: props.parcel_width,
      inputType: 'number',
      placeholder: 'Width in cm',
      labelName: 'Width',
      units: 'cm'
    },
    {
      className: `parcelValues__values__dimensions-inputForm ${navListClasses}`,
      setValue: value => props.setHeight(Number(value)),
      val: props.parcel_height,
      inputType: 'number',
      placeholder: 'Height in cm',
      labelName: 'Height',
      units: 'cm'
    },
    {
      className: `parcelValues__values__dimensions-inputForm ${navListClasses}`,
      setValue: value => props.setLength(Number(value)),
      val: props.parcel_length,
      inputType: 'number',
      placeholder: 'Length in cm',
      labelName: 'Length',
      units: 'cm'
    }
  ];

  const runDataCourier = event => {
    event.preventDefault();
    props.dataCourier();
  };

  return (
    <form className='parcelValues'>
      <div className='parcelValues__countries'>
        <div className='parcelValues__countryFromAndTo'>
          <InputCountry
            className='parcelValues__countryFromAndTo-selectCountry'
            setValue={value => props.setCountryFrom(value)}
            val={props.country_from}
            labelName='From:'
          />
          <InputForm
            className='parcelValues__countryFromAndTo-inputPostcode'
            title='Please enter a Zip Code'
            inputType={'text'}
            setValue={value => props.setPostcodeFrom(value)}
            val={props.postcode_from}
            placeholder={'Optional postcode'}
            labelName='from'
          />
        </div>
        <div className='parcelValues__countryFromAndTo'>
          <InputCountry
            className='parcelValues__countryFromAndTo-selectCountry'
            setValue={value => props.setCountryTo(value)}
            val={props.country_to}
            labelName='To:'
          />

          <InputForm
            className='parcelValues__countryFromAndTo-inputPostcode'
            inputType={'text'}
            setValue={value => props.setPostcodeTo(value)}
            val={props.postcode_to}
            placeholder={'Optional postcode'}
            labelName='to'
          />
        </div>
      </div>

      <div className='parcelValues__values'>
        <button type='button' onClick={changeClassNames} className='parcelValues__values__button'>
          LONGER THAN 1M?
        </button>
        <div className='parcelValues__values__dimensions'>
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
      </div>

      <button className='parcelValues__button-quote' type='submit' onClick={runDataCourier}>
        QUOTE
      </button>
    </form>
  );
};

export default ParcelValues;
