const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
}

function dieRoll(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateDiceRolls(params) {
  let numDice = Number(params.get('rolls'));
  let numSides = Number(params.get('sides'));
  let body = '';

  for (let i = 0; i < numDice; i += 1) {
    body += `${dieRoll(1, numSides)}\n`;
  }
  
  return body;
}

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  
  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end()
  } else {
    let content = generateDiceRolls(getParams(path));
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(content);
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})

