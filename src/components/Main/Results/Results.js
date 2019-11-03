import React, {useState, useEffect} from 'react';
import './results.scss';
import {SortingButtons} from './SortingButtons';
import {Days} from './Days';
import {Couriers} from './Couriers';
import {Buttons} from './Buttons';

const Results = props => {
  const [dataFromCurrentSelectedDeliveryTime, setDataFromCurrentSelectedDeliveryTime] = useState([]);
  const [dataFromAllCouriers, setDataFromAllCouriers] = useState([]);
  const [isNewSorting, setIsNewSorting] = useState(false);
  const [isDaysChanged, setIsDaysChanged] = useState(false);

  const responseFromAllDays = receivedData => {
    setDataFromCurrentSelectedDeliveryTime(receivedData);
  };

  const responseFromAllCouriers = receivedData => {
    setDataFromAllCouriers(receivedData.data);
  };

  const handleNewSorting = () => {
    setIsNewSorting(!isNewSorting);
  };

  const daysChanged = () => {
    setIsDaysChanged(!isDaysChanged);
  };

  return (
    <div className={`results`}>
      <div className={`results__wrapper`}>
        <SortingButtons sortByValue={props.sortByValue} handleNewSorting={handleNewSorting} />

        <Days quotes={props.quotes} responseFromAllDays={responseFromAllDays} daysChanged={daysChanged} />

        {dataFromCurrentSelectedDeliveryTime.length > 0 ? (
          <Couriers
            dataFromCurrentSelectedDeliveryTime={dataFromCurrentSelectedDeliveryTime}
            responseFromAllCouriers={responseFromAllCouriers}
            isNewSorting={isNewSorting}
            isDaysChanged={isDaysChanged}
          />
        ) : null}
        {dataFromAllCouriers.length > 0 ? <Buttons dataFromAllCouriers={dataFromAllCouriers} /> : null}
      </div>
    </div>
  );
};

export default Results;
