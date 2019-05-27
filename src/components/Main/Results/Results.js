import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import "./resutls.scss";
import ItemsCarousel from "react-items-carousel";
import { SingleCourier } from "../SingleCourier";
import ServiceName from "../ServiceName";

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

const Days = props => {
  const [activeItemIndex, setactiveItemIndex] = useState(0);
  const changeActiveItem = activeItemIndex => {
    setactiveItemIndex(activeItemIndex);
    props.responseFromAllDays(Object.values(props.quotes)[activeItemIndex]);
  };

  const handleClick = e => {
    changeActiveItem(e);
    setisOpen(true);
  };

  useEffect(() => {
    props.responseFromAllDays(Object.values(props.quotes)[0]);
    setactiveItemIndex(0);
  }, [props.quotes]);

  const [isOpen, setisOpen] = useState(false);

  const navListClasses = cx("bgc-none", {
    "bgc-red": isOpen
  });
  return (
    <ItemsCarousel
      numberOfCards={1}
      gutter={2}
      showSlither={false}
      firstAndLastGutter={false}
      freeScrolling={false} // Active item configurations
      requestToChangeActive={changeActiveItem}
      activeItemIndex={activeItemIndex}
      activePosition={"left"}
      chevronWidth={24}
      rightChevron={<button>{">"}</button>}
      leftChevron={<button>{"<"}</button>}
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
            className={`results__wrapper__days ${navListClasses}`}
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
  const changeActiveItem = activeItemIndex => {
    setactiveItemIndex(activeItemIndex);
    props.responseFromAllCouriers(
      props.dataFromCurrentSelectedDeliveryTime[activeItemIndex]
    );
  };

  useEffect(() => {
    console.log(props.dataFromCurrentSelectedDeliveryTime);
    props.responseFromAllCouriers(props.dataFromCurrentSelectedDeliveryTime[0]);
    setactiveItemIndex(0);
  }, [props.dataFromCurrentSelectedDeliveryTime]);

  return (
    <ItemsCarousel
      numberOfCards={1}
      gutter={2}
      showSlither={false}
      firstAndLastGutter={false}
      freeScrolling={false} // Active item configurations
      requestToChangeActive={changeActiveItem}
      activeItemIndex={activeItemIndex}
      activePosition={"left"}
      chevronWidth={24}
      rightChevron={<button>{">"}</button>}
      leftChevron={<button>{"<"}</button>}
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
            click={() => changeActiveItem(i)}
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
  useEffect(() => {
    setactiveItemIndex(0);
  }, [props]);
  return (
    <ItemsCarousel
      numberOfCards={1}
      gutter={2}
      showSlither={false}
      firstAndLastGutter={false}
      freeScrolling={false} // Active item configurations
      requestToChangeActive={changeActiveItem}
      activeItemIndex={activeItemIndex}
      activePosition={"left"}
      chevronWidth={24}
      rightChevron={<button>{">"}</button>}
      leftChevron={<button>{"<"}</button>}
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
