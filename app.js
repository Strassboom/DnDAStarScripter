//setting up routing, json request body parsing and listening port
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 9001;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//templating
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.writeHead(200);
    res.end('Server touched successfully!');
  });
  
  app.listen(port, (err) => {
    if (err) {
      return console.log(`Something bad happened: ${err}`);
    }
    console.log(`Server is listening on port ${port}`);
  });