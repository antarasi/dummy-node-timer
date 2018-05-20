let counter = 0;
const moment = require('moment');
const http = require('http');
const port = process.env.PORT || 8888;

const interval = setInterval(function () {
  counter++;
  console.log(moment.duration(counter, "seconds").humanize() + ` (${counter})`);
}, 1000);

http.createServer(function (req, res) {
  const result = {
    counter,
    duration: moment.duration(counter, "seconds").humanize(),
    port,
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(JSON.stringify(result));
  res.end();
}).listen(port);