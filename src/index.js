// IMPORTS
import './css/base.scss';

import './images/turing-logo.png'
import './images/arrow.png'
import './images/tt-logo-no-text.png'

import domUpdates from './domUpdates.js';
import apiCalls from './apiCalls.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';

let travelers, destinations, allTrips, currentTraveler, currentDate;

// Add name input, pass input, login button
const navButtons = document.querySelectorAll('#navBtn');
const logoutBtn = document.querySelector('#logoutBtn');
const destinationSelect = document.querySelector('#destDrop');