class Trip {
  constructor(tripDatum) {
    this.id = tripDatum.id;
    this.userID = tripDatum.userID;
    this.destinationID = tripDatum.destinationID;
    this.travelers = tripDatum.travelers;
    this.date = tripDatum.date;
    this.duration = tripDatum.duration;
    this.suggestedActivities = tripDatum.suggestedActivities;
    this.status = tripDatum.status;
    this.cost = null;
    this.startDate = null;
    this.endDate = null;
  }

  calculateTripCost(allDestinations) {
    let destination = allDestinations.find(place => {
      return place.id === this.destinationID;
    });
    let totalLodging = destination.estimatedLodgingCostPerDay * this.duration;
    let totalAirfare = destination.estimatedFlightCostPerPerson * this.travelers;
    this.cost = (totalLodging + totalAirfare) * 1.10;
    
    return this.cost;
  }

  getTripDates() {
    let start = new Date(this.date);
    let end = new Date(this.date).setDate(new Date(this.date).getDate() + this.duration);
    this.startDate = start.getTime();
    this.endDate = end;
  }
}

export default Trip;