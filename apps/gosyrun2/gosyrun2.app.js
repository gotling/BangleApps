require("FontTeletext5x9Ascii").add(Graphics);

const TESTING = false;

const h = g.getHeight();
const w = g.getWidth();
const TIME_TABLE = [
    {
        "distance": 0.0,
        "time": "00:00",
        "pace": "05:00",
        "altitude": 25,
        "challange": 0
    },
    {
        "distance": 0.1,
        "time": "00:30",
        "pace": "05:00",
        "altitude": 27,
        "challange": 0
    },
    {
        "distance": 0.2,
        "time": "01:00",
        "pace": "05:00",
        "altitude": 29,
        "challange": 0
    },
    {
        "distance": 0.3,
        "time": "01:30",
        "pace": "04:15",
        "altitude": 31,
        "challange": 0
    },
    {
        "distance": 0.4,
        "time": "01:55",
        "pace": "04:15",
        "altitude": 32,
        "challange": 0
    },
    {
        "distance": 0.5,
        "time": "02:20",
        "pace": "04:15",
        "altitude": 30,
        "challange": 0
    },
    {
        "distance": 0.6,
        "time": "02:45",
        "pace": "04:15",
        "altitude": 28,
        "challange": 0
    },
    {
        "distance": 0.7,
        "time": "03:10",
        "pace": "04:07",
        "altitude": 25,
        "challange": -1
    },
    {
        "distance": 0.8,
        "time": "03:34",
        "pace": "04:15",
        "altitude": 24,
        "challange": 0
    },
    {
        "distance": 0.9,
        "time": "03:59",
        "pace": "04:15",
        "altitude": 24,
        "challange": 0
    },
    {
        "distance": 1.0,
        "time": "04:24",
        "pace": "04:15",
        "altitude": 23,
        "challange": 0
    },
    {
        "distance": 1.1,
        "time": "04:49",
        "pace": "04:15",
        "altitude": 23,
        "challange": 0
    },
    {
        "distance": 1.2,
        "time": "05:14",
        "pace": "04:15",
        "altitude": 23,
        "challange": 0
    },
    {
        "distance": 1.3,
        "time": "05:39",
        "pace": "04:15",
        "altitude": 22,
        "challange": 0
    },
    {
        "distance": 1.4,
        "time": "06:04",
        "pace": "04:15",
        "altitude": 21,
        "challange": 0
    },
    {
        "distance": 1.5,
        "time": "06:29",
        "pace": "04:15",
        "altitude": 20,
        "challange": 0
    },
    {
        "distance": 1.6,
        "time": "06:54",
        "pace": "04:00",
        "altitude": 16,
        "challange": -2
    },
    {
        "distance": 1.7,
        "time": "07:18",
        "pace": "04:00",
        "altitude": 12,
        "challange": -2
    },
    {
        "distance": 1.8,
        "time": "07:42",
        "pace": "03:52",
        "altitude": 6,
        "challange": -3
    },
    {
        "distance": 1.9,
        "time": "08:05",
        "pace": "04:07",
        "altitude": 3,
        "challange": -1
    },
    {
        "distance": 2.0,
        "time": "08:29",
        "pace": "04:15",
        "altitude": 2,
        "challange": 0
    },
    {
        "distance": 2.1,
        "time": "08:54",
        "pace": "04:15",
        "altitude": 2,
        "challange": 0
    },
    {
        "distance": 2.2,
        "time": "09:19",
        "pace": "04:15",
        "altitude": 2,
        "challange": 0
    },
    {
        "distance": 2.3,
        "time": "09:44",
        "pace": "04:15",
        "altitude": 2,
        "challange": 0
    },
    {
        "distance": 2.4,
        "time": "10:09",
        "pace": "04:15",
        "altitude": 2,
        "challange": 0
    },
    {
        "distance": 2.5,
        "time": "10:34",
        "pace": "04:15",
        "altitude": 2,
        "challange": 0
    },
    {
        "distance": 2.6,
        "time": "10:59",
        "pace": "04:15",
        "altitude": 2,
        "challange": 0
    },
    {
        "distance": 2.7,
        "time": "11:24",
        "pace": "04:15",
        "altitude": 2,
        "challange": 0
    },
    {
        "distance": 2.8,
        "time": "11:49",
        "pace": "04:15",
        "altitude": 2,
        "challange": 0
    },
    {
        "distance": 2.9,
        "time": "12:14",
        "pace": "04:15",
        "altitude": 4,
        "challange": 0
    },
    {
        "distance": 3.0,
        "time": "12:39",
        "pace": "04:37",
        "altitude": 7,
        "challange": 1
    },
    {
        "distance": 3.1,
        "time": "13:06",
        "pace": "04:37",
        "altitude": 10,
        "challange": 1
    },
    {
        "distance": 3.2,
        "time": "13:33",
        "pace": "04:15",
        "altitude": 12,
        "challange": 0
    },
    {
        "distance": 3.3,
        "time": "13:58",
        "pace": "04:37",
        "altitude": 15,
        "challange": 1
    },
    {
        "distance": 3.4,
        "time": "14:25",
        "pace": "04:15",
        "altitude": 16,
        "challange": 0
    },
    {
        "distance": 3.5,
        "time": "14:50",
        "pace": "03:52",
        "altitude": 9,
        "challange": -3
    },
    {
        "distance": 3.6,
        "time": "15:13",
        "pace": "04:15",
        "altitude": 10,
        "challange": 0
    },
    {
        "distance": 3.7,
        "time": "15:38",
        "pace": "05:00",
        "altitude": 14,
        "challange": 2
    },
    {
        "distance": 3.8,
        "time": "16:08",
        "pace": "04:15",
        "altitude": 16,
        "challange": 0
    },
    {
        "distance": 3.9,
        "time": "16:33",
        "pace": "05:22",
        "altitude": 24,
        "challange": 3
    },
    {
        "distance": 4.0,
        "time": "17:05",
        "pace": "05:00",
        "altitude": 29,
        "challange": 2
    },
    {
        "distance": 4.1,
        "time": "17:35",
        "pace": "05:45",
        "altitude": 39,
        "challange": 4
    },
    {
        "distance": 4.2,
        "time": "18:09",
        "pace": "05:22",
        "altitude": 46,
        "challange": 3
    },
    {
        "distance": 4.3,
        "time": "18:41",
        "pace": "04:07",
        "altitude": 43,
        "challange": -1
    },
    {
        "distance": 4.4,
        "time": "19:05",
        "pace": "04:00",
        "altitude": 39,
        "challange": -2
    },
    {
        "distance": 4.5,
        "time": "19:29",
        "pace": "04:00",
        "altitude": 35,
        "challange": -2
    },
    {
        "distance": 4.6,
        "time": "19:53",
        "pace": "04:07",
        "altitude": 32,
        "challange": -1
    },
    {
        "distance": 4.7,
        "time": "20:17",
        "pace": "04:07",
        "altitude": 29,
        "challange": -1
    },
    {
        "distance": 4.8,
        "time": "20:41",
        "pace": "04:15",
        "altitude": 27,
        "challange": 0
    },
    {
        "distance": 4.9,
        "time": "21:06",
        "pace": "04:15",
        "altitude": 25,
        "challange": 0
    },
    {
        "distance": 5.0,
        "time": "21:31",
        "pace": "04:15",
        "altitude": 24,
        "challange": 0
    },
    {
        "distance": 5.1,
        "time": "21:56",
        "pace": "04:15",
        "altitude": 23,
        "challange": 0
    },
    {
        "distance": 5.2,
        "time": "22:21",
        "pace": "04:15",
        "altitude": 23,
        "challange": 0
    },
    {
        "distance": 5.3,
        "time": "22:46",
        "pace": "05:00",
        "altitude": 28,
        "challange": 2
    },
    {
        "distance": 5.4,
        "time": "23:16",
        "pace": "04:15",
        "altitude": 28,
        "challange": 0
    },
    {
        "distance": 5.5,
        "time": "23:41",
        "pace": "04:15",
        "altitude": 29,
        "challange": 0
    },
    {
        "distance": 5.6,
        "time": "24:06",
        "pace": "04:15",
        "altitude": 31,
        "challange": 0
    },
    {
        "distance": 5.7,
        "time": "24:31",
        "pace": "04:00",
        "altitude": 27,
        "challange": -2
    },
    {
        "distance": 5.8,
        "time": "24:55",
        "pace": "04:15",
        "altitude": 26,
        "challange": 0
    },
    {
        "distance": 5.9,
        "time": "25:20",
        "pace": "04:15",
        "altitude": 26,
        "challange": 0
    },
    {
        "distance": 6.0,
        "time": "25:45",
        "pace": "04:15",
        "altitude": 26,
        "challange": 0
    },
    {
        "distance": 6.1,
        "time": "26:10",
        "pace": "04:15",
        "altitude": 28,
        "challange": 0
    },
    {
        "distance": 6.2,
        "time": "26:35",
        "pace": "04:15",
        "altitude": 29,
        "challange": 0
    },
    {
        "distance": 6.3,
        "time": "27:00",
        "pace": "04:15",
        "altitude": 27,
        "challange": 0
    },
    {
        "distance": 6.4,
        "time": "27:25",
        "pace": "04:00",
        "altitude": 23,
        "challange": -2
    },
    {
        "distance": 6.5,
        "time": "27:49",
        "pace": "04:00",
        "altitude": 19,
        "challange": -2
    },
    {
        "distance": 6.6,
        "time": "28:13",
        "pace": "04:07",
        "altitude": 16,
        "challange": -1
    },
    {
        "distance": 6.7,
        "time": "28:37",
        "pace": "04:15",
        "altitude": 17,
        "challange": 0
    },
    {
        "distance": 6.8,
        "time": "29:02",
        "pace": "04:15",
        "altitude": 17,
        "challange": 0
    },
    {
        "distance": 6.9,
        "time": "29:27",
        "pace": "04:15",
        "altitude": 18,
        "challange": 0
    },
    {
        "distance": 7.0,
        "time": "29:52",
        "pace": "04:15",
        "altitude": 20,
        "challange": 0
    },
    {
        "distance": 7.1,
        "time": "30:17",
        "pace": "04:15",
        "altitude": 21,
        "challange": 0
    },
    {
        "distance": 7.2,
        "time": "30:42",
        "pace": "04:15",
        "altitude": 22,
        "challange": 0
    },
    {
        "distance": 7.3,
        "time": "31:07",
        "pace": "04:15",
        "altitude": 21,
        "challange": 0
    },
    {
        "distance": 7.4,
        "time": "31:32",
        "pace": "04:15",
        "altitude": 20,
        "challange": 0
    },
    {
        "distance": 7.5,
        "time": "31:57",
        "pace": "04:15",
        "altitude": 22,
        "challange": 0
    },
    {
        "distance": 7.6,
        "time": "32:22",
        "pace": "04:15",
        "altitude": 23,
        "challange": 0
    },
    {
        "distance": 7.7,
        "time": "32:47",
        "pace": "04:15",
        "altitude": 23,
        "challange": 0
    },
    {
        "distance": 7.8,
        "time": "33:12",
        "pace": "04:37",
        "altitude": 26,
        "challange": 1
    },
    {
        "distance": 7.9,
        "time": "33:39",
        "pace": "04:15",
        "altitude": 27,
        "challange": 0
    },
    {
        "distance": 8.0,
        "time": "34:04",
        "pace": "04:15",
        "altitude": 26,
        "challange": 0
    },
    {
        "distance": 8.1,
        "time": "34:29",
        "pace": "04:15",
        "altitude": 26,
        "challange": 0
    },
    {
        "distance": 8.2,
        "time": "34:54",
        "pace": "04:15",
        "altitude": 26,
        "challange": 0
    },
    {
        "distance": 8.3,
        "time": "35:19",
        "pace": "04:15",
        "altitude": 25,
        "challange": 0
    },
    {
        "distance": 8.4,
        "time": "35:44",
        "pace": "04:37",
        "altitude": 28,
        "challange": 1
    },
    {
        "distance": 8.5,
        "time": "36:11",
        "pace": "05:22",
        "altitude": 34,
        "challange": 3
    },
    {
        "distance": 8.6,
        "time": "36:43",
        "pace": "05:22",
        "altitude": 40,
        "challange": 3
    },
    {
        "distance": 8.7,
        "time": "37:15",
        "pace": "04:37",
        "altitude": 43,
        "challange": 1
    },
    {
        "distance": 8.8,
        "time": "37:42",
        "pace": "03:45",
        "altitude": 34,
        "challange": -4
    },
    {
        "distance": 8.9,
        "time": "38:04",
        "pace": "03:52",
        "altitude": 28,
        "challange": -3
    },
    {
        "distance": 9.0,
        "time": "38:27",
        "pace": "04:15",
        "altitude": 28,
        "challange": 0
    },
    {
        "distance": 9.1,
        "time": "38:52",
        "pace": "04:15",
        "altitude": 29,
        "challange": 0
    },
    {
        "distance": 9.2,
        "time": "39:17",
        "pace": "04:00",
        "altitude": 25,
        "challange": -2
    },
    {
        "distance": 9.3,
        "time": "39:41",
        "pace": "04:07",
        "altitude": 22,
        "challange": -1
    },
    {
        "distance": 9.4,
        "time": "40:05",
        "pace": "04:15",
        "altitude": 21,
        "challange": 0
    },
    {
        "distance": 9.5,
        "time": "40:30",
        "pace": "04:15",
        "altitude": 21,
        "challange": 0
    },
    {
        "distance": 9.6,
        "time": "40:55",
        "pace": "04:15",
        "altitude": 20,
        "challange": 0
    },
    {
        "distance": 9.7,
        "time": "41:20",
        "pace": "04:15",
        "altitude": 19,
        "challange": 0
    },
    {
        "distance": 9.8,
        "time": "41:45",
        "pace": "04:15",
        "altitude": 19,
        "challange": 0
    },
    {
        "distance": 9.9,
        "time": "42:10",
        "pace": "04:15",
        "altitude": 20,
        "challange": 0
    },
    {
        "distance": 10.0,
        "time": "42:35",
        "pace": "04:15",
        "altitude": 20,
        "challange": 0
    }
]
;

const sectionsPerKm = 10;

var totalElapsed = 0;
var index = 0;

let settings = {'bg': '#0d0', 'fg': '#fff'};
var adjustment = 0;

function getTimeTable(index) {
  let i = index;
  if (i >= TIME_TABLE.length)
    return TIME_TABLE[TIME_TABLE.length - 1];
  else if (i < 0)
    return TIME_TABLE[0];

  return TIME_TABLE[i];
}

function indexToKm(i) {
  let rounded = i / sectionsPerKm;
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
    g.setColor('#ffaa00');
  else if (challange == 3)
    g.setColor('#ff6200');
  else if (challange >= 4)
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

const slopeCount = 5;
const slopeAmplitudes = 4
const slopeHeight = 48;

function drawSlopeSection(position, start, stop) {
  let localX = Math.round(w/slopeCount * position);
  setSlopeColor(stop);

  g.fillPoly([
    localX, h,
    localX, slopeY+48/2-slopeHeight/2/slopeAmplitudes*start,
    localX+w/slopeCount, slopeY+48/2-slopeHeight/2/slopeAmplitudes*stop,
    localX+w/slopeCount, h,
  ]);
}

function drawFullWidthSlope() {
  for (let eIndex = 0; eIndex < slopeCount; eIndex++) {
    let start, stop;

    if (index + eIndex == 0)
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

function drawState() {
  let stateString = '';

  if (start && timerInterval === undefined) {
    stateString = 'Paused';
  } else if (start === undefined) {
    stateString = 'Stopped';
  }

  //g.setFontLECO1976Regular22();
  g.setFont("Vector", 24);
  g.setColor(settings.fg);
  g.setFontAlign(0, 1);
  g.drawString(`${stateString}`, w/2, h-24, true);
}

// redraw the screen
function draw() {
  g.setColor('#000');
  g.fillRect(0, 0, w, h);
  g.setColor(settings.fg);

  let elapsed = (new Date().getTime() - start + totalElapsed) / 1000;
  if (TESTING)
      elapsed *= 10;
  
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

  
  if (entry2) {
      // Time next section
    g.setColor(settings.fg);
    g.setFontLECO1976Regular22();
    g.setFontAlign(-1, -1);
    if (adjustment > 0) {
      g.drawString(`+${adjustment}`, 0, y + 40);
    } else if (adjustment < 0) {
      g.drawString(`${adjustment}`, 0, y + 40);
    } else {
      g.drawString(`-`, 0, y + 40);
    }
  }


  drawState();
}

// Respond to user input
Bangle.setUI({mode: "custom",
  btn : ()=> {
    //Bangle.setUI(); // remove old handler
    if (timerInterval === undefined) {
      startTimer();
    } else {
      // Pause the timer and save the elapsed time
      clearInterval(timerInterval);
      timerInterval = undefined;
      let elapsed = (new Date().getTime() - start);
      if (TESTING)
        elapsed *= 10;

      start = new Date().getTime();

      totalElapsed += elapsed;
    }

    draw();
  },
  swipe : (dir) => {
    if (dir > 0) {
      // We are behind the expected time

      let elapsed = Math.round((new Date().getTime() - start + totalElapsed) / 1000);
      let entry = getTimeTable(index - 1);
      let entryTime = stringToSeconds(entry.time);
      adjustment = entryTime - elapsed;
      if (index > 0)
        index--;

      console.log(`Swipe right, index: ${index}, elapsed: ${elapsed}, entryTime: ${entryTime}, diff: ${adjustment}`);

      draw();
    } else if (dir < 0) {
      // We are further along than expected

      let elapsed = Math.round((new Date().getTime() - start + totalElapsed) / 1000);
      let entry = getTimeTable(index + 1);
      let entryTime = stringToSeconds(entry.time);

      adjustment = entryTime - elapsed;

      console.log(`Swipe left, index: ${index}, elapsed: ${elapsed}, entryTime: ${entryTime}, diff: ${adjustment}`);

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

  let elapsed = (new Date().getTime() - start + totalElapsed) / 1000;
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

    let elapsed = (new Date().getTime() - start + totalElapsed) / 1000;
    if (TESTING)
      elapsed *= 10;

    drawElapsedTime(elapsed);
    
    let entry = getTimeTable(index+1);
    // How to handle adjustment?
    if (entry && (elapsed + adjustment) > stringToSeconds(entry.time)) {
      if (getTimeTable(index).pace != entry.pace)
        if (!TESTING)
          Bangle.buzz(500);

      index++;
      draw();
    }
  }, 500);
}

// First draw...
draw();