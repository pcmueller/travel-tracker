// IMPORTS

import './css/base.scss';

import './images/tt-logo.png';
import './images/tt-logo-no-text.png';
import './images/thai-beach.png';
import './images/arrow.png';

import domUpdates from './domUpdates.js';
import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';

// GLOBAL VARIABLES & QUERY SELECTORS

let currentDate = "2021/01/09";

// user data
let userID, currentTraveler;

// API datasets
let allDestinations, allTravelers, allTrips;

const homeButton = document.querySelector('#logo');
const navButtons = document.querySelectorAll('#navBtn');
const costButton = document.querySelector('#costBtn');
const bookButton = document.querySelector('#bookBtn');
const logoutButton = document.querySelector('#logoutBtn');

const destinationSelect = document.querySelector('#destinationDrop');
const startDateSelect = document.querySelector('#startDateDrop');
const durationInput = document.querySelector('#durationInput');
const travelersInput = document.querySelector('#numTravelersInput');

// EVENT LISTENERS

window.addEventListener('load', retrieveData);
homeButton.addEventListener('click', retrieveData);
navButtons.forEach(button => button.addEventListener('click', function(event) {
  populateCardGrid(event);
}));
costButton.addEventListener('click', estimateTripCost);
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
  // userID = getRandomIndex(allTravelers);
  userID = 45;
  currentTraveler = new Traveler(allTravelers[userID - 1]);
  currentTraveler.populateTrips(allTrips);
  currentTraveler.calculateAnnualSpending(currentDate, allDestinations);
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

function estimateTripCost() {
  let newTripRequest = receiveBookingInputs();
  let newTripInstance = new Trip(newTripRequest);
  newTripInstance.calculateTripCost(allDestinations);
  domUpdates.displayTripCostModal(newTripInstance.cost);
}

function bookNewTrip() {
  let newTripRequest = receiveBookingInputs();
  apiCalls.postNewTripRequest(newTripRequest)
   .then(response => {
      retrieveData()

      let newTripRequest = receiveBookingInputs();
      let newTripInstance = new Trip(newTripRequest);
      newTripInstance.calculateTripCost(allDestinations);

      domUpdates.displayGridTitle('My Trips');
      domUpdates.displayBookingMessage(newTripInstance, allDestinations);
    });
}

// HELPER & UTIL FUNCTIONS

function displayUserData() {
  domUpdates.welcomeUser(currentTraveler);
  domUpdates.buildBookingSection(allDestinations);
  domUpdates.displayTravelCosts(currentTraveler.annualCosts);
  domUpdates.displayTripCards(currentTraveler.trips, allDestinations);
}

function getRandomIndex(array) {
  const index = Math.floor(Math.random() * array.length);
  return index;
}

function getNextTripID() {
  allTrips.sort((a, b) => {
    return b.id - a.id;
  });
  let [ lastEntry ] = allTrips;

  return lastEntry.id + 1;
};

function receiveBookingInputs() {
  let destinationID = parseInt(destinationSelect.value);
  let duration = parseInt(durationInput.value);
  let travelers = parseInt(travelersInput.value);
  let startDate = formatSelectedDate(startDateSelect.value);
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

function formatSelectedDate(dateInput) {
  let splitDate = dateInput.split('-');
  let formattedDate = splitDate.join('/');

  return formattedDate;
}