require("FontTeletext5x9Ascii").add(Graphics);

const h = g.getHeight();
const w = g.getWidth();
const TIME_TABLE = [
    {
        "section": 1,
        "distance": 0.2,
        "time": "0:01:00",
        "recorded_pace": "05:00",
        "pace": "04:30",
        "altitude": -1,
        "challange": -1
    },
    {
        "section": 2,
        "distance": 0.4,
        "time": "0:02:01",
        "recorded_pace": "05:05",
        "pace": "05:15",
        "altitude": 6,
        "challange": 2
    },
    {
        "section": 3,
        "distance": 0.6,
        "time": "0:03:06",
        "recorded_pace": "05:25",
        "pace": "04:30",
        "altitude": -1,
        "challange": -1
    },
    {
        "section": 4,
        "distance": 0.8,
        "time": "0:04:07",
        "recorded_pace": "05:05",
        "pace": "05:00",
        "altitude": 4,
        "challange": 1
    },
    {
        "section": 5,
        "distance": 1.0,
        "time": "0:05:07",
        "recorded_pace": "05:00",
        "pace": "04:30",
        "altitude": -1,
        "challange": -1
    },
    {
        "section": 7,
        "distance": 1.2,
        "time": "0:06:06",
        "recorded_pace": "04:55",
        "pace": "05:00",
        "altitude": 2,
        "challange": 1
    },
    {
        "section": 8,
        "distance": 1.4,
        "time": "0:07:05",
        "recorded_pace": "04:55",
        "pace": "04:15",
        "altitude": -6,
        "challange": -2
    },
    {
        "section": 9,
        "distance": 1.6,
        "time": "0:08:00",
        "recorded_pace": "04:35",
        "pace": "04:15",
        "altitude": -9,
        "challange": -2
    },
    {
        "section": 10,
        "distance": 1.8,
        "time": "0:08:58",
        "recorded_pace": "04:50",
        "pace": "04:30",
        "altitude": -1,
        "challange": -1
    },
    {
        "section": 11,
        "distance": 2.0,
        "time": "0:09:55",
        "recorded_pace": "04:45",
        "pace": "04:30",
        "altitude": -3,
        "challange": -1
    },
    {
        "section": 13,
        "distance": 2.2,
        "time": "0:11:03",
        "recorded_pace": "05:40",
        "pace": "05:30",
        "altitude": 15,
        "challange": 3
    },
    {
        "section": 14,
        "distance": 2.4,
        "time": "0:12:02",
        "recorded_pace": "04:55",
        "pace": "04:30",
        "altitude": -4,
        "challange": -1
    },
    {
        "section": 15,
        "distance": 2.6,
        "time": "0:13:10",
        "recorded_pace": "05:40",
        "pace": "05:30",
        "altitude": 21,
        "challange": 3
    },
    {
        "section": 16,
        "distance": 2.8,
        "time": "0:14:16",
        "recorded_pace": "05:30",
        "pace": "05:00",
        "altitude": 2,
        "challange": 1
    },
    {
        "section": 17,
        "distance": 3.0,
        "time": "0:15:18",
        "recorded_pace": "05:10",
        "pace": "04:30",
        "altitude": -3,
        "challange": -1
    },
    {
        "section": 19,
        "distance": 3.2,
        "time": "0:16:17",
        "recorded_pace": "04:55",
        "pace": "05:00",
        "altitude": 3,
        "challange": 1
    },
    {
        "section": 20,
        "distance": 3.4,
        "time": "0:17:18",
        "recorded_pace": "05:05",
        "pace": "04:30",
        "altitude": -2,
        "challange": -1
    },
    {
        "section": 21,
        "distance": 3.6,
        "time": "0:18:17",
        "recorded_pace": "04:55",
        "pace": "04:30",
        "altitude": -4,
        "challange": -1
    },
    {
        "section": 22,
        "distance": 3.8,
        "time": "0:19:22",
        "recorded_pace": "05:25",
        "pace": "05:00",
        "altitude": 1,
        "challange": 1
    },
    {
        "section": 23,
        "distance": 4.0,
        "time": "0:20:23",
        "recorded_pace": "05:05",
        "pace": "05:00",
        "altitude": 4,
        "challange": 1
    },
    {
        "section": 25,
        "distance": 4.2,
        "time": "0:21:19",
        "recorded_pace": "04:40",
        "pace": "04:00",
        "altitude": -14,
        "challange": -3
    },
    {
        "section": 26,
        "distance": 4.4,
        "time": "0:22:16",
        "recorded_pace": "04:45",
        "pace": "04:15",
        "altitude": -6,
        "challange": -2
    },
    {
        "section": 27,
        "distance": 4.6,
        "time": "0:23:19",
        "recorded_pace": "05:15",
        "pace": "05:00",
        "altitude": 3,
        "challange": 1
    },
    {
        "section": 28,
        "distance": 4.8,
        "time": "0:24:14",
        "recorded_pace": "04:35",
        "pace": "04:15",
        "altitude": -7,
        "challange": -2
    },
    {
        "section": 29,
        "distance": 5.0,
        "time": "0:25:18",
        "recorded_pace": "05:20",
        "pace": "05:00",
        "altitude": 4,
        "challange": 1
    },
    {
        "section": 31,
        "distance": 5.2,
        "time": "0:26:21",
        "recorded_pace": "05:15",
        "pace": "05:00",
        "altitude": 3,
        "challange": 1
    },
    {
        "section": 32,
        "distance": 5.4,
        "time": "0:27:25",
        "recorded_pace": "05:20",
        "pace": "05:00",
        "altitude": 1,
        "challange": 1
    },
    {
        "section": 33,
        "distance": 5.6,
        "time": "0:28:24",
        "recorded_pace": "04:55",
        "pace": "04:00",
        "altitude": -15,
        "challange": -3
    },
    {
        "section": 34,
        "distance": 5.8,
        "time": "0:29:24",
        "recorded_pace": "05:00",
        "pace": "04:30",
        "altitude": -4,
        "challange": -1
    },
    {
        "section": 35,
        "distance": 6.1,
        "time": "0:30:25",
        "recorded_pace": "05:05",
        "pace": "05:00",
        "altitude": 3,
        "challange": 1
    },
    {
        "section": 37,
        "distance": 6.3,
        "time": "0:31:28",
        "recorded_pace": "05:15",
        "pace": "05:00",
        "altitude": 4,
        "challange": 1
    },
    {
        "section": 38,
        "distance": 6.5,
        "time": "0:32:27",
        "recorded_pace": "04:55",
        "pace": "04:15",
        "altitude": -6,
        "challange": -2
    },
    {
        "section": 39,
        "distance": 6.7,
        "time": "0:33:27",
        "recorded_pace": "05:00",
        "pace": "05:00",
        "altitude": 4,
        "challange": 1
    },
    {
        "section": 40,
        "distance": 6.9,
        "time": "0:34:30",
        "recorded_pace": "05:15",
        "pace": "04:30",
        "altitude": -2,
        "challange": -1
    },
    {
        "section": 41,
        "distance": 7.1,
        "time": "0:35:33",
        "recorded_pace": "05:15",
        "pace": "05:00",
        "altitude": 2,
        "challange": 1
    },
    {
        "section": 43,
        "distance": 7.3,
        "time": "0:36:34",
        "recorded_pace": "05:05",
        "pace": "04:30",
        "altitude": -1,
        "challange": -1
    },
    {
        "section": 44,
        "distance": 7.5,
        "time": "0:37:38",
        "recorded_pace": "05:20",
        "pace": "04:45",
        "altitude": 0,
        "challange": 0
    },
    {
        "section": 45,
        "distance": 7.7,
        "time": "0:38:40",
        "recorded_pace": "05:10",
        "pace": "05:00",
        "altitude": 4,
        "challange": 1
    },
    {
        "section": 46,
        "distance": 7.9,
        "time": "0:39:47",
        "recorded_pace": "05:35",
        "pace": "05:15",
        "altitude": 7,
        "challange": 2
    },
    {
        "section": 47,
        "distance": 8.1,
        "time": "0:40:50",
        "recorded_pace": "05:15",
        "pace": "04:00",
        "altitude": -11,
        "challange": -3
    },
    {
        "section": 49,
        "distance": 8.3,
        "time": "0:41:56",
        "recorded_pace": "05:30",
        "pace": "05:30",
        "altitude": 14,
        "challange": 3
    },
    {
        "section": 50,
        "distance": 8.5,
        "time": "0:42:59",
        "recorded_pace": "05:15",
        "pace": "04:15",
        "altitude": -8,
        "challange": -2
    }
];
const delta = 1;

let settings = {'bg': '#0d0', 'fg': '#fff'};
var index = 0;

function getTimeTable(index) {
  if (index >= TIME_TABLE.length)
    return {challange: 0}

  return TIME_TABLE[index];
}

function indexToKm(i) {
  let rounded = i / 5;
  return rounded.toFixed(1);
}

Graphics.prototype.setFontLECO1976Regular22 = function(scale) {
  // Actual height 22 (21 - 0)
  g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/nA/+cD/5wP/nAAAAAAAAPwAA/gAD+AAPwAAAAAD+AAP4AA/gAAAAAAAAAAAAAcOAP//A//8D//wP//AHDgAcOAP//A//8D//wP//AHDgAAAAAAAAH/jgf+OB/44H/jj8OP/w4//Dj/8OPxw/4HD/gcP+Bw/4AAAAAAAP+AA/8AD/wQOHHA4c8D//wP/8A//gAD4AAfAAH/8A//wP//A84cDjhwIP/AA/8AB/wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8ABwAAAAAAAAD8AAP4AA/gAD8AAAAAAAAAAAEAAD+AB//A///v/D//gB/wABwAAAAAADgAA/wAf/4P8///wf/4AP8AAOAAAAAAAAAyAAHcAAPwAD/gAP/AA/8AA/AAH8AAMwAAAAAAAAAAAAADgAAOAAA4AAf8AD/wAP/AA/8AAOAAA4AADgAAAAAAAAAAD8AAfwAB/AAD8AAAAAAAADgAAOAAA4AADgAAOAAA4AADgAAAAAAAAAADgAAOAAA4AADgAAAAAAAAABwAB/AA/8A//gP/gA/wADwAAIAAAAAAD//wP//A//8D//wOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA4AcDgBwOAHA//8D//wP//A//8AABwAAHAAAcAAAAAAAA+f8D5/wPn/A+f8DhxwOHHA4ccDhxwP/HA/8cD/xwP/HAAAAAAAAOAHA4AcDhxwOHHA4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/wAP/AA/8AD/wAAHAAAcAABwAAHAA//8D//wP//A//8AAAAAAAA/98D/3wP/fA/98DhxwOHHA4ccDhxwOH/A4f8Dh/wOH/AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccDh/wOH/A4f8Dh/wAAAAAAAD4AAPgAA+AADgAAOAAA4AADgAAP//A//8D//wP//AAAAAAAAP//A//8D//wP//A4ccDhxwOHHA4ccD//wP//A//8D//wAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA//8D//wP//A//8AAAAAAAAOA4A4DgDgOAOA4AAAAAAAAOA/A4H8DgfwOA/AAAAAAAAB4AAPwAA/AAD8AAf4ABzgAPPAA8cAHh4AAAAAAAAAAAAHHAAccABxwAHHAAccABxwAHHAAccABxwAHHAAAAAAAAAOHAA4cADzwAPPAAf4AB/gAD8AAPwAAeAAB4AAAAAAAAA+AAD4AAPgAA+ecDh9wOH3A4fcDhwAP/AA/8AD/wAP/AAAAAAAAAP//4///j//+P//44ADjn/OOf845/zjnHOP8c4//zj//OP/84AAAAAAAP//A//8D//wP//A4cADhwAOHAA4cAD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA//8D//wP9/A/j8AAAAAAAA//8D//wP//A//8DgBwOAHA4AcDgBwOAHA4AcDgBwOAHAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA8A8D//wH/+AP/wAf+AAAAAAAAD//wP//A//8D//wOHHA4ccDhxwOHHA4ccDhxwOAHA4AcAAAAAAAA//8D//wP//A//8DhwAOHAA4cADhwAOHAA4cADgAAOAAAAAAD//wP//A//8D//wOAHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA//8D//wP//A//8ABwAAHAAAcAABwAP//A//8D//wP//AAAAAAAAP//A//8D//wP//AAAAAAAAOAHA4AcDgBwOAHA4AcDgBwOAHA//8D//wP//A//8AAAAAAAA//8D//wP//A//8AHwAA/AAP8AB/wAPn/A8f8DB/wIH/AAAAAAAAP//A//8D//wP//AAAcAABwAAHAAAcAABwAAHAAAAAAAAP//A//8D//wP//Af8AAP+AAH/AAD8AAHwAD/AB/wAf8AP+AA//8D//wP//AAAAAAAAP//A//8D//wP//AfwAAfwAAfwAAfwAAfwP//A//8D//wAAAAAAAAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//wP//A//8D//wAAAAAAAD//wP//A//8D//wOHAA4cADhwAOHAA/8AD/wAP/AA/8AAAAAP//A//8D//wP//A4AcDgBwOAHA4AcD//+P//4///j//+AAA4AADgAAAP//A//8D//wP//A4eADh+AOH8A4f4D/3wP/HA/8MD/wQAAAAAAAD/xwP/HA/8cD/xwOHHA4ccDhxwOHHA4f8Dh/wOH/A4f8AAAAAAAA4AADgAAOAAA//8D//wP//A//8DgAAOAAA4AADgAAAAAA//8D//wP//A//8AABwAAHAAAcAABwP//A//8D//wP//AAAADAAAPgAA/wAD/4AB/8AA/8AAfwAB/AA/8Af+AP/AA/wAD4AAMAAA4AAD+AAP/gA//8AH/wAB/AAf8Af/wP/4A/4AD/gAP/4AH/8AB/wAB/AB/8D//wP/gA/gADgAAIABA4AcDwDwPw/Afn4Af+AA/wAD/AA//AH5+A/D8DwDwOAHAgAEAAAAP/AA/8AD/wAP/AAAf8AB/wAH/AAf8D/wAP/AA/8AD/wAAAAAAAADh/wOH/A4f8Dh/wOHHA4ccDhxwOHHA/8cD/xwP/HA/8cAAAAAAAAf//9///3///f//9wAA3AADcAAMAAAOAAA/gAD/wAH/8AB/8AA/wAAPAAAEAAAAHAADcAANwAB3///f//9///wAA"), 32, atob("BwYLDg4UDwYJCQwMBgkGCQ4MDg4ODg4NDg4GBgwMDA4PDg4ODg4NDg4GDQ4MEg8ODQ8ODgwODhQODg4ICQg="), 22+(scale<<8)+(1<<16));
}

Graphics.prototype.setFontLECO1976Regular = function() {
  // Actual height 29 (28 - 0)
  // 1 BPP
  return this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('ABcD+AEgABU4AYUB/AECh4ED/4ECg4EDn4ECgf/AgUfAgPACwP//wbC//gAgYlGAgOAAgX8IQYWCACAnBEgQEdKQJ3CAjpFiABxP7v5PFE4QEVcBvPGwffAjf+j/BAj5xBAkAAOvzWOh5jgO6r+RAhwAOv//4D0CAjkAj4EgIoJ3x54YDAjb0kLIQEdABykdAgh3/O5//4AEcwAEC/wnDAjqzdv4EDdX4EUIsQAORYI2EAjZ3/O6kH8ED+AEB+AEXDoYAEA='))),
    46,
    atob("ChEYFRgYGBgYFxgYCg=="),
    40|65536
  );
}

Graphics.prototype.setFontLECO1976Regular70 = function() {
  // Actual height 50 (49 - 0)
  // 1 BPP
  return this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('AE0D/+ABAsP/wRGn/4BA3/8Ai/AD0cQY/wJw/AA4sf/5WH/gYG/4iFDAIiFDAIABDAwiFDAQiEDAYiEA4YZDDAacDDAitDv4YGCAi1Dh4YGWQJLGHYbOEEQTfFEQKHGEQLnGfBAYGEQIYGAFiCDVwaLEaIaLDQoiLCaIoi9/DwDEQauCgIiEUwUHEQf+DIUfEX4ibaP4ieAFTR/ETDR/ETwAENAYAERYYADRYYAERYYiwn4iGAEyLB/ifDVwfwVw/DVw7CDVwYi88EP/yuDEQOAn/4VwYOBCYSuDBwITCaIYi/ES6ACEQoICEQoABEQwABEXn8EQYArVwQABVwoICVwoDBVwwIBaIwiHenYi/EWP/AAYiDAAgiDAAgiCA4gi/AFZFDwAIDA4SfBAARFD/AIDNAfgEX4TEEQgTDEQg2CEQg2DEX4icQQQAC4CLEAASuFAAP8VwoAB+Ai+AFYxC/0fIo34Io/jNA+PNA3+BgIi3/D0Cv4iD8EP/0BEQmACYMHEQf+CYUfEX4idQoQiFAAIiGAAIiFBAQi/AFQxDIooHEIoYIENAYAENAYi8ehX4g6uG8EfVw2Av4i/ETqLFEQSLHVwwiBVwoi7ADQ4DAAYxBHAQADGII4CAAZUBHAwi9/BoH8AiHwAiGVwIi/ESoAETAIiBAAiLDAAaYCVwIADTAQi8AFaL/EUH4CYOAv4iD8EP/0BEQmACYMHEQf+CYUfEX4ibaP4ieAFRFDVwoICVwoICVwoABVxAi6ehGAn4iF/wTCEQn4CYQi/ETaCCAAKLGAAKuFAASuFAAQi+AFiQDSwIICWYaqBBASzCVQQHBWYbNCEXwAI'))),
    46,
    atob("EBwpJCkpKSkpJikpEA=="),
    70|65536
  );
}

const lockPosition = {x: w-36, y: h-90};

function drawLock() {
  if (Bangle.isLocked()){
    g.setColor('#f00');
    g.drawImage(require("heatshrink").decompress(atob("kEgwYHEgP//+ACY9/BYP+BQ0DBQIAB4ALFj4LD/ALFCgQaCBY3wAYMPBYsHBYvgBYpQCKwILzIIIAGJogLx/CqDBYynDBYzUCbQQLREZYL8U9bpBAAz1BA==")), 
      lockPosition.x, lockPosition.y);
  } else {
    g.setColor('#000');
    g.fillRect(lockPosition.x, lockPosition.y, w, lockPosition.y+36);
  }
}

Bangle.on('lock', function(on) {
  drawLock();
});

function setSlopeColor(challange) {
  if (challange == 1)
    g.setColor('#FFFF00');
  else if (challange == 2) 
    g.setColor('#FF8000');
  else if (challange >= 3)
    g.setColor('#FF0000');
  else if (challange <= -3)
    g.setColor('#00FF80');
  else if (challange == -2)
    g.setColor('#00FF00');
  else if (challange == -1)
    g.setColor('#80FF00');
  else if (challange == 0)
    g.setColor('#80FF00');
}

let slopeY = h-48;

const slopeCount = 3;
const slopeHeight = 48;

function drawSlopeSection(position, start, stop) {
  let localX = Math.round(w/slopeCount * position);
  setSlopeColor(stop);

  g.fillPoly([
    localX, h,
    localX, slopeY+48/2-slopeHeight/2/3*start,
    localX+w/slopeCount, slopeY+48/2-slopeHeight/2/3*stop,
    localX+w/slopeCount, h,
  ]);
}

function drawFullWidthSlope() {
  for (let eIndex = 0; eIndex < slopeCount; eIndex++) {
    let start, stop;

    if (index == 0)
      start = stop = getTimeTable(index).challange;
    else {
      start = getTimeTable(index + eIndex - 1).challange;
      stop = getTimeTable(index + eIndex).challange;
    }

    drawSlopeSection(eIndex, start, stop);
  }
}

function formatSeconds(seconds) {
  return new Date(1000 * seconds).toISOString().substring(14, 19);
}

function stringToSeconds(string) {
  return parseInt(string.substring(0, 2)) * 60 + parseInt(string.substring(3, 5)); 
}

// redraw the screen
function draw() {
  g.setColor('#000');
  g.fillRect(0, 0, w, h);
  g.setColor(settings.fg);

  let elapsed = (new Date().getTime() - start) / 1000;
  drawElapsedTime(elapsed);

  var entry1 = getTimeTable(index);

  g.setFontLECO1976Regular70();
  let y = 30;
  g.setFontAlign(-1, -1);
  g.drawString(entry1.pace, -2, y);
  g.setFontLECO1976Regular22();

  g.setFontAlign(1, -1);
  g.drawString(`${indexToKm(index)} KM`, w, 0);

  g.setFontAlign(-1, -1);
  var entry2 = getTimeTable(index+1);
  if (entry2) {
    y += 52;
    //g.setFontLECO1976Regular22();
    //g.drawString(entry2.time, 0, y);
    g.setFontLECO1976Regular();
    g.drawString(entry2.pace, 0, y+5);

    //drawSlope(entry2.challange);
  }

  drawFullWidthSlope();

  drawLock();
}

// Respond to user input
Bangle.setUI({mode: "custom",
  btn : ()=> {
    //Bangle.setUI(); // remove old handler
    if (timerInterval === undefined) {
      startTimer();
    }
    console.log('Button pressed');
  },
  swipe : (dir) => {
    if (dir > 0) {
      index -= delta;
      if (index < 0)
        index = 0;
      draw();
    } else if (dir < 0) {
      index += delta;
      if (index > TIME_TABLE.length-1)
        index = TIME_TABLE.length-1;
      draw();
    }
  }
});

// clear the screen
g.clear();

console.log('Start');

let start = undefined;

function drawElapsedTime(elapsed) {
  g.setColor('#000');
  g.fillRect(0, 0, w/2, 22);

  g.setColor('#fff');
  g.setFontLECO1976Regular22();
  g.setFontAlign(-1, -1);
  g.drawString(formatSeconds(elapsed), 0, 0);
}

function drawScreenFinish() {
  g.setColor('#000');
  g.fillRect(0, 0, w, h);
  g.setColor(settings.fg);

  let y = 48;
  g.setFontLECO1976Regular22();

  g.setFontAlign(0, -1);
  g.drawString(`YOU ARE`, w/2, y);
  g.drawString(`A WINNER!`, w/2, y+22);

  y += 48;

  g.drawImage(require("heatshrink").decompress(atob("mEwwcBkmSpISLBwQCBpETps06YCGmEECIkatOmzQCHCIlJgUIkGCAQUBmAFCGolJkFhw0YAQemjFgKwYCDpu27dtAQlshIODwBgBvPnzwCFuBtCCIMNmnShojHsBuBoAmBtJBBhIjHuILBtEJkVAFAIjD2gjDBYUMgMgsAmBwIgC4EeI4ZEBtOBklMCIONEYWE4YjCKwQOCEYWRIIeAuIFBsQRBBwQUCyM27EAmnQgE27cCEYg4CEYOcagVgg+cCIJWDxshkmQEYKVBRIIjDkdAEwOB0K5Bk+eagOagIpBiVJkVgCIUwCIIdBsIjBSoPYCIMDNwWR0ARBg5rB00aEYkYLgWQmEEyUm7dBkEDEYPAiVIyARCyUGgAjCuEHgAjBzESogCBCIUEDQNG7dsJQNNEYILDCIOTg2YgVHfYsAyAvBEYcAycAoD4DAQPAO4IREg8asEGEY1hwEcCIckwFNkAjE2kDpkE0AjEzkB00eEYfmFgILBEYmygCMBEYegwEJlgjFRgMAgAjDwAFCzmSEYnIhMkWAPboAFBhcs2ARDEYQLBwBBBcYQjLbQKtDEYJHHCIRlEEYRrFEYc2EZcAEZFxo4jEgEEgAjHgEIdIpoBEY5uBCIgCFEYgLGAQrRFARYjk6AROyAjBgQRMgEBm3bgCGBCJNIjjRBz1x4UACJNE7dt2wCC4ARJg0YsOGAQZcJIQIAFCIg=")), 
      w/2-24, y);

  let elapsed = (new Date().getTime() - start) / 1000;
  drawElapsedTime(elapsed);

  drawLock();
}

let timerInterval = undefined;
function startTimer() {
  start = new Date().getTime();

  timerInterval = setInterval(function() {
    if (index >= TIME_TABLE.length -1) {
      drawScreenFinish();
      lockPosition.y = h-70;
      return;
    }

    let elapsed = (new Date().getTime() - start) / 1000;
    drawElapsedTime(elapsed);
    
    let entry = getTimeTable(index+1);
    if (entry && elapsed > stringToSeconds(entry.time)) {
      if (getTimeTable(index).pace != entry.pace)
        Bangle.buzz(500);

      index++;
      draw();
    }
  }, 500);
}

// First draw...
draw();