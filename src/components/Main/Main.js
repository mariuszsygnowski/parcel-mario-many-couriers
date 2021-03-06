import React, {useState, useEffect} from 'react';

import ParcelValuesContainer from '../../containers/Main/ParcelValuesContainer';
import WelcomeScreenContainer from '../../containers/Main/WelcomeScreenContainer';
import Results from './Results/Results';
import Sorting from './Functions/Sorting';
import SortingBy from './Functions/SortingBy';
import {Modal, ProgressBar} from 'react-bootstrap';

import './main.scss';

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
  setModal,
  initial_state_main,
  box_values
}) => {
  const [uniqueApiKey, setUniqueApiKey] = useState();
  const [didReceivedNewData, setDidReceivedNewData] = useState(false);

  useEffect(() => {
    if (data_from_all_couriers.length > 0) {
      addResponseCount();
    }
    if (data_from_all_couriers.length === courier_names.length) {
      setResults(data_from_all_couriers);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data_from_all_couriers]);

  const dataCourier = async () => {
    setInitialState();
    setModal(true);
    setDidReceivedNewData(false);
    const uniqueKey = await getUniqueKeyId();
    setUniqueApiKey(uniqueKey);
    // fetch_data("/api/p2g");
    // fetch_data("/api/parcelmonkey");
    // fetch_data("/api/p4d");
    for (let courier of courier_names) {
      const url = `/api/${courier}`;
      fetch_data(url, box_values);
    }
  };

  const setResults = async data_from_all_couriers => {
    data_from_all_couriers.forEach(async data => {
      await setNewData(data, uniqueApiKey);
    });
    const unsorted_data_with_all_couriers = await get_data_from_database_with_all_couriers(uniqueApiKey);
    const sorted_data_with_all_couriers = Sorting(initial_state_main.quotes, unsorted_data_with_all_couriers);
    if (sorted_data_with_all_couriers) {
      setNewQuotes(sorted_data_with_all_couriers);
      if (how_many_responses === courier_names.length - 1) {
        setTimeout(() => {
          setModal(false);
        }, 500);
      }
      //if received any respond then changeResultsToOffOrOn will change
      if (unsorted_data_with_all_couriers.length !== 0) {
        setDidReceivedNewData(true);
        setTimeout(() => {}, 2000);
      }
    }
  };

  const setNewData = async (data, uniqueApiKey) => {
    const data_from_database = await getDataFromDatabase(data, uniqueApiKey);
    const single_result = Object.values(data_from_database);
    const response_from_sorting = Sorting(initial_state_main.quotes, single_result);
    if (response_from_sorting) {
      const data_from_sorted_by = SortingBy('min_price_in_courier', response_from_sorting.quotes);
      if (data_from_sorted_by) {
        return data_from_sorted_by;
      }
    }
  };

  const sortByValue = sort_by => {
    const newQuotes = SortingBy(sort_by, quotes);
    setNewQuotes({quotes: newQuotes});
  };

  return (
    <main className='main'>
      <Modal show={modal}>
        <Modal.Header>
          <Modal.Title className={'main__modal__title'}>Searching...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar variant='success' min={0} max={courier_names.length} now={how_many_responses} />
          <p className={'main__modal__progressBar'}>
            Received responses: {how_many_responses}/{courier_names.length}
          </p>
        </Modal.Body>
      </Modal>
      <WelcomeScreenContainer />

      <ParcelValuesContainer dataCourier={dataCourier} />

      {didReceivedNewData ? <Results quotes={quotes} sortByValue={sortByValue} /> : null}
    </main>
  );
};

const get_data_from_database_with_all_couriers = async unique_search_id => {
  return fetch('/api/all_results', {
    method: 'POST',
    body: JSON.stringify({
      unique_search_id: unique_search_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response_2 => response_2.json())
    .then(bodyResult => {
      if (bodyResult) {
        const output = bodyResult.map((res, i) => {
          const copyResPrice = res.price.slice();
          const toNumber = Number(copyResPrice);
          res.price = toNumber;
          return Object.assign({}, res, {id: i});
        });

        //I always override with new data in bodyResult
        //so in componentDidUpdate I checking if new data arrived
        //and then push into this.state.quotes sorted data
        return output;
      } else {
        console.log('no body after respond /api/results');
      }
    })
    .catch(error_1 => {
      console.log('Server failed to return data: ' + error_1);
    });
};

const getUniqueKeyId = async () => {
  return fetch('/api/key', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(bodyKey => {
      return Number(bodyKey[0].max) + 1;
    })
    .catch(error => {
      console.log('Server failed to return data: ' + error);
    });
};

const getDataFromDatabase = async (data, unique_search_id) => {
  const array = Object.values(data);
  const courierName = Object.keys(data);
  let company_name = '';
  array[0].forEach(resSingleCourier => {
    company_name = resSingleCourier.company_name;
    let deliveryTime = '';
    if (resSingleCourier.deliveryTime === 'Fast') {
      deliveryTime = 'one_day';
    } else if (resSingleCourier.deliveryTime === 'Medium') {
      deliveryTime = 'two_days';
    } else if (resSingleCourier.deliveryTime === 'Slow') {
      deliveryTime = 'over_two_days';
    }
    const currentTime = new Date().toLocaleString();
    //inserting into database results from resSingleCourier
    fetch('/api/insertToDatabase', {
      method: 'POST',
      body: JSON.stringify({
        unique_search_id: unique_search_id,
        company_name: resSingleCourier.company_name,
        courier_name: resSingleCourier.courier_name,
        courier_delivery_time: deliveryTime,
        service_name: resSingleCourier.service_name,
        price: resSingleCourier.price,
        currentTime: currentTime,
        url: resSingleCourier.url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response_1 => response_1.json())
      .then(bodyCourierName_1 => {
        if (bodyCourierName_1) {
        } else {
          console.log('no body after respond /api/insertToDatabase');
        }
      })
      .catch(error => {
        console.log('Server failed to return data: ' + error);
      });
  });
  //get a results from database
  //I might to do in previous fetch request but sometimes I getting the same
  //courier service so when I getting data back from database I use "SELECT DISTINCT"
  //to not get doubled data
  return fetch('/api/results', {
    method: 'POST',
    body: JSON.stringify({
      unique_search_id: unique_search_id,
      company_name: company_name
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response_2 => response_2.json())
    .then(bodyResult => {
      if (bodyResult) {
        const output = bodyResult.map((res, i) => {
          const copyResPrice = res.price.slice();
          const toNumber = Number(copyResPrice);
          res.price = toNumber;
          return Object.assign({}, res, {id: i});
        });

        //I always override with new data in bodyResult
        //so in componentDidUpdate I checking if new data arrived
        //and then push into this.state.quotes sorted data
        return {[courierName]: output};
      } else {
        console.log('no body after respond /api/results');
      }
    })
    .catch(error_1 => {
      console.log('Server failed to return data: ' + error_1);
    });
};

export default Main;
