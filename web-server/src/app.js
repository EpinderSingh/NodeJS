const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./');

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handelars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Epinder Mann',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Epinder Mann',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'This is some helpful text.',
    name: 'Epinder Mann',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address!',
    });
  } else {
    geocode(req.query.address, (error, { latitude, longitude, location }) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    });
  }
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term.',
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Epinder Mann',
    errorMessage: 'Help artical not found',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page not found.',
    name: 'Epinder Mann',
  });
});

app.listen(3000, () => {
  console.log(`Server is up on port 3000`);
});
