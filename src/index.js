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

let currentDate = "2020/01/09";

// user data
let currentTraveler;

// API datasets
let allDestinations, allTravelers, allTrips;

// login
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#loginBtn');

// navbar
const homeButton = document.querySelector('#logo');
const navButtons = document.querySelectorAll('#navBtn');
const costButton = document.querySelector('#costBtn');
const bookButton = document.querySelector('#bookBtn');
const logoutButton = document.querySelector('#logoutBtn');

// booking
const destinationSelect = document.querySelector('#destinationDrop');
const startDateSelect = document.querySelector('#startDateDrop');
const durationInput = document.querySelector('#durationInput');
const travelersInput = document.querySelector('#numTravelersInput');

// EVENT LISTENERS

window.addEventListener('load', retrieveData);
loginButton.addEventListener('click', function(event) {
  retrieveLoginInfo(event);;
});
navButtons.forEach(button => button.addEventListener('click', function(event) {
  populateCardGrid(event);
}));
homeButton.addEventListener('click', retrieveData);
costButton.addEventListener('click', estimateTripCost);
bookButton.addEventListener('click', bookNewTrip);


// HANDLER FUNCTIONS

function retrieveData() {
  apiCalls.getAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
    })
}

function retrieveLoginInfo(event) {
  event.preventDefault();

  let traveler = evaluateUsernameInput(usernameInput.value);

  if (passwordInput.value === 'travel2020' && traveler) {
    createUser(traveler);
    domUpdates.displayUserHome();
  } else {
    domUpdates.displayErrorMessage('Sorry, login info is incorrect.');
  }
}

function createUser(traveler) {
  currentTraveler = new Traveler(traveler);
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
  let newTripData = receiveBookingInputs();
  let newTripInstance = new Trip(newTripData);
  let inputTest = evaluateBookingInputs(newTripData);
  if (!inputTest) {
    domUpdates.displayErrorMessage('Please fill out all required inputs!');
  } else {
    newTripInstance.calculateTripCost(allDestinations);
    domUpdates.displayTripCostModal(newTripInstance.cost);
  }
}

function bookNewTrip() {
  let newTripData = receiveBookingInputs();
  let newTripInstance = new Trip(newTripData);
  let inputTest = evaluateBookingInputs(newTripData);
  
  if (!inputTest) {
    domUpdates.displayErrorMessage('Please fill out all required inputs!');
  } else {
    apiCalls.postNewTripRequest(newTripData)
    .then(response => {
      retrieveData()
      // currentTraveler.populateTrips(allTrips);
      
      newTripInstance.calculateTripCost(allDestinations);
      domUpdates.displayGridTitle('My Trips');
      domUpdates.displayBookingMessage(newTripInstance, allDestinations);
      
      // displayUserData();
    });
  }
}

// HELPER & UTIL FUNCTIONS

function evaluateUsernameInput(username) {
  let splitInput = username.split('');
  let joinedNum = parseInt(splitInput[8] + splitInput[9]);
  let user = allTravelers.find(traveler => {
    return traveler.id === joinedNum;
  });

  return user;
}

function displayUserData() {
  domUpdates.welcomeUser(currentTraveler);
  domUpdates.buildBookingSection(allDestinations);
  domUpdates.displayTravelCosts(currentTraveler.annualCosts);
  domUpdates.displayTripCards(currentTraveler.trips, allDestinations);
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