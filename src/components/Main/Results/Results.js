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

  const responseFromAllDays = receivedData => {
    setDataFromCurrentSelectedDeliveryTime(receivedData);
  };
  const responseFromAllCouriers = receivedData => {
    setDataFromAllCouriers(receivedData.data);
  };

  const setNewSortingOrDays = () => {
    setIsNewSorting(!isNewSorting);
  };

  return (
    <div className={`results`}>
      <div className={`results__wrapper`}>
        <SortingButtons sortByValue={props.sortByValue} setNewSortingOrDays={setNewSortingOrDays} />

        <Days
          quotes={props.quotes}
          responseFromAllDays={responseFromAllDays}
          setNewSortingOrDays={setNewSortingOrDays}
        />

        {dataFromCurrentSelectedDeliveryTime.length > 0 ? (
          <Couriers
            dataFromCurrentSelectedDeliveryTime={dataFromCurrentSelectedDeliveryTime}
            responseFromAllCouriers={responseFromAllCouriers}
            isNewSorting={isNewSorting}
          />
        ) : null}
        {dataFromAllCouriers.length > 0 ? <Buttons dataFromAllCouriers={dataFromAllCouriers} /> : null}
      </div>
    </div>
  );
};

export default Results;
