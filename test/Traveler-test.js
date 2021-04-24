import { expect } from 'chai';

import Traveler from '../src/Traveler.js';
import travelerData from './test-data/travelers-data';
import tripsData from './test-data/trips-data';

describe('Traveler', function() {
  let traveler;

  beforeEach(function() {
    traveler = new Traveler(travelerData[0]);
  })

  it('is a function', function() {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', function() {
    expect(traveler).to.be.an.instanceof(Traveler);
  });

  it('should initialize with an id', function() {
    expect(traveler.id).to.eq(1);
  });

  it('should initialize with an name', function() {
    expect(traveler.name).to.eq('Ham Leadbeater');
  });
  
  it('should initialize with a type', function() {
    expect(traveler.type).to.eq(undefined);
  });

  it('should initialize with an empty trips array', function() {
    expect(traveler.trips).to.deep.eq([]);
  });

  it('should be able to populate trips array', function() {
    traveler.populateTrips(tripsData);

    expect(traveler.trips).to.deep.eq([ 
      {
        id: 117,
        userID: 1,
        destinationID: 28,
        travelers: 3,
        date: '2021/01/09',
        duration: 15,
        suggestedActivities: [],
        status: 'approved'
      }
    ]);
  });
  
});