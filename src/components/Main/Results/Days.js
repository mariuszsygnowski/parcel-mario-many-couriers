import React, {useState, useEffect} from 'react';
import arrow from '../../../images/arrow-right.svg';
import ItemsCarousel from 'react-items-carousel';
import importedStyles from '../../../styles/base/_colours.scss';
export const Days = props => {
  const [activeItemIndex, setactiveItemIndex] = useState(0);
  const getElements = i => {
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
    setactiveItemIndex(activeItemIndex);
    props.responseFromAllDays(Object.values(props.quotes)[activeItemIndex]);
    getElements(activeItemIndex);
  };
  const handleClick = i => {
    getElements(i);
    changeActiveItem(i);
  };
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (width < 650) {
      setNumberOfCards(1);
    } else if (width >= 650 && width < 1050) {
      setNumberOfCards(2);
    } else if (width >= 1050) {
      setNumberOfCards(3);
    }
  }, [width]);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    console.log(`props.quotes:`, props.quotes);
    props.responseFromAllDays(Object.values(props.quotes)[0]);
    changeActiveItem(0);
    const allElementsDays = document.getElementsByClassName('results__wrapper__days');
    allElementsDays[0].style.backgroundColor = importedStyles.buttonColor;
    // allElementsDaysHover[0].style.backgroundColor =
    //   importedStyles.buttonColorHover;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.quotes]);
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
              {deliveryTime}({item.length})
            </div>
          </div>
        );
      })}
    </ItemsCarousel>
  );
};
