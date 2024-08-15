require("FontTeletext5x9Ascii").add(Graphics);

const h = g.getHeight();
const w = g.getWidth();
const TIME_TABLE = [
  {
    "distance": 0,
    "challange": 2,
    "pace": "05:00",
    "time": "00:00"
  },
  {
    "distance": 0.2,
    "challange": 2,
    "pace": "05:00",
    "time": "01:00"
  },
  {
    "distance": 0.4,
    "challange": 2,
    "pace": "05:00",
    "time": "02:00"
  },
  {
    "distance": 0.6,
    "challange": 1,
    "pace": "04:45",
    "time": "03:00"
  },
  {
    "distance": 0.8,
    "challange": -1,
    "pace": "04:15",
    "time": "03:57"
  },
  {
    "distance": 1,
    "challange": -1,
    "pace": "04:15",
    "time": "04:48"
  },
  {
    "distance": 1.2,
    "challange": -1,
    "pace": "04:15",
    "time": "05:39"
  },
  {
    "distance": 1.4,
    "challange": -1,
    "pace": "04:15",
    "time": "06:30"
  },
  {
    "distance": 1.6,
    "challange": -2,
    "pace": "04:00",
    "time": "07:21"
  },
  {
    "distance": 1.8,
    "challange": -2,
    "pace": "04:00",
    "time": "08:09"
  },
  {
    "distance": 2,
    "challange": -1,
    "pace": "04:15",
    "time": "08:57"
  },
  {
    "distance": 2.2,
    "challange": -1,
    "pace": "04:15",
    "time": "09:48"
  },
  {
    "distance": 2.4,
    "challange": -1,
    "pace": "04:15",
    "time": "10:39"
  },
  {
    "distance": 2.6,
    "challange": -1,
    "pace": "04:15",
    "time": "11:30"
  },
  {
    "distance": 2.8,
    "challange": -1,
    "pace": "04:15",
    "time": "12:21"
  },
  {
    "distance": 3,
    "challange": 1,
    "pace": "04:45",
    "time": "13:12"
  },
  {
    "distance": 3.2,
    "challange": 1,
    "pace": "04:45",
    "time": "14:09"
  },
  {
    "distance": 3.4,
    "challange": 0,
    "pace": "04:30",
    "time": "15:06"
  },
  {
    "distance": 3.6,
    "challange": 1,
    "pace": "04:45",
    "time": "16:00"
  },
  {
    "distance": 3.8,
    "challange": 2,
    "pace": "05:00",
    "time": "16:57"
  },
  {
    "distance": 4,
    "challange": 3,
    "pace": "05:15",
    "time": "17:57"
  },
  {
    "distance": 4.2,
    "challange": 4,
    "pace": "05:30",
    "time": "19:00"
  },
  {
    "distance": 4.4,
    "challange": 1,
    "pace": "04:45",
    "time": "20:06"
  },
  {
    "distance": 4.6,
    "challange": -1,
    "pace": "04:15",
    "time": "21:03"
  },
  {
    "distance": 4.8,
    "challange": -2,
    "pace": "04:00",
    "time": "21:54"
  },
  {
    "distance": 5,
    "challange": -2,
    "pace": "04:00",
    "time": "22:42"
  },
  {
    "distance": 5.2,
    "challange": -1,
    "pace": "04:15",
    "time": "23:30"
  },
  {
    "distance": 5.4,
    "challange": 0,
    "pace": "04:30",
    "time": "24:21"
  },
  {
    "distance": 5.6,
    "challange": -1,
    "pace": "04:15",
    "time": "25:15"
  },
  {
    "distance": 5.8,
    "challange": -1,
    "pace": "04:15",
    "time": "26:06"
  },
  {
    "distance": 6,
    "challange": 0,
    "pace": "04:30",
    "time": "26:57"
  },
  {
    "distance": 6.2,
    "challange": 0,
    "pace": "04:30",
    "time": "27:51"
  },
  {
    "distance": 6.4,
    "challange": -1,
    "pace": "04:15",
    "time": "28:45"
  },
  {
    "distance": 6.6,
    "challange": -2,
    "pace": "04:00",
    "time": "29:36"
  },
  {
    "distance": 6.8,
    "challange": 0,
    "pace": "04:30",
    "time": "30:24"
  },
  {
    "distance": 7,
    "challange": 1,
    "pace": "04:45",
    "time": "31:18"
  },
  {
    "distance": 7.2,
    "challange": 1,
    "pace": "04:45",
    "time": "32:15"
  },
  {
    "distance": 7.4,
    "challange": -1,
    "pace": "04:15",
    "time": "33:12"
  },
  {
    "distance": 7.6,
    "challange": 1,
    "pace": "04:45",
    "time": "34:03"
  },
  {
    "distance": 7.8,
    "challange": 1,
    "pace": "04:45",
    "time": "35:00"
  },
  {
    "distance": 8,
    "challange": 0,
    "pace": "04:30",
    "time": "35:57"
  },
  {
    "distance": 8.2,
    "challange": 0,
    "pace": "04:30",
    "time": "36:51"
  },
  {
    "distance": 8.4,
    "challange": -1,
    "pace": "04:15",
    "time": "37:45"
  },
  {
    "distance": 8.6,
    "challange": 2,
    "pace": "05:00",
    "time": "38:36"
  },
  {
    "distance": 8.8,
    "challange": 2,
    "pace": "05:00",
    "time": "39:36"
  },
  {
    "distance": 9,
    "challange": 0,
    "pace": "04:30",
    "time": "40:36"
  },
  {
    "distance": 9.2,
    "challange": -1,
    "pace": "04:15",
    "time": "41:30"
  },
  {
    "distance": 9.4,
    "challange": -1,
    "pace": "04:15",
    "time": "42:21"
  },
  {
    "distance": 9.6,
    "challange": -1,
    "pace": "04:15",
    "time": "43:12"
  },
  {
    "distance": 9.8,
    "challange": 0,
    "pace": "04:30",
    "time": "44:03"
  },
  {
    "distance": 10,
    "challange": -1,
    "pace": "04:30",
    "time": "44:57"
  }
];
const delta = 1;

let settings = {'bg': '#0d0', 'fg': '#fff'};
var index = 0;

function getTimeTable(index) {
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

Graphics.prototype.setFontLECO1976Regular66 = function() {
  // Actual height 47 (46 - 0)
  // 1 BPP
  return this.setFontCustom(
    E.toString(require('heatshrink').decompress(atob('AEkP/gHFgf/CA3/4AHFn/wEG9/EAwAZ8AxG/AHFg/+JI3/wBZF/4gFv//EAv//4gEMAIABEAcHA4QgDFwIABEAYuBAAKDDFwIPFAwQfDFwarEA4Y3DE4RHEG4SyEEARfHN4ogBXIqHHgaXGgDhGgE4bD4APQYhlDA4hOCVYaNDXYZ2DEHTyEEAYHCj4gDXgUHEAfwAYMBEH4gFUn4gRv4gGAFDF/EBbF/EDAAEMQQAEQYYADQYYADQYYgtAEh/Bj6DGx6kG8akG/CkG/yeCEFvDEAwaB8CkD//An/4Ugc/+EP/ykDh/8DQOAUgQg/EAZoCEAiJCEAiJCEAiJDEGkfA4P8EAYAoUgQ1CUggDBUgoDBUgoYCYoogHc3Ag/EDL3CAAIgDAAYgDAAYgDBAggzv4gGAFBBDI4IABIIZHBAARHFMQhHEEGKDCEAgaCRIwaBEAY7DEAg7CEH4gGQYR9EQYZ9DQYZ9EA4g7CEGEBEA4AoIIX+AYJBFx5iG8ZiG/BiGEGPhEAnAcwMHEAfwh/+TAIgC/gaBwF/EAYaB8EfEH4gHPoQgEOoQgFAAIgFTwQgyg/8NAIgDAFIuCIIoIEMQQHEMQYADMQYg5cxP4g6kF/yeBYouAv4g/EA6DFEAKDFEAKDFEASDHEFsf+EHEAgAYEwIcFI4I9BAAZBBHoQADHoYg2LQyDBEA3wA4qkBA4og/EBYADQ4TsCcwiDBAAaHBEAIADVAQgwAFBi5EEP8DQOAv4gDDQPgj4gD4E//EHEAfwh/+gIg/EAqk/ECN/EAwAoIIakFI4SkEI4SkEI4SkHEGzmH/gaBEAoaBEAvAn4g/EA73EQYp9CQYh9CQYieCEGRuBEAwApUoKYDAAKrBTAYDBVYQTDBgROBXIIgDJwIgtQgIDBj4gDAA4'))),
    46,
    atob("EBsnIicnJycnJCcnEA=="),
    66|65536
  );
}

function drawLock() {
  if (Bangle.isLocked()){
    g.setColor('#f00');
    g.drawImage(require("heatshrink").decompress(atob("kEgwYHEgP//+ACY9/BYP+BQ0DBQIAB4ALFj4LD/ALFCgQaCBY3wAYMPBYsHBYvgBYpQCKwILzIIIAGJogLx/CqDBYynDBYzUCbQQLREZYL8U9bpBAAz1BA==")), 
      w-36, h-36);
  } else {
    g.setColor('#000');
    g.fillRect(w-36, h-36, w, h);
  }
}

Bangle.on('lock', function(on) {
  drawLock();
});

let slopeX = 70;
let slopeY = h-72;

function setSlopeColor(challange) {
  if (Math.abs(challange) == 1)
    g.setColor('#0F0');
  else if (Math.abs(challange) == 2) 
    g.setColor('#00F');
  else if (Math.abs(challange) >= 3)
    g.setColor('#F00');
}

function drawSlope(challange) {
  if (challange == 0) {
    g.setColor('#000');
    g.fillRect(w-48, h/2, w, h/2+48);
  } else {
    if (challange > 0) {
      g.setColor('#fff');
      g.fillPoly([
        slopeX, slopeY+24,
        slopeX+48, slopeY+24,
        slopeX+48, slopeY
      ]);

      setSlopeColor(challange);
      g.fillPoly([
        slopeX+8, slopeY+22,
        slopeX+46, slopeY+22,
        slopeX+46, slopeY+4,
      ]);
    } else {
      g.setColor('#fff');
      g.fillPoly([
        slopeX, slopeY,
        slopeX, slopeY+24,
        slopeX+48, slopeY+24
      ]);

      setSlopeColor(challange);
      g.fillPoly([
        slopeX+2, slopeY+4,
        slopeX+2, slopeY+22,
        slopeX+40, slopeY+22,
      ]);
    }
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

  g.setFontLECO1976Regular66();
  let y = 30;
  g.setFontAlign(-1, -1);
  g.drawString(entry1.pace, 0, y);
  g.setFontLECO1976Regular22();

  g.setFontAlign(1, -1);
  g.drawString(`${indexToKm(index)} KM`, w, 0);

  g.setFontAlign(-1, -1);
  var entry2 = getTimeTable(index+1);
  if (entry2) {
    y += 80;
    g.setFontLECO1976Regular22();
    g.drawString(entry2.time, 0, y);
    g.setFontLECO1976Regular();
    g.drawString(entry2.pace, 0, y+30);

    drawSlope(entry2.challange);
  }

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
      if (index > 48)
        index = 48;
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
      return;
    }

    let elapsed = (new Date().getTime() - start) / 1000;
    drawElapsedTime(elapsed);
    
    let entry = getTimeTable(index+1);
    if (entry && elapsed > stringToSeconds(entry.time)) {
      index++;
      draw();
      Bangle.buzz(500);
    }
  }, 500);
}

// First draw...
draw();