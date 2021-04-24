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

  getTripDuration() {
    let start = new Date(this.date);
    let tripEnd = new Date(this.date).setDate(new Date(this.date).getDate() + this.duration);
  }
}

export default Trip;