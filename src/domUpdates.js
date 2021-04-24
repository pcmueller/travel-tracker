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

    let destinationsHTML = allDestinations.reduce((acc, place) => {
      acc += `<option value="${place.id}">${place.destination}</option>`;
      return acc;
    }, '');

    menu.insertAdjacentHTML('beforeend', destinationsHTML);
  }


}

export default domUpdates;