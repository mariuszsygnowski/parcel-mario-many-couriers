import React, {useState, useEffect} from 'react';
import arrow from '../../../images/arrow-right.svg';
import ItemsCarousel from 'react-items-carousel';
import {SingleCourier} from '../SingleCourier';
import importedStyles from '../../../styles/base/_colours.scss';

export const Couriers = props => {
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 350) {
      setNumberOfCards(1);
    } else if (window.innerWidth >= 350 && window.innerWidth < 600) {
      setNumberOfCards(2);
    } else if (window.innerWidth >= 600 && window.innerWidth < 900) {
      setNumberOfCards(3);
    } else if (window.innerWidth >= 900) {
      setNumberOfCards(4);
    }
  };

  const setSelectedButton = i => {
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
    setSelectedButton(activeItemIndex);
  };

  useEffect(() => {
    changeActiveItem(0);
    const allElementsCouriers = document.getElementsByClassName('results__wrapper__couriers');
    allElementsCouriers[0].style.backgroundColor = importedStyles.buttonColor;
  }, [props.isDaysChanged, props.isNewSorting]);

  const handleClick = i => {
    changeActiveItem(i);
    setSelectedButton(i);
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
