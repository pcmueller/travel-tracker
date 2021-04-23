import Trip from './Trip.js';

class Traveler {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.type = user.type;
    this.trips = [];
  }

  populateTrips(allTrips) {
    allTrips.forEach(trip => {
      if (trip.userID === this.id) {
        this.trips.push(new Trip(trip));
      }
    });
    this.sortTripsByDate();
  }

  getCurrentTrips() {

  }

  getUpcomingTrips() {

  }

  getPastTrips() {

  }

  getPendingTrips() {
    return this.trips.filter(trip => {
      return trip.status === 'pending';
    });
  }

  sortTripsByDate() {
    this.trips.sort((a, b) => {
      return a.date.localeCompare(b.date);
    });
  }

  calculateAnnualSpending() {
    
  }
}

export default Traveler;