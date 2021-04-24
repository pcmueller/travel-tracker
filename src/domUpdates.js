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

}

export default domUpdates;