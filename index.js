let counter = 0;
const moment = require('moment');

const interval = setInterval(function () {
  counter++;
  console.log(moment.duration(counter, "seconds").humanize() + ` (${counter})`);
}, 1000);