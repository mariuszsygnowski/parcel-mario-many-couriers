const Sorting = (quote, singleResult) => {
  //so if I new data will be overwritten in this.sate.bodyResult then
  //code below is using to push new data (and sorted data) into this.state.quotes

  //   this.setState({ how_many_responses: this.state.how_many_responses + 1 });
  //   //New data is always as first value so it is [0]
  //   let bodyResult = Object.values(this.state.bodyResult)[0];
  let thisStateQuotesOne_day = [...quote.one_day];
  let thisStateQuotesTwo_days = [...quote.two_days];
  let thisStateQuotesOver_two_days = [...quote.over_two_days];
  let output = {};

  singleResult.forEach(resBodyResult => {
    if (resBodyResult.courier_delivery_time === "one_day") {
      //looking if courier name exist in array this.state.quotes.one_day

      const dataOneDay = thisStateQuotesOne_day.find(e => {
        return e.courier === resBodyResult.courier_name;
      });

      //if exist then I just add new data
      if (dataOneDay) {
        dataOneDay.data.forEach(resDataOneDaydata => {
          const objectDataOneDay_data = dataOneDay.data.find(
            res_dataOneDay_find => {
              return (
                res_dataOneDay_find.service_name === resBodyResult.service_name
              );
            }
          );

          if (objectDataOneDay_data) {
            if (
              resDataOneDaydata.service_name ===
              objectDataOneDay_data.service_name
            ) {
              resDataOneDaydata.entries.push({
                id: resBodyResult.id,
                company_name: resBodyResult.company_name,
                price: resBodyResult.price
              });
            }
          } else {
            dataOneDay.data.push({
              service_name: resBodyResult.service_name,
              min_price_service_name: resBodyResult.price,
              entries: [
                {
                  id: resBodyResult.id,
                  company_name: resBodyResult.company_name,
                  price: resBodyResult.price
                }
              ]
            });
          }
        });
      } else {
        //if not then I create object plus add first entry into data
        thisStateQuotesOne_day.push({
          delivery_time: "One day couriers:",
          min_price_in_courier: resBodyResult.price,
          courier: resBodyResult.courier_name,

          data: [
            {
              service_name: resBodyResult.service_name,
              min_price_service_name: resBodyResult.price,
              entries: [
                {
                  id: resBodyResult.id,
                  company_name: resBodyResult.company_name,
                  price: resBodyResult.price
                }
              ]
            }
          ]
        });
      }
    } else if (
      //I need to repeat for each delivery time
      //I can crate a array with arr=["one_day", "two_days", "over_two_days"]
      //and itarate over this array, but when I pass into function respond
      //I got an error, I tried to do new Function but still there is some issues
      //later I will do something more universal
      resBodyResult.courier_delivery_time === "two_days"
    ) {
      const dataTwoDays = thisStateQuotesTwo_days.find(e => {
        return e.courier === resBodyResult.courier_name;
      });

      //if exist then I just add new data
      if (dataTwoDays) {
        dataTwoDays.data.forEach(resDataTwoDaysdata => {
          const objectdataTwoDays_data = dataTwoDays.data.find(
            res_dataTwoDays_find => {
              return (
                res_dataTwoDays_find.service_name === resBodyResult.service_name
              );
            }
          );

          if (objectdataTwoDays_data) {
            if (
              resDataTwoDaysdata.service_name ===
              objectdataTwoDays_data.service_name
            ) {
              resDataTwoDaysdata.entries.push({
                id: resBodyResult.id,
                company_name: resBodyResult.company_name,
                price: resBodyResult.price
              });
            }
          } else {
            dataTwoDays.data.push({
              service_name: resBodyResult.service_name,
              min_price_service_name: resBodyResult.price,
              entries: [
                {
                  id: resBodyResult.id,
                  company_name: resBodyResult.company_name,
                  price: resBodyResult.price
                }
              ]
            });
          }
        });
      } else {
        //if not then I create object plus add first entry into data
        thisStateQuotesTwo_days.push({
          delivery_time: "Two days couriers:",
          min_price_in_courier: resBodyResult.price,
          courier: resBodyResult.courier_name,
          data: [
            {
              service_name: resBodyResult.service_name,
              min_price_service_name: resBodyResult.price,
              entries: [
                {
                  id: resBodyResult.id,
                  company_name: resBodyResult.company_name,
                  price: resBodyResult.price
                }
              ]
            }
          ]
        });
      }
    } else if (resBodyResult.courier_delivery_time === "over_two_days") {
      {
        const dataOverTwoDays = thisStateQuotesOver_two_days.find(e => {
          return e.courier === resBodyResult.courier_name;
        });

        //if exist then I just add new data
        if (dataOverTwoDays) {
          dataOverTwoDays.data.forEach(resDataOverTwoDaysdata => {
            const objectdataOverTwoDays_data = dataOverTwoDays.data.find(
              res_dataOverTwoDays_find => {
                return (
                  res_dataOverTwoDays_find.service_name ===
                  resBodyResult.service_name
                );
              }
            );

            if (objectdataOverTwoDays_data) {
              if (
                resDataOverTwoDaysdata.service_name ===
                objectdataOverTwoDays_data.service_name
              ) {
                resDataOverTwoDaysdata.entries.push({
                  id: resBodyResult.id,
                  company_name: resBodyResult.company_name,
                  price: resBodyResult.price
                });
              }
            } else {
              dataOverTwoDays.data.push({
                service_name: resBodyResult.service_name,
                min_price_service_name: resBodyResult.price,
                entries: [
                  {
                    id: resBodyResult.id,
                    company_name: resBodyResult.company_name,
                    price: resBodyResult.price
                  }
                ]
              });
            }
          });
        } else {
          //if not then I create object plus add first entry into data
          thisStateQuotesOver_two_days.push({
            delivery_time: "More than two days couriers:",
            min_price_in_courier: resBodyResult.price,
            courier: resBodyResult.courier_name,
            data: [
              {
                service_name: resBodyResult.service_name,
                min_price_service_name: resBodyResult.price,
                entries: [
                  {
                    id: resBodyResult.id,
                    company_name: resBodyResult.company_name,
                    price: resBodyResult.price
                  }
                ]
              }
            ]
          });
        }
      }
    }
  });

  // a = Object.assign({}, thisStateQuotesOne_day, {counter: c})
  // const oneDayArray = thisStateQuotesOne_day.map(item => {
  //   let c = 0;
  //   item.data.forEach(data => {
  //     // console.log(data);
  //     c = c + data.entries.length;
  //   });
  //   // console.log(item, c);
  //   // item.data.push(c);
  //   return Object.assign({}, item, { counter: c });
  // });
  // console.log(oneDayArray);
  output = {
    quotes: {
      one_day: thisStateQuotesOne_day,
      two_days: thisStateQuotesTwo_days,
      over_two_days: thisStateQuotesOver_two_days
    }
  };
  // console.log(output);

  return output;
  //     //to make sure that
  //     this.setState(
  //       {
  //         quotes: {
  //           one_day: thisStateQuotesOne_day,
  //           two_days: thisStateQuotesTwo_days,
  //           over_two_days: thisStateQuotesOver_two_days
  //         }
  //       },
  //       //I need to do after when I set new data into quotes as
  //       //this.sortingBy() always take a new data from this.state.quotes
  //       () => {
  //         //by default I sorting by price low to high
  //         this.sortingBy("min_price_in_courier");
  //         // console.log(this.state.quotes);

  //         //if received all responses then modal will dissapear (after 0.5s)
  //         if (this.state.how_many_responses === this.state.courierNames.length) {
  //           setTimeout(() => {
  //             this.setState({
  //               modal: false
  //             });
  //           }, 500);
  //         }
  //       }
  //     );
  //   });
};

export default Sorting;
