const domUpdates = {

  welcomeUser(user) {
    const welcomeName = document.querySelector('#welcomeName');
    const [ firstName ] = user.name.split(' ');
    welcomeName.innerText = `${firstName}!`;
  },

  buildBookingSection(allDestinations) {
    let menu = document.querySelector("#destinationDrop");

    allDestinations.sort((a, b) => {
      return a.destination.localeCompare(b.destination);
    });

    allDestinations.forEach(place => {
      menu.insertAdjacentHTML('beforeend', `<option value="${place.id}">${place.destination}</option>`);
    })
  },

  displayTravelCosts(totalCost) {
    let totalDisplay = document.querySelector('#totalAmt');
    totalDisplay.innerText = `$${totalCost}`;
  },

  displayAllTripCards(userTrips, allDestinations) {
    let cardGrid = document.querySelector('#cardGrid');
    userTrips.sort((a, b) => {
      return b.date.localeCompare(a.date);
    });
    userTrips.forEach(card => {
      let location = allDestinations.find(place => {
        return place.id === card.destinationID;
      });
      let tripCard = 
        `<article class="box">
          <section class="box-top">
            <div class="box-top-upper">
              <img class="arrow" src="./images/arrow.png">
            </div>
            <div class="box-top-lower">
              <p id="destination">${location.destination}</p>
            </div>
          </section>
          <section class="box-bottom">
            <div class="travel-info">
              <label for=startDate>Start Date:
                <p class="data-small" id="startDate">${card.date}</p>
              </label>
            </div>
            <div class="travel-info">
              <label for=duration>Duration of Stay:
                <p class="data-small" id="duration">${card.duration}</p>
              </label>
            </div>
            <div class="travel-info">
              <label for=travelers>Travelers: 
                <p class="data-small" id="travelers">${card.travelers}</p>
              </label>
            </div>
            <div class="travel-info">
              <label for=travelers>Trip Status: 
                <p class="data-small" id="tripStatus">${card.status}</p>
              </label>
            </div>
          </section>
        </article>`;
      cardGrid.insertAdjacentHTML('beforeend', tripCard);
    });
  },

}

export default domUpdates;