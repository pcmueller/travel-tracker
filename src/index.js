// IMPORTS

import './css/base.scss';

import './images/turing-logo.png'
import './images/arrow.png'
import './images/tt-logo-no-text.png'

import domUpdates from './domUpdates.js';
import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';
import destinations from '../test/test-data/destination-data';

// GLOBAL VARIABLES & QUERY SELECTORS

let currentDate = "2021/01/09";

// user data
let userID, currentTraveler, totalCosts;

// API data
let allDestinations, allTravelers, allTrips;

const logoutBtn = document.querySelector('#logoutBtn');
const navButtons = document.querySelectorAll('#navBtn');
const destinationSelect = document.querySelector('#destinationDrop');
const startDateSelect = document.querySelector('#startDateDrop');
const durationInput = document.querySelector('#durationInput');
const travelersInput = document.querySelector('#numTravelersInput');
const costButton = document.querySelector('#costBtn');
const bookButton = document.querySelector('#bookBtn');

// EVENT LISTENERS

window.addEventListener('load', retrieveData);
navButtons.forEach(button => button.addEventListener('click', function(event) {
  populateCardGrid(event);
}));
costButton.addEventListener('click', recieveBookingInputs);
bookButton.addEventListener('click', bookNewTrip);

// HANDLER FUNCTIONS

function retrieveData() {
  apiCalls.getAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      createUser();
    })
}

function createUser() {
  userID = getRandomIndex(allTravelers);
  currentTraveler = new Traveler(allTravelers[userID]);
  currentTraveler.populateTrips(allTrips);
  calculateTravelCosts();
  displayUserData();
}

function populateCardGrid(e) {
  let clickedClass = e.target.className;
  let userData, titleText;

  switch(clickedClass) {
    case 'current-trips':
      titleText = 'Current Trips';
      userData = currentTraveler.getCurrentTrips(currentDate);
      break;
    case 'upcoming-trips':
      titleText = 'Upcoming Trips';
      userData = currentTraveler.getUpcomingTrips(currentDate);
      break;
    case 'previous-trips':
      titleText = 'Previous Trips';
      userData = currentTraveler.getPreviousTrips(currentDate);
      break;
    case 'pending-trips':
      titleText = 'Pending Trips';
      userData = currentTraveler.getPendingTrips();
      break;
  }

  domUpdates.displayGridTitle(titleText);
  domUpdates.displayTripCards(userData, allDestinations);
}

function bookNewTrip() {
  let newTripObject = recieveBookingInputs();
  apiCalls.postNewTripRequest(newTripObject);
}

// HELPER & UTIL FUNCTIONS

function displayUserData() {
  domUpdates.welcomeUser(currentTraveler);
  domUpdates.buildBookingSection(allDestinations);
  domUpdates.displayTravelCosts(totalCosts);
  domUpdates.displayTripCards(currentTraveler.trips, allDestinations);
}

function getRandomIndex(array) {
  const index = Math.floor(Math.random() * array.length);
  return index;
}

function calculateTravelCosts() {
  totalCosts = currentTraveler.trips.reduce((total, trip) => {
    total += trip.calculateTripCost(allDestinations);
    return Math.round(total);
  }, 0);
};

function getNextTripID() {
  allTrips.sort((a, b) => {
    return b.id - a.id;
  });
  let [ lastEntry ] = allTrips;

  return lastEntry.id + 1;
};

function recieveBookingInputs() {
  let destinationID = parseInt(destinationSelect.value);
  let startDate = parseInt(startDateSelect.value);
  let duration = parseInt(durationInput.value);
  let travelers = parseInt(travelersInput.value);
  let tripObject = {
    "id": getNextTripID(),
    "userID": currentTraveler.id,
    "destinationID": destinationID,
    "travelers": travelers,
    "date": startDate,
    "duration": duration,
    "status": "pending",
    "suggestedActivities": [],
  };
  return tripObject;
}