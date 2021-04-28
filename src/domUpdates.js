// DOM GLOBAL VARIABLES

const body = document.querySelector("body");
const modal = document.querySelector('#modal');
const loginPage = document.querySelector('#loginPage');
const userPage = document.querySelector('#userPage');

// DOM FUNCTIONS

const domUpdates = {
  togglePageView() {
    loginPage.classList.toggle('hidden');
    userPage.classList.toggle('hidden');
  },

  welcomeUser(user) {
    const welcomeName = document.querySelector('#welcomeName');
    const [ firstName ] = user.name.split(' ');
    welcomeName.innerText = `${firstName}!`;
  },

  buildBookingSection(allDestinations) {
    let menu = document.querySelector("#destinationMenu");

    allDestinations.sort((a, b) => {
      return a.destination.localeCompare(b.destination);
    });

    allDestinations.forEach(place => {
      menu.insertAdjacentHTML('beforeend', `<option value="${place.id}">${place.destination}</option>`);
    })
  },

  displayTravelCosts(totalCost) {
    const totalDisplay = document.querySelector('#totalAmt');
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
        let date = formatDate(card.date);
        let tripCard = 
          `<article class="card">
            <section class="card-top" aria-label="[photograph of ${location.destination}]" style="background-image: url(${location.image})">
              <div class="card-top-upper">
                <img class="arrow" alt="inactive arrow icon" src="./images/arrow.png">
              </div>
              <div class="card-top-lower-half">
                <h2 id="destination">${location.destination}</h2>
              </div>
            </section>
            <section class="card-bottom">
              <div class="trip-info">
                <h3>Start Date:</h3>
                <span class="data-small" id="startDate">${date}</span>
              </div>
              <div class="trip-info">
                <h3>Duration:</h3>
                <span class="data-small" id="duration">${card.duration} days</span>
              </div>
              <div class="trip-info">
                <h3>Travelers:</h3>
                <span class="data-small" id="travelers">${card.travelers}</span>
              </div>
              <div class="trip-info">
                <h3>Trip Status:</h3>
                <span class="data-small" id="tripStatus">${card.status}</span>
              </div>
            </section>
          </article>`;
        cardGrid.insertAdjacentHTML('beforeend', tripCard);
      });
    } else {
      cardGrid.innerHTML = `<article class="no-match">No matching trips!</article>`;
    }
  },

  // MODAL DISPLAY FUNCTIONS

  buildTripCostModal(tripCost) {
    modal.innerHTML = `
    <div tabindex=-1 class="cost-modal" id="costModal" aria-modal="true">
      <span tabindex=0 class="close" id="modalClose">&times;</span>
      <label for="trip-cost">Estimated trip cost:</label>
      <p class="trip-cost">$${tripCost}</p>
    </div>`;

    let costModal = document.querySelector('#costModal');
      
    modal.style.display = "inline";
    body.classList.toggle('noscroll');
    costModal.focus();
    addModalCloseFunctionality();
  },

  buildBookingModal(newTrip, allDestinations) {
    let destination = getDestinationName(newTrip.destinationID, allDestinations);
    let costString = newTrip.cost.toFixed(2).toString();
    let message = `Congratulations, you've booked a trip to ${destination} for $${costString}!`;

    modal.innerHTML = `
      <div tabindex=-1 class="booking-modal" id="bookingModal" aria-modal="true">
        <span tabindex=0 class="close" id="modalClose" type="button" role="button" name="close-button">&times;</span>
        <p class="booking-message">${message}</p>
      </div>`;

    let bookingModal = document.querySelector('#bookingModal');

    modal.style.display = "inline";
    body.classList.toggle('noscroll');
    bookingModal.focus();
    addModalCloseFunctionality();
  },

  buildErrorModal(errorMessage) {
    modal.innerHTML = `
      <div tabindex=-1 class="error-modal" id="errorModal" aria-modal="true">
        <span tabindex=0 class="close" id="modalClose">&times;</span>
        <p id="messageText">${errorMessage}</p>
      </div>`;

    let errorModal = document.querySelector('#errorModal');

    modal.style.display = "inline";
    body.classList.toggle('noscroll');
    errorModal.focus();
    addModalCloseFunctionality();
  }
}

// HELPER FUNCTIONS

function getDestinationName(id, allDestinations) {
  let location = allDestinations.find(place => {
    if (place.id === id) {
      return place;
    }
  });
  return location.destination;
}

function formatDate(date) {
  let split = date.split('/');
  let newDate = `${split[1]}/${split[2]}/${split[0]}`;

  return newDate;
}

function checkKeyPressed(e) {
  if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Escape') {
    closeModal();
  }
}

function addModalCloseFunctionality() {
  const closeButton = document.querySelector('#modalClose');
  closeButton.addEventListener('click', closeModal);
  closeButton.addEventListener('keydown', function(event) {
    checkKeyPressed(event);
  });
}

function closeModal() {
  let modal = document.querySelector('#modal');
  let body = document.querySelector('body');

  modal.style.display = 'none';
  body.classList.toggle('noscroll');
}

export default domUpdates;