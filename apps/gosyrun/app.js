require("FontTeletext5x9Ascii").add(Graphics);
require('DateExt');

const TIME_TABLE = [
  [{pace: '05:00'}, {pace: '05:00'}, {pace: '05:10'}, {pace: '05:00'}, {pace: '05:30'}],
  [{pace: '04:00'}, {pace: '04:20'}, {pace: '04:20'}, {pace: '04:20'}, {pace: '04:00'}],
  [{pace: '06:00'}, {pace: '04:20'}, {pace: '03:20'}, {pace: '04:20'}, {pace: '04:00'}],
]

function getTimeTable(km) {
  return TIME_TABLE[km];
}

Graphics.prototype.setFontLECO1976Regular42 = function(scale) {
  // Actual height 42 (41 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAA/AAAAAAAAH/AAAAAAAA//AAAAAAAP//AAAAAAB///AAAAAAP///AAAAAB////AAAAAf////AAAAD////4AAAAf////AAAAH////4AAAA////+AAAAA////wAAAAA///+AAAAAA///gAAAAAA//8AAAAAAA//gAAAAAAA/4AAAAAAAA/AAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAH/AAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA//h////AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////gD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4AAAH/AAA/4B/gH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAA////wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAAAAB/wAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA////x//AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/wB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/4B////AAA/wB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA//gAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA/4AAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA////wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA/4B/wH/AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAA///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAP+AAH/AAAAH+AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"), 46, atob("ERkmHyYmJiYmJCYmEQ=="), 60+(scale<<8)+(1<<16));
}

Graphics.prototype.setFontLECO1976Regular22 = function(scale) {
  // Actual height 22 (21 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/nA/+cD/5wP/nAAAAAAAAPwAA/gAD+AAPwAAAAAD+AAP4AA/gAAAAAAAAAAAAAcOAP//A//8D//wP//AHDgAcOAP//A//8D//wP//AHDgAAAAAAAAH/jgf+OB/44H/jj8OP/w4//Dj/8OPxw/4HD/gcP+Bw/4AAAAAAAP+AA/8AD/wQOHHA4c8D//wP/8A//gAD4AAfAAH/8A//wP//A84cDjhwIP/AA/8AB/wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8ABwAAAAAAAAD8AAP4AA/gAD8AAAAAAAAAAAEAAD+AB//A///v/D//gB/wABwAAAAAADgAA/wAf/4P8///wf/4AP8AAOAAAAAAAAAyAAHcAAPwAD/gAP/AA/8AA/AAH8AAMwAAAAAAAAAAAAADgAAOAAA4AAf8AD/wAP/AA/8AAOAAA4AADgAAAAAAAAAAD8AAfwAB/AAD8AAAAAAAADgAAOAAA4AADgAAOAAA4AADgAAAAAAAAAADgAAOAAA4AADgAAAAAAAAABwAB/AA/8A//gP/gA/wADwAAIAAAAAAD//wP//A//8D//wOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA4AcDgBwOAHA//8D//wP//A//8AABwAAHAAAcAAAAAAAA+f8D5/wPn/A+f8DhxwOHHA4ccDhxwP/HA/8cD/xwP/HAAAAAAAAOAHA4AcDhxwOHHA4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/wAP/AA/8AD/wAAHAAAcAABwAAHAA//8D//wP//A//8AAAAAAAA/98D/3wP/fA/98DhxwOHHA4ccDhxwOH/A4f8Dh/wOH/AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccDh/wOH/A4f8Dh/wAAAAAAAD4AAPgAA+AADgAAOAAA4AADgAAP//A//8D//wP//AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA//8D//wP//A//8AAAAAAAAOA4A4DgDgOAOA4AAAAAAAAOA/A4H8DgfwOA/AAAAAAAAB4AAPwAA/AAD8AAf4ABzgAPPAA8cAHh4AAAAAAAAAAAAHHAAccABxwAHHAAccABxwAHHAAccABxwAHHAAAAAAAAAOHAA4cADzwAPPAAf4AB/gAD8AAPwAAeAAB4AAAAAAAAA+AAD4AAPgAA+ecDh9wOH3A4fcDhwAP/AA/8AD/wAP/AAAAAAAAAP//4///j//+P//44ADjn/OOf845/zjnHOP8c4//zj//OP/84AAAAAAAP//A//8D//wP//A4cADhwAOHAA4cAD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA//8D//wP9/A/j8AAAAAAAA//8D//wP//A//8DgBwOAHA4AcDgBwOAHA4AcDgBwOAHAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA8A8D//wH/+AP/wAf+AAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4ccDhxwOAHA4AcAAAAAAAA//8D//wP//A//8DhwAOHAA4cADhwAOHAA4cADgAAOAAAAAAD//wP//A//8D//wOAHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA//8D//wP//A//8ABwAAHAAAcAABwAP//A//8D//wP//AAAAAAAAP//A//8D//wP//AAAAAAAAOAHA4AcDgBwOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA//8D//wP//A//8AHwAA/AAP8AB/wAPn/A8f8DB/wIH/AAAAAAAAP//A//8D//wP//AAAcAABwAAHAAAcAABwAAHAAAAAAAAP//A//8D//wP//Af8AAP+AAH/AAD8AAHwAD/AB/wAf8AP+AA//8D//wP//AAAAAAAAP//A//8D//wP//AfwAAfwAAfwAAfwAAfwP//A//8D//wAAAAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHAA4cADhwAOHAA/8AD/wAP/AA/8AAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//+P//4///j//+AAA4AADgAAAP//A//8D//wP//A4eADh+AOH8A4f4D/3wP/HA/8MD/wQAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA4AADgAAOAAA//8D//wP//A//8DgAAOAAA4AADgAAAAAA//8D//wP//A//8AABwAAHAAAcAABwP//A//8D//wP//AAAADAAAPgAA/wAD/4AB/8AA/8AAfwAB/AA/8Af+AP/AA/wAD4AAMAAA4AAD+AAP/gA//8AH/wAB/AAf8Af/wP/4A/4AD/gAP/4AH/8AB/wAB/AB/8D//wP/gA/gADgAAIABA4AcDwDwPw/Afn4Af+AA/wAD/AA//AH5+A/D8DwDwOAHAgAEAAAAP/AA/8AD/wAP/AAAf8AB/wAH/AAf8D/wAP/AA/8AD/wAAAAAAAADh/wOH/A4f8Dh/wOHHA4ccDhxwOHHA/8cD/xwP/HA/8cAAAAAAAAf//9///3///f//9wAA3AADcAAMAAAOAAA/gAD/wAH/8AB/8AA/wAAPAAAEAAAAHAADcAANwAB3///f//9///wAA"), 32, atob("BwYLDg4UDwYJCQwMBgkGCQ4MDg4ODg4NDg4GBgwMDA4PDg4ODg4NDg4GDQ4MEg8ODQ8ODgwODhQODg4ICQg="), 22+(scale<<8)+(1<<16));
}

// An object to cache our date & time values,
// to minimize computations in the draw handler.

const h = g.getHeight();
const w = g.getWidth();
const middleBarHeight = 28;
const middleBarStart = h/2-middleBarHeight/2 + 2;

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

// clear the screen
g.clear();

let settings = {'bg': '#0d0', 'fg': '#fff'};

// redraw the screenay
function draw() {
  g.clear();

  g.reset();
  
  // Date
  // g.setColor(settings.fg);
  // g.setFontLECO1976Regular22();
  // g.setFontAlign(0, 0);
  // g.drawString(dayOfWeek + ' ' + dayOfMonth, w/2, 16);

  // Time
  g.setFontLECO1976Regular42();
  g.setFontAlign(0, -1);
  g.drawString(km + ' km', w/2, 28, true);
  
  var timeTable = getTimeTable(km);
  
  let y = 48;
  for (let entry in timeTable) {
    g.setColor(settings.fg);
    g.setFontLECO1976Regular22();
    g.setFontAlign(0, 0);
    g.drawString(entry.pace, 0, y);
    y += 22;
  }

  // Current event
  // g.setColor(settings.fg);
  // g.setFontAlign(-1, 0);
  // g.setFont("6x8", 2);
  // g.drawString(formatTime(timetable[vipassana.now].time) + ' ' + timetable[vipassana.now].text, 0, lowerStart + 4);

  //g.drawString(, w/2, lowerStart + 20);

  drawLock();
}

//setInterval(draw, 10000); // refresh every 15s, decrease to once per minute

// clear the screen
g.clear();

var km = 0;

// Respond to user input
Bangle.setUI({mode: "updown"}, function(dir) {
  if (dir<0) {
    km--;
    if (km < 0)
      km = 0;
    draw();
  } else if (dir>0) {
    km++;
    if (km > 2)
      km = 2;
    draw();
  } else {
    km = 0;
    draw();
  }
});

// First draw...
draw();

// Load widgets
Bangle.loadWidgets();
Bangle.drawWidgets();