const domUpdates = {

  displayUserHome() {
    const loginPage = document.querySelector('#loginPage');
    const userPage = document.querySelector('#userPage');
    loginPage.classList.add('hidden');
    userPage.classList.remove('hidden');
  },

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

  displayGridTitle(titleText) {
    const gridTitle = document.querySelector('#gridTitle');
    gridTitle.innerText = titleText;
  },

  displayTripCards(userTrips, allDestinations) {
    let cardGrid = document.querySelector('#cardGrid');
    cardGrid.innerHTML = '';

    userTrips.sort((a, b) => {
      return b.date.localeCompare(a.date);
    });

    if (userTrips.length > 0) {
      userTrips.forEach(card => {
        let location = allDestinations.find(place => {
          return place.id === card.destinationID;
        });
        let tripCard = 
          `<article class="box">
            <section class="box-top" style="background-image: url(${location.image})">
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
    } else {
      cardGrid.innerHTML = `<article class="no-match">No matching trips!</article>`;
    }
  },

  displayTripCostModal(tripCost) {
    let modal = document.querySelector('#modal');

    modal.innerHTML = `
      <div class="cost-modal">
        <span class="close" id="modalClose">&times;</span>
        <label for="trip-cost">Estimated trip cost:</label>
          <p class="trip-cost">$${tripCost}</p>
      </div>`;
    modal.style.display = "block";

    const closeButton = document.querySelector('#modalClose');
    closeButton.addEventListener('click', this.closeModal);
  },

  displayBookingMessage(newTrip, allDestinations) {
    let modal = document.querySelector('#modal');
    let destination = this.getDestinationName(newTrip.destinationID, allDestinations);
    let message = `Congratulations, you've booked a trip to ${destination} for $${newTrip.cost}!`;

    modal.innerHTML = `
      <div class="booking-modal">
        <span class="close" id="modalClose">&times;</span>
          <p class="booking-message">${message}</p>
      </div>`;
    modal.style.display = "block";

    const closeButton = document.querySelector('#modalClose');
    closeButton.addEventListener('click', this.closeModal);
  },

  getDestinationName(id, allDestinations) {
    let location = allDestinations.find(place => {
      if (place.id === id) {
        return place;
      }
    });
    return location.destination;
  },

  displayErrorMessage(errorMessage) {
    const errorModal = document.querySelector('#errorModal');
    const messageText = document.querySelector('#messageText');

    messageText.innerText = errorMessage;
    errorModal.classList.remove('hidden');
    modal.style.display = "block";

    const closeButton = document.querySelector('#modalClose');
    closeButton.addEventListener('click', this.closeModal);
  },

  closeModal() {
    let modal = document.querySelector('#modal');
    modal.style.display = "none";
  },

}

export default domUpdates;