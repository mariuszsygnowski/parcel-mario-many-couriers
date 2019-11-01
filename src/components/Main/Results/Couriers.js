import React, {useState, useEffect} from 'react';
import arrow from '../../../images/arrow-right.svg';
import ItemsCarousel from 'react-items-carousel';
import {SingleCourier} from '../SingleCourier';
import importedStyles from '../../../styles/base/_colours.scss';
export const Couriers = props => {
  const [activeItemIndex, setactiveItemIndex] = useState(0);
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
    setactiveItemIndex(activeItemIndex);
    props.responseFromAllCouriers(props.dataFromCurrentSelectedDeliveryTime[activeItemIndex]);
    getElements(activeItemIndex);
  };
  const handleClick = i => {
    changeActiveItem(i);
    getElements(i);
  };
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
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
  }, [width]);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    props.responseFromAllCouriers(props.dataFromCurrentSelectedDeliveryTime[0]);
    changeActiveItem(0);
    const allElementsCouriers = document.getElementsByClassName('results__wrapper__couriers');
    allElementsCouriers[0].style.backgroundColor = importedStyles.buttonColor;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dataFromCurrentSelectedDeliveryTime]);

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
