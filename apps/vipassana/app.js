require("FontTeletext5x9Ascii").add(Graphics);
require('DateExt');
//var lib = require("lib.js");

// let clock = {
//   hours: '',
//   minutes: '',
//   weekday: '',
//   date: '',
//   month: ''
// };

let vipassana = {
  last_update: undefined,
  day: -1,
  now: 0,
  next: 1,
  nextCourse: -1
}

let batteryWarning = false;

// Lib - Try to move to separate file


let courses = [
  '2022-10-19',
  '2022-11-02',
  '2022-11-16'
];

var timetable = {
  "-1": [
    {time: 555, text: "Chanting"},
    {time: 630, text: "Breakfast"},
    {time: 700, text: "Meeting"},
    {time: 730, text: "Group sitting"},
    {time: 830, text: "Work Period"},
    {time: 1200, text: "Lunch"},
    {time: 1300, text: "Rest"},
    {time: 1430, text: "Group sitting"},
    {time: 1530, text: "Work Period"},
    {time: 1800, text: "Dinner"},
    {time: 1930, text: "Group Sitting"},
    {time: 2030, text: "Metta"},
    {time: 2200, text: "Lights out"}
  ],
  "0": [
    {time: 555, text: "Chanting"},
    {time: 630, text: "Breakfast"},
    {time: 700, text: "Meeting"},
    {time: 730, text: "Group sitting"},
    {time: 830, text: "Prepare Kitchen"},
    {time: 1030, text: "Prepare Registration"},
    {time: 1100, text: "Lunch"},
    {time: 1300, text: "Group Sitting"},
    {time: 1400, text: "Registration"},
    {time: 1430, text: "Food Preparations"},
    {time: 1530, text: "Kitchen Meeting"},
    {time: 1800, text: "Dinner"},
    {time: 1900, text: "Information"},
    {time: 2000, text: "Course Starts"},
    {time: 2200, text: "Lights out"}
  ],
  "1": [
    {time: 400, text: "Wake up"},
    {time: 430, text: "Meditation"},
    {time: 630, text: "Breakfast"},
    {time: 800, text: "Group sitting"},
    {time: 900, text: "Meditation"},
    {time: 1100, text: "Lunch"},
    {time: 1200, text: "Interviews"},
    {time: 1300, text: "Meditation"},
    {time: 1430, text: "Group sitting"},
    {time: 1530, text: "Meditation"},
    {time: 1700, text: "Tea"},
    {time: 1800, text: "Group sitting"},
    {time: 1900, text: "Discourse"},
    {time: 2015, text: "Group sitting"},
    {time: 2100, text: "Questions"},
    {time: 2200, text: "Lights out"}
  ],
  "4": [
    {time: 400, text: "Wake up"},
    {time: 430, text: "Meditation"},
    {time: 630, text: "Breakfast"},
    {time: 800, text: "Group sitting"},
    {time: 900, text: "Meditation"},
    {time: 1100, text: "Lunch"},
    {time: 1200, text: "Interviews"},
    {time: 1300, text: "Meditation"},
    {time: 1400, text: "Group sitting"},
    {time: 1500, text: "Vipassana Teaching"},
    {time: 1700, text: "Tea"},
    {time: 1800, text: "Group sitting"},
    {time: 1900, text: "Discourse"},
    {time: 2015, text: "Group sitting"},
    {time: 2100, text: "Questions"},
    {time: 2200, text: "Lights out"}
  ],
  "10": [
    {time: 400, text: "Wake up"},
    {time: 430, text: "Meditation"},
    {time: 630, text: "Breakfast"},
    {time: 800, text: "Group sitting"},
    {time: 900, text: "Meditation"},
    {time: 1010, text: "Noble Silence ends"},
    {time: 1100, text: "Lunch"},
    {time: 1200, text: "Interviews"},
    {time: 1300, text: "Rest"},
    {time: 1430, text: "Group sitting"},
    {time: 1550, text: "Rest"},
    {time: 1600, text: "Information"},
    {time: 1700, text: "Dinner"},
    {time: 1800, text: "Group sitting"},
    {time: 1900, text: "Discourse"},
    {time: 2015, text: "Rest"},
    {time: 2200, text: "Lights out"}
  ],
  "11": [
    {time: 400, text: "Wake up"},
    {time: 430, text: "Group Sitting"},
    {time: 630, text: "Cleaning"},
    {time: 700, text: "Breakfast"},
    {time: 730, text: "Cleaning"},
    {time: 850, text: "Bus Leaves"},
    {time: 915, text: "Meeting"},
    {time: 1000, text: "Group Sitting"},
    {time: 1100, text: "Work Period"},
    {time: 1200, text: "Lunch"},
    {time: 1300, text: "Rest"},
    {time: 1430, text: "Group sitting"},
    {time: 1530, text: "Work Period"},
    {time: 1800, text: "Dinner"},
    {time: 1930, text: "Group sitting"},
    {time: 2030, text: "Metta"},
    {time: 2200, text: "Lights out"}
  ]
};


// var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

Date.prototype.addMinutes = function(minutes) {
  var date = new Date(this.valueOf());
  date.setMinutes(date.getMinutes() + minutes); // timestamp
  return date; // Date object
}

// function getWeekDay(day) {
//   return weekdays[day];
// }

function getIsoDate(date) {
  return new Date(date.toISOString().substring(0, 10));
}

function diffDates(date1, date2) {
  var diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}

function getCourseDay(date) {
  date = getIsoDate(date);
  
  if ((date < new Date(courses[0])) || (date > new Date(courses[courses.length-1]).addDays(11))) {
    return -1;
  }

  for (var i = 0; i < courses.length; i++) {
    var start = new Date(courses[i]);
    var end = new Date(courses[i]).addDays(11);
    if ((date >= start) && (date <= end)) {
      return diffDates(date, start);
    }
  }

  return -1;
}

function getNextCourseIndex(date) {
  date = getIsoDate(date);

  if (date > new Date(courses[courses.length-1]).addDays(11)) {
    // No new courses configured
    return -1;
  }

  for (var i = 0; i < courses.length; i++) {
    var start = new Date(courses[i]);
    if (date < start) {
      // First course
      if (i == 0) {
        return i;
      }

      var lastEnd = new Date(courses[i-1]).addDays(11);
      if (date > lastEnd) {
        return i;
      }
    }
  }

  return -1;
}

function getTimeTable(day) {
  day = "" + day;
  
  if (day in timetable) {
    return timetable[day];
  }

  if (day == 12) {
    return timetable["-1"];
  }

  return timetable["1"];
}

function timeAsString(date) {
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  return hours + minutes;
}

function currentActivityIndex(date) {
  date = date.addMinutes(5);
  let hm = timeAsString(date);
  var time = parseInt(hm, 10);

  var timetable = getTimeTable(vipassana.day);

  if ((time < timetable[0].time) || (time >= timetable[timetable.length - 1].time)) {
    return timetable.length - 1;
  }

  for (var i = 0; i < timetable.length; i++) {
    if (time < timetable[i].time) {
      return i-1;
    }
  }

  return timetable.length - 1;
}

function nextActivityIndex(date) {
  var timetable = getTimeTable(vipassana.day);

  var currentIndex = currentActivityIndex(date);

  if (currentIndex == timetable.length - 1) {
    return 0;
  }

  return currentIndex + 1;
}

// Expects time as a number, 930 = 9:30, 1430 = 14:30
function formatTime(number) {
  var string = '' + number;

  if (string.length < 4) {
    string = '0' + string;
  }

  return string.substr(0, 2) + ':' + string.substr(2, 2);
}

// Calculations
function heavyCalculations() {
  // Heavy calculation
  let date = new Date();
  vipassana.day = getCourseDay(date);

  if (vipassana.day == -1) {
    vipassana.nextCourse = getNextCourseIndex(date);
  }
  console.log('Heavy Calc', vipassana);
  vipassana.last_update = getIsoDate(date);
}

Bangle.on('midnight', heavyCalculations);

if (vipassana.last_update === undefined) {
  heavyCalculations();
  let date = new Date();
  vipassana.now = currentActivityIndex(date);
  vipassana.next = nextActivityIndex(date);
}


// timeout used to update every minute
// var calculationInterval;

// schedule a draw for the next minute
// calculationInterval = setInterval(function() {
//   let date = new Date();
//   vipassana.now = currentActivityIndex(date);
//   vipassana.next = nextActivityIndex(date);
// }, 60000 - (Date.now() % 60000));

// place your const, vars, functions or classes here

Graphics.prototype.setFontLECO1976Regular42 = function(scale) {
  // Actual height 42 (41 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAA/AAAAAAAAH/AAAAAAAA//AAAAAAAP//AAAAAAB///AAAAAAP///AAAAAB////AAAAAf////AAAAD////4AAAAf////AAAAH////4AAAA////+AAAAA////wAAAAA///+AAAAAA///gAAAAAA//8AAAAAAA//gAAAAAAA/4AAAAAAAA/AAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////gD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4B/gH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/wB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/wB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAH+AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"), 46, atob("ERkmHyYmJiYmJCYmEQ=="), 60+(scale<<8)+(1<<16));
}

Graphics.prototype.setFontLECO1976Regular22 = function(scale) {
  // Actual height 22 (21 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/nA/+cD/5wP/nAAAAAAAAPwAA/gAD+AAPwAAAAAD+AAP4AA/gAAAAAAAAAAAAAcOAP//A//8D//wP//AHDgAcOAP//A//8D//wP//AHDgAAAAAAAAH/jgf+OB/44H/jj8OP/w4//Dj/8OPxw/4HD/gcP+Bw/4AAAAAAAP+AA/8AD/wQOHHA4c8D//wP/8A//gAD4AAfAAH/8A//wP//A84cDjhwIP/AA/8AB/wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8ABwAAAAAAAAD8AAP4AA/gAD8AAAAAAAAAAAEAAD+AB//A///v/D//gB/wABwAAAAAADgAA/wAf/4P8///wf/4AP8AAOAAAAAAAAAyAAHcAAPwAD/gAP/AA/8AA/AAH8AAMwAAAAAAAAAAAAADgAAOAAA4AAf8AD/wAP/AA/8AAOAAA4AADgAAAAAAAAAAD8AAfwAB/AAD8AAAAAAAADgAAOAAA4AADgAAOAAA4AADgAAAAAAAAAADgAAOAAA4AADgAAAAAAAAABwAB/AA/8A//gP/gA/wADwAAIAAAAAAD//wP//A//8D//wOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA4AcDgBwOAHA//8D//wP//A//8AABwAAHAAAcAAAAAAAA+f8D5/wPn/A+f8DhxwOHHA4ccDhxwP/HA/8cD/xwP/HAAAAAAAAOAHA4AcDhxwOHHA4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/wAP/AA/8AD/wAAHAAAcAABwAAHAA//8D//wP//A//8AAAAAAAA/98D/3wP/fA/98DhxwOHHA4ccDhxwOH/A4f8Dh/wOH/AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccDh/wOH/A4f8Dh/wAAAAAAAD4AAPgAA+AADgAAOAAA4AADgAAP//A//8D//wP//AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA//8D//wP//A//8AAAAAAAAOA4A4DgDgOAOA4AAAAAAAAOA/A4H8DgfwOA/AAAAAAAAB4AAPwAA/AAD8AAf4ABzgAPPAA8cAHh4AAAAAAAAAAAAHHAAccABxwAHHAAccABxwAHHAAccABxwAHHAAAAAAAAAOHAA4cADzwAPPAAf4AB/gAD8AAPwAAeAAB4AAAAAAAAA+AAD4AAPgAA+ecDh9wOH3A4fcDhwAP/AA/8AD/wAP/AAAAAAAAAP//4///j//+P//44ADjn/OOf845/zjnHOP8c4//zj//OP/84AAAAAAAP//A//8D//wP//A4cADhwAOHAA4cAD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA//8D//wP9/A/j8AAAAAAAA//8D//wP//A//8DgBwOAHA4AcDgBwOAHA4AcDgBwOAHAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA8A8D//wH/+AP/wAf+AAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4ccDhxwOAHA4AcAAAAAAAA//8D//wP//A//8DhwAOHAA4cADhwAOHAA4cADgAAOAAAAAAD//wP//A//8D//wOAHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA//8D//wP//A//8ABwAAHAAAcAABwAP//A//8D//wP//AAAAAAAAP//A//8D//wP//AAAAAAAAOAHA4AcDgBwOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA//8D//wP//A//8AHwAA/AAP8AB/wAPn/A8f8DB/wIH/AAAAAAAAP//A//8D//wP//AAAcAABwAAHAAAcAABwAAHAAAAAAAAP//A//8D//wP//Af8AAP+AAH/AAD8AAHwAD/AB/wAf8AP+AA//8D//wP//AAAAAAAAP//A//8D//wP//AfwAAfwAAfwAAfwAAfwP//A//8D//wAAAAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHAA4cADhwAOHAA/8AD/wAP/AA/8AAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//+P//4///j//+AAA4AADgAAAP//A//8D//wP//A4eADh+AOH8A4f4D/3wP/HA/8MD/wQAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA4AADgAAOAAA//8D//wP//A//8DgAAOAAA4AADgAAAAAA//8D//wP//A//8AABwAAHAAAcAABwP//A//8D//wP//AAAADAAAPgAA/wAD/4AB/8AA/8AAfwAB/AA/8Af+AP/AA/wAD4AAMAAA4AAD+AAP/gA//8AH/wAB/AAf8Af/wP/4A/4AD/gAP/4AH/8AB/wAB/AB/8D//wP/gA/gADgAAIABA4AcDwDwPw/Afn4Af+AA/wAD/AA//AH5+A/D8DwDwOAHAgAEAAAAP/AA/8AD/wAP/AAAf8AB/wAH/AAf8D/wAP/AA/8AD/wAAAAAAAADh/wOH/A4f8Dh/wOHHA4ccDhxwOHHA/8cD/xwP/HA/8cAAAAAAAAf//9///3///f//9wAA3AADcAAMAAAOAAA/gAD/wAH/8AB/8AA/wAAPAAAEAAAAHAADcAANwAB3///f//9///wAA"), 32, atob("BwYLDg4UDwYJCQwMBgkGCQ4MDg4ODg4NDg4GBgwMDA4PDg4ODg4NDg4GDQ4MEg8ODQ8ODgwODhQODg4ICQg="), 22+(scale<<8)+(1<<16));
}

const SETTINGS_FILE = "vipassana.json";
let settings;

function loadSettings() {
  settings = 
  require("Storage").readJSON(SETTINGS_FILE,1)|| {'bg': '#0d0', 'fg': '#fff'};
}


// An object to cache our date & time values,
// to minimize computations in the draw handler.

const h = g.getHeight();
const w = g.getWidth();
const middleBarHeight = 28;
const middleBarStart = h/2-middleBarHeight/2 + 2;
const lowerStart = middleBarStart + middleBarHeight + 16;

function drawLock() {
  if (lowBattery())
    g.setBgColor('#f00');
  else
    g.setBgColor('#0f0');
  
  g.setColor('#000');
  
  if (Bangle.isLocked()){
    g.drawImage(atob("DhABH+D/wwMMDDAwwMf/v//4f+H/h/8//P/z///f/g=="), w-20, middleBarStart + 6);
  } else {
    g.setColor('#f00');
    g.fillRect(w-20, middleBarStart, w, middleBarStart + 28);
  }
  g.setBgColor('#000');
}

Bangle.on('lock', function(on) {
  drawLock();
});

function lowBattery() {
  if (E.getBattery() < 30) {
    batteryWarning = true;
    return true;
  } else if (E.getBattery() > 40) {
    batteryWarning = false;
  }
  return batteryWarning;
}

// clear the screen
g.clear();

// redraw the screenay
function draw() {
  let date = new Date();

  if (vipassana.last_update != getIsoDate(date)) {
    heavyCalculations();
  }

  let locale = require("locale");
  let dayOfWeek = locale.dow(date).toUpperCase();
  let dayOfMonth = date.getDate();
  let time = locale.time(date, 1);

  g.clear();

  g.reset();
  
  // Date
  g.setColor(settings.fg);
  g.setFontLECO1976Regular22();
  g.setFontAlign(0, 0);
  g.drawString(dayOfWeek + ' ' + dayOfMonth, w/2, 16);

  // Time
  g.setFontLECO1976Regular42();
  g.setFontAlign(0, -1);
  g.drawString(time, w/2, 28, true);
  
  // Day of course / Middle bar
  if (lowBattery())
    g.setColor('#f00');
  else
    g.setColor('#0f0');
  g.fillRect(0, middleBarStart, w, middleBarStart+middleBarHeight);
  
  
  g.setColor('#000');
  g.setFontAlign(0, 0);
  //g.setFont("Teletext5x9Ascii", 2);
  g.setFont("6x8", 3);
  let dayString;
  if (vipassana.day == -1) {
    dayString = 'Metta';
  } else {
    dayString = 'Day ' + vipassana.day;
  }

  g.drawString(dayString, w / 2, middleBarStart+14);

  var timetable = getTimeTable(vipassana.day);
  
  // Current event
  g.setColor(settings.fg);
  g.setFontAlign(-1, 0);
  g.setFont("6x8", 2);
  g.drawString(formatTime(timetable[vipassana.now].time) + ' ' + timetable[vipassana.now].text, 0, lowerStart + 4);

  //g.drawString(, w/2, lowerStart + 20);


  // Next event
  //g.setFont("Teletext5x9Ascii");
  g.setFontAlign(-1, 0);
  if (vipassana.next == 0) {
    timetable = getTimeTable(vipassana.day + 1);
  }
  g.drawString(formatTime(timetable[vipassana.next].time) + ' ' + timetable[vipassana.next].text, 0, lowerStart + 32);

  drawLock();
}

Bangle.setUI("clock");

g.clear();

loadSettings();
setInterval(draw, 50000); // refresh every 15s, decrease to once per minute
draw();

