import React, {useState, useEffect} from 'react';
import arrow from '../../../images/arrow-right.svg';
import ItemsCarousel from 'react-items-carousel';
import importedStyles from '../../../styles/base/_colours.scss';

export const Days = props => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 650) {
      setNumberOfCards(1);
    } else if (window.innerWidth >= 650 && window.innerWidth < 1050) {
      setNumberOfCards(2);
    } else if (window.innerWidth >= 1050) {
      setNumberOfCards(3);
    }
  };

  const setSelectedButton = i => {
    const allElementsDays = document.getElementsByClassName('results__wrapper__days');
    for (let index = 0; index < allElementsDays.length; index++) {
      if (index === i) {
        allElementsDays[i].style.backgroundColor = importedStyles.buttonColor;
      } else {
        allElementsDays[index].style.backgroundColor = '';
      }
    }
  };

  const changeActiveItem = activeItemIndex => {
    props.daysChanged();
    setActiveItemIndex(activeItemIndex);
    props.responseFromAllDays(Object.values(props.quotes)[activeItemIndex]);
    setSelectedButton(activeItemIndex);
  };

  const handleClick = i => {
    setSelectedButton(i);
    changeActiveItem(i);
  };

  useEffect(() => {
    changeActiveItem(activeItemIndex);
    const allElementsDays = document.getElementsByClassName('results__wrapper__days');
    allElementsDays[activeItemIndex].style.backgroundColor = importedStyles.buttonColor;
  }, [props.dataFromCurrentSelectedDeliveryTime]);

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
      {Object.values(props.quotes).map((item, i) => {
        let deliveryTime = '';
        let key = i;
        if (item[0]) {
          deliveryTime = item[0].delivery_time;
          key = item[0].delivery_time;
        } //item is array quotes.one_day, quotes.two_days...
        //example: (3) [{…}, {…}, {…}]
        //item[0] is "one_day" or "two_days"...
        //item[1] is array with data
        return (
          <div key={key} className={`results__wrapper__days`} onClick={() => handleClick(i)}>
            <div className={`results__wrapper__days__title `}>
              {deliveryTime} ({item.length})
            </div>
          </div>
        );
      })}
    </ItemsCarousel>
  );
};
