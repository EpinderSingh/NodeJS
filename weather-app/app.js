const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=7a9e3a58bb5dec083665d92dc698d091&query=-31.953512,115.857048&units=m';
request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degree out. It feel like ${response.body.current.feelslike} degree out.`,
  );
});
