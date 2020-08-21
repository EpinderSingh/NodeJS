const path = require('path');
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');

// Setup handelars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

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
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Perth',
    forecast: 'It is 14 Degree. High chance of rain.',
  });
});

app.listen(3000, () => {
  console.log(`Server is up on port 3000`);
});
