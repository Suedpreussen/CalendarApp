let nav = 0;  // keep track of whichever month we're looking at
let clicked = null;  // whichever day we've clicked on
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function load()
  {
  const dt = new Date();
  }

load();