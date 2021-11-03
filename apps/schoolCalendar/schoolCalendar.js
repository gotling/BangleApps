require("Font8x12").add(Graphics);
require("Font7x11Numeric7Seg", 2).add(Graphics);

let nIntervId;

function redrawScreen() {
  layout.render(layout.background);
  layout.render(layout.buttons);
  draw();
}

function updateDay(ffunction,day){
  if(ffunction == 1){
    switch (day) {
    case 0:
      return "Sunday";
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    }
    return day;
  }else if(ffunction == 2){
    switch (day) {
    case 0:
      return "Sun";
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
    }
    return day;
  }else if(ffunction == 3){
    switch (day) {
    case 0:
      return "S";
    case 1:
      day = "M";
      break;
    case 2:
      day = "T";
      break;
    case 3:
      day = "W";
      break;
    case 4:
      day = "R";
      break;
    case 5:
      day = "F";
      break;
    case 6:
      day = "S";
    }
    return day;
  }
}

function getScheduleTable() {
  let schedule = [
    //Sunday

    //Monday:
    {cn: "Biblical Theology", dow:1, sh: 8, sm: 10, eh:9, em: 5, r:"207", t:"Mr. Besaw"},
    {cn: "English", dow:1, sh: 9, sm: 5, eh:10, em: 0, t:"Dr. Wong"},
    {cn: "Break", dow:1, sh: 10, sm: 0, eh:10, em: 10, t:""},
    {cn: "MS Robotics", dow:1, sh: 10, sm: 10, eh:11, em: 0, r:"211", t:"Mr. Broyles"},
    {cn: "MS Physical Education Boys", dow:1, sh: 11, sm: 0, eh:11, em: 50, r:"GYM", t:"Mr. Mendezona"},
    {cn: "Office Hours Besaw/Nunez", dow:1, sh: 11, sm: 50, eh:12, em: 25, r:"203", t:"Besaw/Nunez"},
    {cn: "Lunch", dow:1, sh: 12, sm: 25, eh:12, em: 50, r:"Commence or Advisory", t:""},
    {cn: "Activity Period", dow:1, sh: 12, sm: 50, eh:13, em: 0, r:"Outside", t:""},
    {cn: "Latin", dow:1, sh: 13, sm: 5, eh:14, em: 0, r:"208", t:"Mrs.Scrivner"},
    {cn: "Algebra 1", dow:1, sh: 14, sm: 0, eh:15, em: 0, r:"204", t:"Mr. Benson"},

    //Tuesday:
    {cn: "Logic", dow:2, sh: 8, sm: 10, eh:9, em: 0, r:"208", t:"Mrs.Scrivner"},
    {cn: "Algebra 1", dow:2, sh: 9, sm: 0, eh:10, em: 0, r:"204", t:"Mr. Benson"},
    {cn: "Chapel", dow:2, sh: 10, sm: 0, eh:10, em: 25, r:"Advisory", t:""},
    {cn: "Break", dow:2, sh: 10, sm: 25, eh:10, em: 35, r:"Outside", t:""},
    {cn: "Advisory Besaw", dow:2, sh: 10, sm: 35, eh:11, em: 0, r:"207", t:"Mr. Besaw"},
    {cn: "MS Robotics", dow:2, sh: 11, sm: 0, eh:11, em: 50, r:"211", t:"Mr. Broyles"},
    {cn: "Office Hours Besaw/Nunez", dow:2, sh: 11, sm: 50, eh:12, em: 25, r:"203", t:" Besaw/Nunez"},
    {cn: "Lunch", dow:2, sh: 12, sm: 25, eh:12, em: 50, r:"Commence or Advisory", t:""},
    {cn: "Activity Period", dow:2, sh: 12, sm: 50, eh:13, em: 5, r:"Outside", t:""},
    {cn: "Medieval Western Civilization", dow:2, sh: 13, sm: 5, eh:14, em: 0, r:"205", t:"Mr. Khule"},
    {cn: "Introductory Biology and Epidemiology", dow:2, sh: 14, sm: 0, eh:15, em: 0, r:"202", t:"Mrs. Brown"},

    //Wensday:
    {cn: "English", dow:3, sh: 9, sm: 0, eh:9, em: 55, r:"206", t:"Dr. Wong"},
    {cn: "Biblical Theology", dow:3, sh: 9, sm: 55, eh:10, em: 50, r:"207", t:"Mr. Besaw"},
    {cn: "Break", dow:3, sh: 10, sm: 50, eh:11, em: 0, r:"Outside", t:"_"},
    {cn: "MS Physical Education Boys", dow:3, sh: 11, sm: 0, eh:11, em: 50, r:"GYM", t:"Mr. Mendezona"},
    {cn: "Office Hours Besaw/Nunez", dow:3, sh: 11, sm: 50, eh:12, em: 25, r:"203", t:" Besaw/Nunez"},
    {cn: "Lunch", dow:3, sh: 12, sm: 25, eh:12, em: 50, r:"Commence or Advisory", t:""},
    {cn: "Activity Period", dow:2, sh: 12, sm: 50, eh:13, em: 0, r:"Outside", t:""},
    {cn: "Introductory Biology and Epidemiology", dow:3, sh: 13, sm: 0, eh:14, em: 0, r:"202", t:"Mrs. Brown"},
    {cn: "Medieval Western Civilization", dow:3, sh: 14, sm: 0, eh:15, em: 0, r:"205", t:"Mr. Khule"},


    //Thursday:
    {cn: "Algebra 1", dow:4, sh: 8, sm: 10, eh:9, em: 5, r:"204", t:"Mr. Benson"},
    {cn: "Latin", dow:4, sh: 9, sm: 5, eh:10, em: 0, r:"208", t:"Mrs.Scrivner"},
    {cn: "Break", dow:4, sh: 10, sm: 0, eh:10, em: 10, r:"Outside", t:""},
    {cn: "MS Robotics", dow:4, sh: 10, sm: 10, eh:11, em: 0, r:"211", t:"Mr. Broyles"},
    {cn: "Advisory Besaw", dow:4, sh: 11, sm: 50, eh:12, em: 25, r:"207", t:"Mr. Besaw"},
    {cn: "Lunch", dow:4, sh: 12, sm: 25, eh:12, em: 50, r:"Commence or Advisory", t:""},
    {cn: "Activity Period", dow:4, sh: 12, sm: 50, eh:13, em: 0, r:"Outside", t:""},
    {cn: "Biblical Theology", dow:4, sh: 13, sm: 5, eh:14, em: 0, r:"207", t:"Mr. Besaw"},
    {cn: "English", dow:4, sh: 14, sm: 0, eh:15, em: 0, r:"206", t:"Dr. Wong"},

    //Friday:
    {cn: "Medieval Western Civilization", dow:5, sh: 8, sm: 10, eh:9, em: 5, r:"205", t:"Mr. Khule"},
    {cn: "Introductory Biology and Epidemiology", dow:5, sh: 9, sm: 5, eh:10, em: 0, r:"202", t:"Mrs. Brown"},
    {cn: "Break", dow:5, sh: 10, sm: 0, eh:10, em: 10, dr:"Outside", t:""},
    {cn: "MS Robotics", dow:5, sh: 10, sm: 10, eh:11, em: 0, r:"211", t:"Mr. Broyles"},
    {cn: "Office Hours Besaw/Nunez", dow:5, sh: 11, sm: 50, eh:12, em: 25, r:"203", t:" Besaw/Nunez"},
    {cn: "Lunch", dow:5, sh: 12, sm: 25, eh:12, em: 50, r:"Commence or Advisory", t:""},
    {cn: "Activity Period", dow:5, sh: 12, sm: 50, eh:13, em: 0, r:"Outside", t:""},
    {cn: "Algebra 1", dow:5, sh: 13, sm: 5, eh:14, em: 0, r:"204", t:"Mr. Benson"},
    {cn: "Logic", dow:5, sh: 14, sm: 0, eh:15, em: 0, r:"208", t:"Mrs.Scrivner"},
    //Sataturday:
  ];
  return schedule;
}

function findNextScheduleIndex() {
  var schedule = getScheduleTable();
  var currentDate = new Date();
  //var minuteOfWeek = (currentDate.getDay()*3600)+(currentDate.getHours()*60)+currentDate.getMinutes();
  var minuteOfWeek = (4*3600)+(16*60)+0;
  var currentPosition;
  for(currentPosition = 0;currentPosition < schedule.length; currentPosition++){
    var scheduleItemStartMinuteOfWeek = schedule[currentPosition].dow*3600 + schedule[currentPosition].eh*60+schedule[currentPosition].em;
    if(scheduleItemStartMinuteOfWeek > minuteOfWeek) {
      return currentPosition;
    }
  }
  return 0;
}


function getUpArrow() {return require("heatshrink").decompress(atob("hkOyANKmv9AIIjRCoYZRlvdAI8U3YVK3oBJC4Mc7YVRC4sc7gVCzoBNC4oZDGowXGR58lvoBFC9FcAIoXongBFC58dngBFC6EcAIoPHA"));}

function getDownArrow() {return require("heatshrink").decompress(atob("hkOyALImv9AIojPmvdAIoXPlvdAIoXQ3oBFC9GdAIoXnkt9AIoPPAI8U3cc7cc7gBBDIVcAJYXFGYwXOLpU8AI4XBO5sdjgBFR54ZFBpIA=="));}

function getMenuIcon() {return require("heatshrink").decompress(atob("iEQyBC/AEU+rwBEn02js17st3stvklrkljkc/cc3cUzYBBD5AdUD4oA/P/4A/P/4A/ADoA=="));}

function getDotIcon() {return require("heatshrink").decompress(atob("iEQyBC/AA0t3oBBA4ndAIIPGA4gAFkt9lt9AYIHEzoBBBIwRED41cks8AYIJGA44RGP8xtGP44RJBYh1CAIIHHBJJ/KroBBPoqBFB4YRDAA8dngHHBJKdq3oBDBI4RNP4l9AIYHHBJJBJks8AIIHTAH4ABA="));}

var currentPositionTable = 0;
var numberOfItemsShown = 8;
//Table Positions:
var rectStart = 45;
var rectEnd = 65;
var rectStartX = 10;
var rectEndX = 210;
//Scences:
LIST = 1;
INFORMATION = 2;
currentStage = LIST;

function splitter(str, l){
    var strs = [];
    while(str.length > l){
        var pos = str.substring(0, l).lastIndexOf(' ');
        pos = pos <= 0 ? l : pos;
        strs.push(str.substring(0, pos));
        var i = str.indexOf(' ', pos)+1;
        if(i < pos || i > pos+l)
            i = pos;
        str = str.substring(i);
    }
    strs.push(str);
    return strs;
}

function updateMinutesToCurrentTime(currentMinuteFunction) {
  if (currentMinuteFunction<10){
   currentMinuteUpdatedFunction = "0"+currentMinuteFunction;
  }else{
   currentMinuteUpdatedFunction = currentMinuteFunction;
  }
  return currentMinuteUpdatedFunction;
}

function renderBackground(l) {
  g.clearRect(0,0,240,20);
  g.drawImage(getBackgroundImage(),110,130,{scale:9,rotate:0});
}

function renderTable(l) {
  for(var x = 0;x<=numberOfItemsShown;x++){
    g.setColor(255,255,255);
    g.drawRect(rectStartX,rectStart+(x*20),rectEndX,rectEnd+(20*x));
    g.setColor(255,205,0);
    g.drawRect(rectStartX,rectStart+(2*20),rectEndX,rectEnd+(2*20));
    g.setColor(255,0,0);
    g.drawRect(rectStartX,rectStart+(currentPositionTable*20),rectEndX,rectEnd+(20*currentPositionTable));
  }
}

function renderTableText(l){
  var foundNumber = findNextScheduleIndex();
  var foundSchedule = getScheduleTable();
  var scheduleHourUpdated;
  var scheduleMinuteUpdated;
  var beforeFoundNumber = foundNumber - 2;
  for(var x = 0;x<=numberOfItemsShown;x++){
    var currentNumber = beforeFoundNumber + x;
    if (beforeFoundNumber + x < 0) {
      currentNumber = foundSchedule.length + beforeFoundNumber + x;
    } else if (beforeFoundNumber + x > foundSchedule.length - 1) {
      currentNumber = beforeFoundNumber + x - foundSchedule.length;
    }

    scheduleMinuteUpdatedStart = updateMinutesToCurrentTime(foundSchedule[currentNumber].sm);
    scheduleHourUpdatedStart = foundSchedule[currentNumber].sh;
    scheduleMinuteUpdatedEnd = updateMinutesToCurrentTime(foundSchedule[currentNumber].em);
    scheduleHourUpdatedEnd = foundSchedule[currentNumber].eh;
    scheduleDecriptionUpdated = foundSchedule[currentNumber].cn.substring(0, 20);
    if(foundSchedule[currentNumber].cn.length >= 15){
      scheduleDecriptionUpdated = foundSchedule[currentNumber].cn.substring(0, 20)+"...";
    }
    schduleDay = updateDay(3,foundSchedule[currentNumber].dow);
    g.setFont("8x12");
    g.drawString(scheduleHourUpdatedStart+":"+scheduleMinuteUpdatedStart+"-"+scheduleHourUpdatedEnd+":"+scheduleMinuteUpdatedEnd+" "+schduleDay+" "+scheduleDecriptionUpdated,13,50+(x*20));
  }
}

function buttonsF(l){
  if(currentStage == LIST){
    g.drawImage(getDotIcon(),223.5,115);
  }else{
     g.drawImage(getMenuIcon(),223.5,115);
  }
  g.drawImage(getUpArrow(),225,30);
  g.drawImage(getDownArrow(),225,215);
}

function draw() {
  var currentDate = new Date();
  var currentDayOfWeek = currentDate.getDay();
  var currentHour = currentDate.getHours();
  var currentMinute = currentDate.getMinutes();
  var currentMinuteUpdated = updateMinutesToCurrentTime(currentMinute);
  if (layout) {
    if(currentStage == LIST){
      layout.time.label = currentHour+":"+currentMinuteUpdated;
      layout.time.x = 147;
      layout.time.y = 10;
      layout.render(layout.table);
      layout.render(layout.tableText);
      logDebug("Rendered"+currentPositionTable);
    }else{
      layout.time.label = currentHour+":"+currentMinuteUpdated;
      layout.time.x = 147;
      layout.time.y = 10;
      layout.render(layout.info);
      logDebug("Rendered"+currentPositionTable);
    }
    g.clearRect(150,0,220,35);
    layout.render(layout.time);
  }
}

function RedRectDown() {
  if(currentPositionTable > 0){
    currentPositionTable -= 1;
    if(currentStage == INFORMATION){
      redrawScreen();
    }else{
      draw();
    }
  }
}

function RedRectUp() {
  if(currentPositionTable < numberOfItemsShown){
    currentPositionTable += 1;
    if(currentStage == INFORMATION){
      redrawScreen();
    }else{
      draw();
    }
  }
}

function renderMiniBackground(l){
  for(var i = 233;i<=240;i++){
    g.drawImage(getBackgroundImage(),i,123,{scale:10,rotate:0});
  }
}

function renderLoading(l){
  g.setFont("8x12");
  g.drawString("Loading...",240/2-20,240/2-20);
}

function renderInformation(l){
  var foundNumber = findNextScheduleIndex();
  var foundSchedule = getScheduleTable();
  scheduleMinuteUpdatedStart = updateMinutesToCurrentTime(foundSchedule[foundNumber].sm);
  scheduleHourUpdatedStart = foundSchedule[foundNumber].sh;
  scheduleMinuteUpdatedEnd = updateMinutesToCurrentTime(foundSchedule[foundNumber].em);
  scheduleHourUpdatedEnd = foundSchedule[foundNumber].eh;
  scheduleDay = updateDay(1,foundSchedule[((foundNumber-2)+currentPositionTable)].dow);
  g.setColor(255,255,255);
  g.setFont("8x12",2);
  var splitClassNames = splitter(foundSchedule[((foundNumber-2)+currentPositionTable)].cn, 15);
  var currentY = 5;
  for (var j=0; j < splitClassNames.length; j++) {
    g.drawString(splitClassNames[j],13,currentY+50);
    currentY = currentY + 25;
  }
  g.setFont("8x12");
  g.drawString(schduleDay,13,currentY+50);
  g.drawString(scheduleHourUpdatedStart+":"+scheduleMinuteUpdatedStart+"-"+scheduleHourUpdatedEnd+":"+scheduleMinuteUpdatedEnd,13,currentY+15+50);
}

var Layout = require("Layout");
var layout = new Layout(
  {type:"h", c: [
    {type:"custom", render:renderTableText, id:"tableText"},
    {type:"custom", render:buttonsF, id:"buttons"},
    {type:"custom", render:renderBackground, id:"background"},
    {type:"custom", render:renderTable, id:"table"},
    {type:"custom", render:renderMiniBackground, id:"miniBackground"},
    {type:"custom", render:renderLoading, id:"loading"},
    {type:"custom", render:renderInformation, id:"info"},
    {type:"txt", font:"7x11Numeric7Seg:2", label:"00:00", id:"time"},
  ]},
  {type:"v", c:[
  ]},
  {btns:[
    {label:"", cb: RedRectUp()},
    {label:"", cb: l=>print("Two")},
    {label:"", cb: RedRectDown()}
]});


function getBackgroundImage() {return require("heatshrink").decompress(atob("j0ZyEKIf4A4gIB6gQB6gYB6ggB6goB6gwB6g4B6hAABAYIBHBZIVLAK8IhIBXgAThhQB6hYB6hgB6hoB6hwB6h4B6iAB6iIB6iQBHiAJOB54XSiYB6igB6ioB6iwB6i4B5A="));}

function logDebug(message) {console.log(message);}

function changeScene(){
  layout.render(layout.buttons);
  if(currentStage == INFORMATION){
    currentStage = LIST;
    nIntervId = setInterval(redrawScreen, 100000);
  }else if(currentStage == LIST){
    currentStage = INFORMATION;
    clearInterval();
  }
  layout.render(layout.background);
  layout.render(layout.buttons);
  draw();
}

// timeout used to update every minute
var drawTimeout;

setInterval(draw, 15000);


setWatch(RedRectUp, BTN3, { repeat:true, edge:'rising', debounce : 50 });
setWatch(RedRectDown, BTN1, { repeat:true, edge:'rising', debounce : 50 });
setWatch(changeScene, BTN2, { repeat:true, edge:'rising', debounce : 50 });

layout.update();
layout.render(layout.loading);
layout.render(layout.background);
layout.render(layout.buttons);

draw();
