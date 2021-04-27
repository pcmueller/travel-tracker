// IMPORTS

import './css/base.scss';

import './images/tt-logo.png';
import './images/tt-logo-no-text.png';
import './images/thai-beach.png';
import './images/arrow.png';

import apiCalls from './apiCalls.js';
import domUpdates from './domUpdates.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';

// GLOBAL VARIABLES

let currentDate = "2020/01/01";

let user, currentTraveler;

let allDestinations, allTravelers, allTrips;

// QUERY SELECTORS

// login
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#loginBtn');

// navbar
const navButtons = document.querySelectorAll('.nav-btn');
const homeButton = document.querySelector('#logo');
const costButton = document.querySelector('#costBtn');
const bookButton = document.querySelector('#bookBtn');
const logoutButton = document.querySelector('#logoutBtn');

// booking
const destinationSelect = document.querySelector('#destinationMenu');
const startDateSelect = document.querySelector('#startDateMenu');
const durationInput = document.querySelector('#durationInput');
const travelersInput = document.querySelector('#travelersInput');

// EVENT LISTENERS

window.addEventListener('load', retrieveAllData);
loginButton.addEventListener('click', function(event) {
  retrieveLoginInfo(event);;
});
navButtons.forEach(button => button.addEventListener('click', function(event) {
  populateCardGrid(event);
}));
homeButton.addEventListener('click', displayUserData);
costButton.addEventListener('click', estimateTripCost);
bookButton.addEventListener('click', bookNewTrip);
logoutButton.addEventListener('click', logoutUser);

// HANDLER FUNCTIONS

function retrieveAllData() {
  apiCalls.getAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      if (user) {
        createUser(user);
        displayUserData();
      }
    })
}

function retrieveLoginInfo(event) {
  event.preventDefault();

  user = evaluateUsernameInput(usernameInput.value);

  if (passwordInput.value === '0' && user) {
    createUser();
    displayUserData();
    domUpdates.togglePageView();
  } else {
    domUpdates.buildErrorModal('Sorry, login info is incorrect.');
  }
}

function createUser() {
  currentTraveler = new Traveler(user);
  currentTraveler.populateTrips(allTrips);
  currentTraveler.calculateAnnualSpending(currentDate, allDestinations);
}

function displayUserData() {
  domUpdates.welcomeUser(currentTraveler);
  domUpdates.buildBookingSection(allDestinations);
  domUpdates.displayTravelCosts(currentTraveler.annualCosts);
  domUpdates.displayGridTitle('My Trips');
  domUpdates.displayTripCards(currentTraveler.trips, allDestinations);
}

function populateCardGrid(e) {
  let clickedID = e.target.id;
  let userData, titleText;

  switch(clickedID) {
    case 'currentTripsButton':
      titleText = 'Current Trips';
      userData = currentTraveler.getCurrentTrips(currentDate);
      break;
    case 'upcomingTripsButton':
      titleText = 'Upcoming Trips';
      userData = currentTraveler.getUpcomingTrips(currentDate);
      break;
    case 'previousTripsButton':
      titleText = 'Previous Trips';
      userData = currentTraveler.getPreviousTrips(currentDate);
      break;
    case 'pendingTripsButton':
      titleText = 'Pending Trips';
      userData = currentTraveler.getPendingTrips();
      break;
  }
  domUpdates.displayGridTitle(titleText);
  domUpdates.displayTripCards(userData, allDestinations);
}

function estimateTripCost() {
  let newTripData = receiveBookingInputs();
  let newTripInstance = new Trip(newTripData);
  let inputTest = evaluateBookingInputs(newTripData);
  if (!inputTest) {
    domUpdates.buildErrorModal('Please provide all required booking info!');
  } else {
    newTripInstance.calculateTripCost(allDestinations);
    let costString = newTripInstance.cost.toFixed(2).toString();
    domUpdates.buildTripCostModal(costString);
  }
}

function bookNewTrip() {
  let newTripData = receiveBookingInputs();
  let newTripInstance = new Trip(newTripData);
  let inputTest = evaluateBookingInputs(newTripData);
  
  if (!inputTest) {
    domUpdates.buildErrorModal('Please provide all required booking info!');
  } else {
    apiCalls.postNewTripRequest(newTripData)
    .then(response => {
      retrieveAllData();
      newTripInstance.calculateTripCost(allDestinations);
      domUpdates.buildBookingModal(newTripInstance, allDestinations);
    });
  }
}

function logoutUser() {
  user = null;
  usernameInput.value = '';
  passwordInput.value = '';
  retrieveAllData();
  domUpdates.togglePageView();
}

// HELPER & UTIL FUNCTIONS

function evaluateUsernameInput(username) {
  let splitInput = username.split('');
  // let joinedNum = parseInt(splitInput[8] + splitInput[9]);
  let joinedNum = parseInt(splitInput[0] + splitInput[1]);

  let user = allTravelers.find(traveler => {
    return traveler.id === joinedNum;
  });

  return user;
}

function getNextTripID() {
  allTrips.sort((a, b) => {
    return b.id - a.id;
  });
  let [ lastEntry ] = allTrips;

  return lastEntry.id + 1;
};

function receiveBookingInputs() {
  let startDate = formatSelectedDate(startDateSelect.value);
  let duration = parseInt(durationInput.value);
  let travelers = parseInt(travelersInput.value);
  let destinationID = parseInt(destinationSelect.value);

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

function evaluateBookingInputs(newTripData) {
  let isComplete = true;
  if (newTripData.date === '' || !newTripData.duration || !newTripData.travelers || newTripData.destinationID <= 0) {
    isComplete = false;
  }

  return isComplete;
}