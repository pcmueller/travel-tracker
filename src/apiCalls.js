const apiCalls = {

  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(resp => 
        resp.json()
      )
      .then(allTravelers => {
        return allTravelers.travelers
      })
      // .then(result => console.log(result))
      .catch(error => console.log(`${error}: Error retrieving data from ${url}`));
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(resp => 
        resp.json()
      )
      .then(allTrips => {
        return allTrips.trips
      })
      // .then(result => console.log(result))
      .catch(error => console.log(`${error}: Error retrieving data from ${url}`));
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(resp => 
        resp.json()
      )
      .then(allDestinations => {
        return allDestinations.destinations
      })
      // .then(result => console.log(result))
      .catch(error => console.log(`${error}: Error retrieving data from ${url}`));
  },

  getAllData() {
    let promises = [apiCalls.getAllTravelers(), apiCalls.getAllTrips(), apiCalls.getAllDestinations()];
    return Promise.all(promises)
    .then(values => {
      return values;
    })
    .catch(error => console.log(`${error}: Error retrieving all data`));
  },

}

export default apiCalls;