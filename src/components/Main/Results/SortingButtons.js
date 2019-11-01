import React, {useState, useEffect} from 'react';
import cx from 'classnames';
import importedStyles from '../../../styles/base/_colours.scss';

const getElementsButtons = i => {
  const allElementsButtons = document.getElementsByClassName('results__wrapper__sortingButtons__buttons__button');
  for (let index = 0; index < allElementsButtons.length; index++) {
    if (index === i) {
      allElementsButtons[i].style.backgroundColor = importedStyles.buttonColor;
    } else {
      allElementsButtons[index].style.backgroundColor = '';
    }
  }
};

export const SortingButtons = props => {
  const [isOpen, setIsOpen] = useState(false);
  const navListClasses = cx('displayNone', {
    displayGrid: isOpen
  });

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

  const handleClick = event => {
    event.stopPropagation();
    if (isOpen) {
      event.target.innerHTML = 'Sort by...';
    } else {
      event.target.innerHTML = 'Sort by... (click to close)';
    }
    setIsOpen(!isOpen);
    const allElementsCouriers = document.getElementsByClassName('results__wrapper__couriers');
    allElementsCouriers[0].style.backgroundColor = importedStyles.buttonColor;
  };

  const handleClickSortingButton = (i, item) => {
    props.setNewSortingOrDays();
    props.sortByValue(item);
    getElementsButtons(i);
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
