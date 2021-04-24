import { expect } from 'chai';

import Trip from '../src/Trip.js';
import tripsData from './test-data/trips-data';

describe('Trip', function() {
  let trip;

  beforeEach(function() {
    trip = new Trip(tripsData[0]);
  })

  it('is a function', function() {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', function() {
    expect(trip).to.be.an.instanceof(Trip);
  });

  it('should initialize with an id', function() {
    expect(trip.id).to.eq(1);
  });

  it('should initialize with a userID', function() {
    expect(trip.userID).to.eq(44);
  });
  
  it('should initialize with a destination ID', function() {
    expect(trip.destinationID).to.eq(49);
  });

  it('should initialize with a travelers property', function() {
    expect(trip.travelers).to.eq(1);
  });

  it('should initialize with a date', function() {
    expect(trip.date).to.eq('2019/09/16');
  });

  it('should initialize with a duration', function() {
    expect(trip.duration).to.eq(8);
  });

  it('should initialize with a status', function() {
    expect(trip.status).to.eq('pending');
  });  

  it('should initialize with a suggested activities property', function() {
    expect(trip.suggestedActivities).to.deep.eq([]);
  });
  
});