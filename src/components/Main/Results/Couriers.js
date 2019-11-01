import React, {useState, useEffect} from 'react';
import arrow from '../../../images/arrow-right.svg';
import ItemsCarousel from 'react-items-carousel';
import {SingleCourier} from '../SingleCourier';
import importedStyles from '../../../styles/base/_colours.scss';

export const Couriers = props => {
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [newSelection, setNewSelection] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (width < 350) {
      setNumberOfCards(1);
    } else if (width >= 350 && width < 600) {
      setNumberOfCards(2);
    } else if (width >= 600 && width < 900) {
      setNumberOfCards(3);
    } else if (width >= 900) {
      setNumberOfCards(4);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const getElements = i => {
    const allElementsCouriers = document.getElementsByClassName('results__wrapper__couriers');
    for (let index = 0; index < allElementsCouriers.length; index++) {
      if (index === i) {
        allElementsCouriers[index].style.backgroundColor = importedStyles.buttonColor;
      } else {
        allElementsCouriers[index].style.backgroundColor = '';
      }
    }
  };

  const changeActiveItem = activeItemIndex => {
    setActiveItemIndex(activeItemIndex);
    props.responseFromAllCouriers(props.dataFromCurrentSelectedDeliveryTime[activeItemIndex]);
    getElements(activeItemIndex);
  };

  useEffect(() => {
    setNewSelection(prev => {
      //for every new props I checking if props.isNewSorting is changed
      //if user make a new selection (new sorting or selected new day)
      //then first element will be selected
      if (prev === props.isNewSorting) {
        changeActiveItem(activeItemIndex);
        const allElementsCouriers = document.getElementsByClassName('results__wrapper__couriers');
        allElementsCouriers[activeItemIndex].style.backgroundColor = importedStyles.buttonColor;
      } else {
        changeActiveItem(0);
        const allElementsCouriers = document.getElementsByClassName('results__wrapper__couriers');
        allElementsCouriers[0].style.backgroundColor = importedStyles.buttonColor;
      }
      return props.isNewSorting;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const handleClick = i => {
    changeActiveItem(i);
    getElements(i);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <ItemsCarousel
      numberOfCards={numberOfCards}
      gutter={2}
      showSlither={false}
      firstAndLastGutter={false}
      freeScrolling={false} // Active item configurations
      requestToChangeActive={changeActiveItem}
      activeItemIndex={activeItemIndex}
      activePosition={'left'}
      chevronWidth={36}
      rightChevron={<img src={arrow} alt='' />}
      leftChevron={<img style={{transform: 'rotate(180deg)'}} src={arrow} alt='' />}
      outsideChevron={false}
    >
      {props.dataFromCurrentSelectedDeliveryTime.map((result, i) => {
        //result is object this.state.quotes.one_day[index], this.state.quotes.two_days[index]...
        //example: {id: 1, price: "20.11", courier: "DPD", data: Array(3)}.
        return (
          <SingleCourier
            className={`results__wrapper__couriers`}
            key={result.courier}
            result={result}
            click={() => handleClick(i)}
          />
        );
      })}
    </ItemsCarousel>
  );
};
