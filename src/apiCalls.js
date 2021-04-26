const apiCalls = {

  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(resp => 
        resp.json()
      )
      .then(allTravelers => {
        return allTravelers.travelers
      })
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(resp => 
        resp.json()
      )
      .then(allTrips => {
        return allTrips.trips
      })
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(resp => 
        resp.json()
      )
      .then(allDestinations => {
        return allDestinations.destinations
      })
  },

  getAllData() {
    let promises = [apiCalls.getAllTravelers(), apiCalls.getAllTrips(), apiCalls.getAllDestinations()];
    return Promise.all(promises)
    .then(values => {
      return values;
    })
    .catch(error => console.log(`${error}: Error retrieving all data`));
  },

  postNewTripRequest(tripData) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tripData), 
      redirect: 'follow'
    })
      .then(response => {
        if (response.ok) {
          response.text()
        } else {
          throw new Error(`Sorry, we could not process your booking request.`);
        }
      })
      .then(result => console.log(result))
      .catch(error => {
        console.log(error);
        apiCalls.displayErrorMessage(error);
      });
  },
}

export default apiCalls;