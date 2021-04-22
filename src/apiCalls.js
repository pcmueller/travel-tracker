const apiCalls = {

  getAllData() {
    const promises = [ getAllTravelers(), getAllDestinations(), getAllTrips() ];
    return Promise.all(promises)
    .then(values => {
      return values;
    })
    .catch(error => console.log(`${error}: Error retrieving all data`));
  },

  fetchData(url) {
    return fetch(url, requestOptions)
      .then(resp => resp.json()
      .then(result => console.log(result))
      .catch(error => `${error}: Error retrieving data from ${url}`));
  },

  getAllTravelers() {
    return fetchData("http://localhost:3001/api/v1/travelers");
  },

  getAllDestinations() {
    return fetchData("http://localhost:3001/api/v1/destinations");
  },

  getAllTrips() {
    return fetchData("http://localhost:3001/api/v1/trips");
  },
  
}

export default apiCalls;