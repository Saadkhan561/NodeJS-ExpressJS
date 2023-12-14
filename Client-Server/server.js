// PORTS are like doors for your computer.

// Creating a server using pure node
const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {

  // lodash
  const num = _.random(0,20)
  console.log(num)

  const greet = _.once(() => {
    console.log('Gand marao')
  })

  greet()

  // set header content type
  res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>Hello Saad</h1>')
  // res.end()

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301; // means the page has been moved or redirected
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

// this built-in function listens the server on the given port and a local domain name.
server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
});
