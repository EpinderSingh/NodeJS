const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=7a9e3a58bb5dec083665d92dc698d091&query=-31.953512,115.857048&units=m';
request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degree out. It feel like ${response.body.current.feelslike} degree out.`,
  );
});

// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXBpbmRlciIsImEiOiJja2R0cTlvbm0xajA4MzFsajRlZW9oMXR3In0.Qh_2M6MpvwkRRpWFabMH9g&limit=1';
// request({ url: geocodeURL, json: true }, (error, response) => {
//   const latitude = response.body.features[0].center[1];
//   const longitude = response.body.features[0].center[0];
//   console.log(latitude);
//   console.log(longitude);
// });
