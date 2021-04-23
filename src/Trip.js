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
  }

  calculateTripCost() {

  }

  getTripDuration() {

  }
}

export default Trip;