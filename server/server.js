const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../public')))


app.get('/retrievePrices', (req, res, next) => {

  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
  .then((response) => {
    // handle success
    // console.log(response.data);
    res.send(response.data);
    next();
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
});

app.listen(3000);