// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/sw.js', function (request, response) {
  response.sendFile(__dirname + '/sw.js');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get('/api/date', function (req, res) {
  res.header('Content-Type', 'text/plain');
  res.header('Cache-Control', 'no-cache');
  res.send(`Received from the server at ${new Date().toLocaleString()}`);
});

/* /////////////////////////////////////////////////////////////////////////////
 The code below this comment is unrelated to the demo and used for maintenance
 vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
/////////////////////////////////////////////////////////////////////////////*/

const {execSync} = require('child_process');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/deploy', (request, response) => {
  if (request.query.secret !== process.env.SECRET) {
    response.status(401).send();
    return;
  }

  const repoUrl = request.query.repo;
  execSync(
    `git checkout -- ./ && git pull -X theirs ${repoUrl} ` +
      `glitch && refresh && git branch -D glitch`,
  );
  response.status(200).send();
});
