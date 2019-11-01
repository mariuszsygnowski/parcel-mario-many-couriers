import React, {useState} from 'react';
import './resutls.scss';
import importedStyles from '../../../styles/base/_colours.scss';
import {SortingButtons} from './SortingButtons';
import {Days} from './Days';
import {Couriers} from './Couriers';
import {Buttons} from './Buttons';

const Results = props => {
  const [dataFromCurrentSelectedDeliveryTime, setDataFromCurrentSelectedDeliveryTime] = useState([]);
  const [dataFromAllCouriers, setDataFromAllCouriers] = useState([]);

  const responseFromAllDays = receivedData => {
    setDataFromCurrentSelectedDeliveryTime(receivedData);
  };
  const responseFromAllCouriers = receivedData => {
    setDataFromAllCouriers(receivedData.data);
  };

  const setNewData = () => {
    setDataFromCurrentSelectedDeliveryTime([]);
  };

  return (
    <div className={`results`}>
      <div className={`results__wrapper`}>
        <SortingButtons sortByValue={props.sortByValue} setNewData={setNewData} />

        <Days quotes={props.quotes} responseFromAllDays={responseFromAllDays} />

        {dataFromCurrentSelectedDeliveryTime.length > 0 ? (
          <Couriers
            dataFromCurrentSelectedDeliveryTime={dataFromCurrentSelectedDeliveryTime}
            responseFromAllCouriers={responseFromAllCouriers}
          />
        ) : null}
        {dataFromAllCouriers.length > 0 ? <Buttons dataFromAllCouriers={dataFromAllCouriers} /> : null}
      </div>
    </div>
  );
};

export default Results;

export const getElementsButtons = i => {
  const allElementsButtons = document.getElementsByClassName('results__wrapper__sortingButtons__buttons__button');
  for (let index = 0; index < allElementsButtons.length; index++) {
    if (index === i) {
      allElementsButtons[i].style.backgroundColor = importedStyles.buttonColor;
    } else {
      allElementsButtons[index].style.backgroundColor = '';
    }
  }
};
