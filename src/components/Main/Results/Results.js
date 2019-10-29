import React, { useState, useEffect } from "react";
import cx from "classnames";
import "./resutls.scss";
import arrow from "../../../images/arrow-right.svg";
import ItemsCarousel from "react-items-carousel";
import { SingleCourier } from "../SingleCourier";
import ServiceName from "../ServiceName";
import importedStyles from "../../../styles/base/_colours.scss";

const Results = props => {
  const [
    dataFromCurrentSelectedDeliveryTime,
    setDataFromCurrentSelectedDeliveryTime
  ] = useState([]);
  const [dataFromAllCouriers, setDataFromAllCouriers] = useState([]);

  const responseFromAllDays = receivedData => {
    setDataFromCurrentSelectedDeliveryTime(receivedData);
  };
  const responseFromAllCouriers = receivedData => {
    setDataFromAllCouriers(receivedData.data);
  };

  return (
    <div className={`results`}>
      <div className={`results__wrapper`}>
        <SortingButtons sortByValue={props.sortByValue} />

        <Days quotes={props.quotes} responseFromAllDays={responseFromAllDays} />

        {dataFromCurrentSelectedDeliveryTime.length > 0 ? (
          <Couriers
            dataFromCurrentSelectedDeliveryTime={
              dataFromCurrentSelectedDeliveryTime
            }
            responseFromAllCouriers={responseFromAllCouriers}
          />
        ) : null}
        {dataFromAllCouriers.length > 0 ? (
          <Buttons dataFromAllCouriers={dataFromAllCouriers} />
        ) : null}
      </div>
    </div>
  );
};

export default Results;

const SortingButtons = props => {
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
      textSortBy: "min_price_in_courier",
      description: "price low to high"
    },
    {
      textSortBy: "-min_price_in_courier",
      description: "price high to low"
    },
    {
      textSortBy: "courier",
      description: "name a-z"
    },
    {
      textSortBy: "-courier",
      description: "name z-a"
    }
  ];
  const [isOpen, setisOpen] = useState(false);

  const navListClasses = cx("displayNone", {
    displayGrid: isOpen
  });

  const handleClick = event => {
    event.stopPropagation();

    if (isOpen) {
      event.target.innerHTML = "Sort by...";
    } else {
      event.target.innerHTML = "Sort by... (click to close)";
    }
    setisOpen(!isOpen);
  };

  useEffect(() => {
    getElementsButtons(0)
  }, []);

  return (
    <div
      className={`results__wrapper__sortingButtons`}
      // onMouseOver={event => onMOver(event)}
      // onMouseOut={event => onMOut(event)}
    >
      <div className={`results__wrapper__sortingButtons__title`}>

      <button
        onClick={event => handleClick(event)}
        className={`results__wrapper__sortingButtons__title__button`}
      >
        Sort by...
      </button>
      </div>
      <div
        className={`results__wrapper__sortingButtons__buttons ${navListClasses}`}
      >
        {buttonsValuesArray.map((item, i) => {
          return (
            <div
              className={`results__wrapper__sortingButtons__buttons__button`}
              key={item.textSortBy}
              onClick={() => {
                props.sortByValue(item.textSortBy)
                getElementsButtons(i)
              }}
            >
              {item.description}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getElementsButtons = (i) => {
  const allElementsButtons = document.getElementsByClassName(
    "results__wrapper__sortingButtons__buttons__button"
    );
    for (let index = 0; index < allElementsButtons.length; index++) {
      if (index === i) {
        allElementsButtons[i].style.backgroundColor = importedStyles.buttonColor;
      } else {
        allElementsButtons[index].style.backgroundColor = "";
      }
    }
}

const Days = props => {
  const [activeItemIndex, setactiveItemIndex] = useState(0);
  const getElements = i => {
    const allElementsDays = document.getElementsByClassName(
      "results__wrapper__days"
    );
    for (let index = 0; index < allElementsDays.length; index++) {
      if (index === i) {
        allElementsDays[i].style.backgroundColor = importedStyles.buttonColor;
      } else {
        allElementsDays[index].style.backgroundColor = "";
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
    window.addEventListener("resize", handleResize);
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
    props.responseFromAllDays(Object.values(props.quotes)[0]);
    changeActiveItem(0);
    const allElementsDays = document.getElementsByClassName(
      "results__wrapper__days"
    );
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
      activePosition={"left"}
      chevronWidth={36}
      rightChevron={<img src={arrow} alt="" />}
      leftChevron={
        <img style={{ transform: "rotate(180deg)" }} src={arrow} alt="" />
      }
      outsideChevron={false}
    >
      {Object.values(props.quotes).map((item, i) => {
        let deliveryTime = "";
        let key = i;

        if (item[0]) {
          deliveryTime = item[0].delivery_time;
          key = item[0].delivery_time;
        } //item is array quotes.one_day, quotes.two_days...
        //example: (3) [{…}, {…}, {…}]
        //item[0] is "one_day" or "two_days"...
        //item[1] is array with data

        return (
          <div
            key={key}
            className={`results__wrapper__days`}
            onClick={() => handleClick(i)}
          >
            <div className={`results__wrapper__days__title `}>
              {deliveryTime}({item.length})
            </div>
          </div>
        );
      })}
    </ItemsCarousel>
  );
};

const Couriers = props => {
  const [activeItemIndex, setactiveItemIndex] = useState(0);
  const getElements = i => {
    const allElementsCouriers = document.getElementsByClassName(
      "results__wrapper__couriers"
    );
    for (let index = 0; index < allElementsCouriers.length; index++) {
      if (index === i) {
        allElementsCouriers[index].style.backgroundColor =
          importedStyles.buttonColor;
      } else {
        allElementsCouriers[index].style.backgroundColor = "";
      }
    }
  };
  const changeActiveItem = activeItemIndex => {
    setactiveItemIndex(activeItemIndex);
    props.responseFromAllCouriers(
      props.dataFromCurrentSelectedDeliveryTime[activeItemIndex]
    );
    getElements(activeItemIndex);
  };

  const handleClick = i => {
    changeActiveItem(i);
    getElements(i);
  };

  const [numberOfCards, setNumberOfCards] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
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
    const allElementsCouriers = document.getElementsByClassName(
      "results__wrapper__couriers"
    );
    allElementsCouriers[0].style.backgroundColor = importedStyles.buttonColor;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
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
      activePosition={"left"}
      chevronWidth={36}
      rightChevron={<img src={arrow} alt="" />}
      leftChevron={
        <img style={{ transform: "rotate(180deg)" }} src={arrow} alt="" />
      }
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

const Buttons = props => {
  const [activeItemIndex, setactiveItemIndex] = useState(0);
  const changeActiveItem = activeItemIndex => {
    setactiveItemIndex(activeItemIndex);
  };
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width < 650) {
      setNumberOfCards(1);
    } else if (width >= 650 && width < 1150) {
      setNumberOfCards(2);
    } else if (width >= 1150) {
      setNumberOfCards(3);
    }
  }, [width]);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setactiveItemIndex(0);
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
      activePosition={"left"}
      chevronWidth={36}
      rightChevron={<img src={arrow} alt="" />}
      leftChevron={
        <img style={{ transform: "rotate(180deg)" }} src={arrow} alt="" />
      }
      outsideChevron={false}
    >
      {props.dataFromAllCouriers.map(item => {
        return (
          <ServiceName
            key={item.service_name}
            res_result_data={item}
            className={`results__wrapper__buttons`}
          />
        );
      })}
    </ItemsCarousel>
  );
};
