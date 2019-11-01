import React, {useState, useEffect} from 'react';
import arrow from '../../../images/arrow-right.svg';
import ItemsCarousel from 'react-items-carousel';
import ServiceName from '../ServiceName';

export const Buttons = props => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    if (width < 650) {
      setNumberOfCards(1);
    } else if (width >= 650 && width < 1150) {
      setNumberOfCards(2);
    } else if (width >= 1150) {
      setNumberOfCards(3);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const changeActiveItem = activeItemIndex => {
    setActiveItemIndex(activeItemIndex);
  };

  useEffect(() => {
    setActiveItemIndex(0);
  }, [props]);

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
      {props.dataFromAllCouriers.map(item => {
        return <ServiceName key={item.service_name} res_result_data={item} className={`results__wrapper__buttons`} />;
      })}
    </ItemsCarousel>
  );
};
