import React, {useState, useEffect} from 'react';
import cx from 'classnames';
import importedStyles from '../../../styles/base/_colours.scss';
import {getElementsButtons} from './Results';
export const SortingButtons = props => {
  // const [activeItemIndex, setactiveItemIndex] = useState(0);
  // const getElements = i => {
  //   const allElementsDays = document.getElementsByClassName(
  //     "results__wrapper__sortingButtons"
  //   );
  //   for (let index = 0; index < allElementsDays.length; index++) {
  //     if (index === i) {
  //       allElementsDays[i].style.backgroundColor = importedStyles.buttonColor;
  //     } else {
  //       allElementsDays[index].style.backgroundColor = "";
  //     }
  //   }
  // };
  // const changeActiveItem = activeItemIndex => {
  //   setactiveItemIndex(activeItemIndex);
  //   // props.responseFromAllDays(Object.values(props.quotes)[activeItemIndex]);
  //   getElements(activeItemIndex);
  // };
  // const [numberOfCards, setNumberOfCards] = useState(0);
  // const [width, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   if (width < 375) {
  //     setNumberOfCards(1);
  //   } else if (width >= 375 && width < 650) {
  //     setNumberOfCards(2);
  //   } else if (width >= 650 && width < 1050) {
  //     setNumberOfCards(3);
  //   } else if (width >= 1050) {
  //     setNumberOfCards(4);
  //   }
  // }, [width]);
  // const handleClick = i => {
  //   getElements(i);
  //   changeActiveItem(i);
  // };
  // const handleResize = () => {
  //   setWidth(window.innerWidth);
  // };
  const buttonsValuesArray = [
    {
      textSortBy: 'min_price_in_courier',
      description: 'price low to high'
    },
    {
      textSortBy: '-min_price_in_courier',
      description: 'price high to low'
    },
    {
      textSortBy: 'courier',
      description: 'name a-z'
    },
    {
      textSortBy: '-courier',
      description: 'name z-a'
    }
  ];
  const [isOpen, setisOpen] = useState(false);
  const navListClasses = cx('displayNone', {
    displayGrid: isOpen
  });
  const handleClick = event => {
    event.stopPropagation();
    if (isOpen) {
      event.target.innerHTML = 'Sort by...';
    } else {
      event.target.innerHTML = 'Sort by... (click to close)';
    }
    setisOpen(!isOpen);
    const allElementsCouriers = document.getElementsByClassName('results__wrapper__couriers');
    allElementsCouriers[0].style.backgroundColor = importedStyles.buttonColor;
  };
  const handleClickSortingButton = (i, item) => {
    props.setNewData();
    props.sortByValue(item);
    getElementsButtons(i);
    // props.responseFromAllCouriers(props.dataFromCurrentSelectedDeliveryTime[0]);
    // changeActiveItem(0);
  };
  useEffect(() => {
    getElementsButtons(0);
  }, []);
  return (
    <div className={`results__wrapper__sortingButtons`}>
      <div className={`results__wrapper__sortingButtons__title`}>
        <button onClick={event => handleClick(event)} className={`results__wrapper__sortingButtons__title__button`}>
          Sort by...
        </button>
      </div>
      <div className={`results__wrapper__sortingButtons__buttons ${navListClasses}`}>
        {buttonsValuesArray.map((item, i) => {
          return (
            <div
              className={`results__wrapper__sortingButtons__buttons__button`}
              key={item.textSortBy}
              onClick={() => handleClickSortingButton(i, item.textSortBy)}
            >
              {item.description}
            </div>
          );
        })}
      </div>
    </div>
  );
};
