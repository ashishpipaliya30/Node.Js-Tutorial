// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World..! How are you?');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selector $ more designing</title>
      <style>
          .container {
              border: 2px solid red;
              background-color: rgb(249, 169, 252);
              padding: 33px;
              margin: 33px auto;
              width: 666px;
          }
  
          a {
              text-decoration: none;
              color: black;
          }
  
          a:hover {
              color: black;
              background-color: rgb(205, 41, 183);
          }
  
          a:visited {
              background-color: yellow;
          }
  
          a:active {
              background-color: blue;
          }
  
          .btn {
              font-family: 'Courier New', Courier, monospace;
              font-weight: bold;
              background: red;
              padding: 6px;
              border: null;
              cursor: pointer;
              font-size: 13px;
              border-radius: 6px;
          }
  
          .btn:hover {
              color: yellow;
              background-color: orange;
              border: 2px solid black;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h3>This is heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et consectetur corporis totam magnam ipsa,
              voluptatum id unde nesciunt animi delectus suscipit, ea tenetur cum dignissimos tempora mollitia ullam
              incidunt aspernatur?</p>
          <a href="https://yahoo.com" class="btn">Read more</a>
          <botton class="btn">Contact us</botton>
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});