// IMPORTS
import './css/base.scss';

import './images/turing-logo.png'
import './images/arrow.png'
import './images/tt-logo-no-text.png'

import domUpdates from './domUpdates.js';
import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';

// GLOBAL VARIABLES & QUERY SELECTORS

let userID, allDestinations, allTravelers, allTrips, currentTraveler;
let currentDate = "2021/01/09";

const logoutBtn = document.querySelector('#logoutBtn');
const navButtons = document.querySelectorAll('#navBtn');
const destinationSelect = document.querySelector('#destinationDrop');
const startDateSelect = document.querySelector('#startDateDrop');
const durationSelect = document.querySelector('#durationInput');
const travelersInput = document.querySelector('#numTravelersInput');

// EVENT LISTENERS

window.addEventListener('load', retrieveData);

// FUNCTIONS

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
  domUpdates.welcomeUser(currentTraveler);
}

// HELPERS

function getRandomIndex(array) {
  const index = Math.floor(Math.random() * array.length);
  return index;
}