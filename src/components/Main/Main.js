import React, { useState, useEffect } from "react";
import ParcelValuesContainer from "../../containers/Main/ParcelValuesContainer";
import Sorting from "./Functions/Sorting";
import SortingBy from "./Functions/SortingBy";
import "./main.scss";
import { Modal, ProgressBar, Button } from "react-bootstrap";
import { SingleCourier } from "./SingleCourier";

const Main = ({
  setInitialState,
  fetch_data,
  data_from_all_couriers,
  quotes,
  courier_names,
  how_many_responses,
  addResponseCount,
  setNewQuotes,
  modal,
  toggleModal,
  getInitialState,
  data
}) => {
  const [quotesMain, setquotesMain] = useState(quotes);
  const [uniqueApiKey, setuniqueApiKey] = useState();

  useEffect(() => {
    if (data_from_all_couriers.length === 1) {
      console.log(data_from_all_couriers[data_from_all_couriers.length - 1], {
        [data[0].company_name]: data
      });
      setNewData(
        {
          [data[0].company_name]: data
        },
        uniqueApiKey
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const dataCourier = async () => {
    setInitialState();
    setquotesMain(quotes);
    toggleModal();
    const uniqueKey = await getUniqueKeyId();
    if (uniqueKey) {
      setuniqueApiKey(uniqueKey);
      for (let courier of courier_names) {
        const url = `/api/${courier}`;
        await fetch_data(url);
      }
    }
  };
  const setNewData = async (data, uniqueApiKey) => {
    const data_from_database = await getDataFromDatabase(data, uniqueApiKey);
    if (data_from_database) {
      const single_result = Object.values(data_from_database);
      const response_from_sorting = Sorting(quotesMain, single_result);
      if (response_from_sorting) {
        addResponseCount();
        const data_from_sorted_by = SortingBy(
          "min_price_in_courier",
          response_from_sorting.quotes
        );
        if (data_from_sorted_by) {
          setquotesMain(data_from_sorted_by);
          setNewQuotes(data_from_sorted_by);
          if (how_many_responses === courier_names.length - 1) {
            setTimeout(() => {
              toggleModal();
            }, 500);
          }
        }
      }
    }
  };

  const sortByValue = async sort_by => {
    const respond = await SortingBy(sort_by, quotesMain);
    if (respond) {
      setNewQuotes(respond);
    }
  };

  return (
    <main className="main">
      {/* <Modal
        isOpen={modal}
        style={{
          top: "15px"
        }}
      >
        <ModalBody>
          <Progress value={how_many_responses} max={courier_names.length} />
          Received responses {how_many_responses}/{courier_names.length}
        </ModalBody>
      </Modal> */}

      <Modal show={modal}>
        <Modal.Header>
          <Modal.Title>Searching...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar
            variant="success"
            min={0}
            max={courier_names.length}
            now={how_many_responses}
          />
          Received responses: {how_many_responses}/{courier_names.length}
        </Modal.Body>
      </Modal>

      <ParcelValuesContainer />
      <div className="main__buttons">
        <Button variant="outline-success" block onClick={dataCourier}>
          search Button
        </Button>
        <Button
          variant="outline-success"
          block
          onClick={() => sortByValue("min_price_in_courier")}
        >
          sort by price low to high
        </Button>
        <Button
          variant="outline-success"
          block
          onClick={() => sortByValue("-min_price_in_courier")}
        >
          sort by price high to low
        </Button>
        <Button
          variant="outline-success"
          block
          onClick={() => sortByValue("courier")}
        >
          sort by name a-z
        </Button>
        <Button
          variant="outline-success"
          block
          onClick={() => sortByValue("-courier")}
        >
          sort by name z-a
        </Button>
      </div>
      <span className="main__responses">
        Received responses {how_many_responses}/{courier_names.length}
      </span>
      <div className="main__results">
        {Object.values(quotesMain).map((item, i) => {
          let deliveryTime = "";
          let key = i;

          if (item[0]) {
            deliveryTime = item[0].delivery_time;
            key = item[0].delivery_time;
          } //item is array state.quotes.one_day, this.state.quotes.two_days...
          //example: (3) [{…}, {…}, {…}]
          //item[0] is "one_day" or "two_days"...
          //item[1] is array with data

          return (
            <div key={key} className="main__each-day">
              <span>{deliveryTime}</span>
              {item.map(result => {
                //result is object this.state.quotes.one_day[index], this.state.quotes.two_days[index]...
                //example: {id: 1, price: "20.11", courier: "DPD", data: Array(3)}.
                return <SingleCourier key={result.courier} result={result} />;
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
};

const getUniqueKeyId = async () => {
  return fetch("/api/key", {
    method: "GET"
  })
    .then(response => response.json())
    .then(bodyKey => {
      return Number(bodyKey[0].max) + 1;
    })
    .catch(error => {
      console.log("Server failed to return data: " + error);
    });
};

const getDataFromDatabase = async (data, unique_search_id) => {
  // console.log(Object.values(data));
  // console.log(data, unique_search_id);
  const array = Object.values(data);
  const courierName = Object.keys(data);

  let company_name = "";
  array[0].forEach(resSingleCourier => {
    company_name = resSingleCourier.company_name;
    let deliveryTime = "";
    if (resSingleCourier.deliveryTime === "Fast") {
      deliveryTime = "one_day";
    } else if (resSingleCourier.deliveryTime === "Medium") {
      deliveryTime = "two_days";
    } else if (resSingleCourier.deliveryTime === "Slow") {
      deliveryTime = "over_two_days";
    }
    const currentTime = new Date().toLocaleString();
    //insering into database results from resSingleCourier
    fetch("/api/insertToDatabase", {
      method: "POST",
      body: JSON.stringify({
        unique_search_id: unique_search_id,
        company_name: resSingleCourier.company_name,
        courier_name: resSingleCourier.courier_name,
        courier_delivery_time: deliveryTime,
        service_name: resSingleCourier.service_name,
        price: resSingleCourier.price,
        currentTime: currentTime
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response_1 => response_1.json())
      .then(bodyCourierName_1 => {
        if (bodyCourierName_1) {
          // return bodyCourierName_1;
          // resultsBodySearch.push(bodySearch);
        } else {
          console.log("no body after respond /api/insertToDatabase");
        }
      })
      .catch(error => {
        console.log("Server failed to return data: " + error);
      });
  });
  //get a results from database
  //I might to do in previous fetch request but sometimes I getting the same
  //courier service so when I getting data back from database I use "SELECT DISTINCT"
  //to not get doubled data
  return fetch("/api/results", {
    method: "POST",
    body: JSON.stringify({
      unique_search_id: unique_search_id,
      company_name: company_name
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response_2 => response_2.json())
    .then(bodyResult => {
      if (bodyResult) {
        const output = bodyResult.map((res, i) => {
          const copyResPrice = res.price.slice();
          const toNumber = Number(copyResPrice);
          res.price = toNumber;
          return Object.assign({}, res, { id: i });
        });

        // console.log({ [courierName]: bodyResult });
        // setbodyResultt({ [courierName]: bodyResult });
        //I always overirde with new data in bodyResult
        //so in componentDidUpdate I checking if new data arrived
        //and then push into this.state.quotes sorted data
        return { [courierName]: output };
      } else {
        console.log("no body after respond /api/results");
      }
    })
    .catch(error_1 => {
      console.log("Server failed to return data: " + error_1);
    });
};

// if (bodyCourierName) {
//   // console.log(bodyCourierName);
//   // preparation data to be instered into database
//   let company_name = "";
//   bodyCourierName.forEach(resSingleCourier => {
//     company_name = resSingleCourier.company_name;
//     let deliveryTime = "";
//     if (resSingleCourier.deliveryTime === "Fast") {
//       deliveryTime = "one_day";
//     } else if (resSingleCourier.deliveryTime === "Medium") {
//       deliveryTime = "two_days";
//     } else if (resSingleCourier.deliveryTime === "Slow") {
//       deliveryTime = "over_two_days";
//     }
//     const currentTime = new Date().toLocaleString();
//     //insering into database results from resSingleCourier
//     fetch("/api/insertToDatabase", {
//       method: "POST",
//       body: JSON.stringify({
//         unique_search_id: unique_search_id,
//         company_name: resSingleCourier.company_name,
//         courier_name: resSingleCourier.courier_name,
//         courier_delivery_time: deliveryTime,
//         service_name: resSingleCourier.service_name,
//         price: resSingleCourier.price,
//         currentTime: currentTime
//       }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(response_1 => response_1.json())
//       .then(bodyCourierName_1 => {
//         if (bodyCourierName_1) {
//           return bodyCourierName_1;
//           // resultsBodySearch.push(bodySearch);
//         } else {
//           console.log("no body after respond /api/insertToDatabase");
//         }
//       })
//       .catch(error => {
//         console.log("Server failed to return data: " + error);
//       });
//   });
//   //get a results from database
//   //I might to do in previous fetch request but sometimes I getting the same
//   //courier service so when I getting data back from database I use "SELECT DISTINCT"
//   //to not get doubled data
//   return fetch("/api/results", {
//     method: "POST",
//     body: JSON.stringify({
//       unique_search_id: unique_search_id,
//       company_name: company_name
//     }),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(response_2 => response_2.json())
//     .then(bodyResult => {
//       if (bodyResult) {
//         bodyResult.forEach(res => {
//           const copyResPrice = res.price.slice();
//           const toNumber = Number(copyResPrice);
//           res.price = toNumber;
//         });
//         setbodyResultt({ [courierName]: bodyResult });
//         //I always overirde with new data in bodyResult
//         //so in componentDidUpdate I checking if new data arrived
//         //and then push into this.state.quotes sorted data
//         return { [courierName]: bodyResult };
//       } else {
//         console.log("no body after respond /api/results");
//       }
//     })
//     .catch(error_1 => {
//       console.log("Server failed to return data: " + error_1);
//     });
// }

export default Main;
