((): ClockInfo.Menu => {
  let durationOnPause = "---";
  let redrawInterval: number | undefined;
  let startTime: number | undefined;
  let over1s = false;
  let { format = StopWatchFormat.HMS }: StopWatchSettings
    = require("Storage").readJSON("clkinfostopw.setting.json", true) || {};

  const unqueueRedraw = () => {
    if (redrawInterval) clearInterval(redrawInterval);
    redrawInterval = undefined;
  };

  const queueRedraw = function(this: ClockInfo.MenuItem) {
    unqueueRedraw();
    redrawInterval = setInterval(() => {
        if (startTime) {
            if (!over1s && Date.now() - startTime > 1000) {
                over1s = true;
                changeInterval(redrawInterval, 1000);
            }
        } else {
            unqueueRedraw();
        }
        this.emit('redraw')
    }, 100);
  };

  const pad2 = (s: number) => ('0' + s.toFixed(0)).slice(-2);

  const duration = (start: number) => {
    let seconds = (Date.now() - start) / 1000;

    if (seconds <= 1)
      return seconds.toFixed(1);
    if (seconds < 60)
      return seconds.toFixed(0);

    let mins = seconds / 60;
    seconds %= 60;

    if (mins < 60)
      return format === StopWatchFormat.HMS
        ? `${pad2(mins)}m${pad2(seconds)}s`
        : `${mins.toFixed(0)}:${pad2(seconds)}`;

    let hours = mins / 60;
    mins %= 60;

    return format === StopWatchFormat.HMS
      ? `${hours.toFixed(0)}h${pad2(mins)}m${pad2(seconds)}s`
      : `${hours.toFixed(0)}:${pad2(mins)}:${pad2(seconds)}`;
  };

  const img = () => atob("GBiBAAAAAAB+AAB+AAAAAAB+AAH/sAOB8AcA4A4YcAwYMBgYGBgYGBg8GBg8GBgYGBgAGAwAMA4AcAcA4AOBwAH/gAB+AAAAAAAAAA==");

  return {
    name: "timer",
    img: img(),
    items: [
      {
        name: "stopw",
        get: () => ({
          text: startTime
            ? duration(startTime)
            : durationOnPause,
          img: img(),
        }),
        show: function(this: ClockInfo.MenuItem) {
          if(startTime){ // only queue if active
            queueRedraw.call(this);
          }else{
            this.emit('redraw')
          }
        },
        hide: unqueueRedraw,
        run: function() { // tapped
          if (startTime) {
            durationOnPause = duration(startTime);
            startTime = undefined; // this also unqueues the redraw
          } else {
            queueRedraw.call(this);
            over1s = false;
            startTime = Date.now();
          }
        }
      }
    ]
  };
})
