//Project Name:
//Client Name:
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
//
//
//
//
//
//
//
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///


const http = require('http');
const fs = require('fs')
const url = require('url');


const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    console.log(page);
    if (page == '/') {
      fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
  }
  //endpoint for pageTwo.html
  else if (page == '/pagetwo') {
    fs.readFile('pagetwo.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //endpoint for pageThree.html
  else if (page == '/pagethree') {
    fs.readFile('pagethree.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    //endpoint for index.html's css file
}else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
    //endpoint for index.html's js file
}else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
    //endpoint for pageTwo's css file
}else if (page == '/css/pagetwo.css'){
      fs.readFile('css/pagetwo.css', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
      //endpoint for pageTwo's js file
  }else if (page == '/js/pagetwo.js'){
      fs.readFile('js/pagetwo.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
      //endpoint for pageThree's css file
  }else if (page == '/css/pagethree.css'){
        fs.readFile('css/pagethree.css', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });
        //endpoint for pageThree's js file
    }else if (page == '/js/pagethree.js'){
        fs.readFile('js/pagethree.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
  }else{
      res.write('404!! Page does not exist')
      res.end();
    }
});

server.listen(8000);
