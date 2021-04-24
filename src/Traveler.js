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
    this.trips.forEach(trip => trip.getTripDates());
    this.sortTripsByDate();
  }

  getCurrentTrips(currentDate) {
    let today = new Date(currentDate).getTime();
    return this.trips.filter(trip => {
      return trip.startDate <= today && trip.endDate >= today;
    });
  }

  getUpcomingTrips(currentDate) {
    let today = new Date(currentDate).getTime();
    return this.trips.filter(trip => {
      return trip.startDate > today;
    });
  }

  getPreviousTrips(currentDate) {
    let today = new Date(currentDate).getTime();
    return this.trips.filter(trip => {
      return trip.endDate < today;
    });
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