const hackYourForecast = require("hack-your-forecast");

const cities = [
  { lat: 37.5681, lng: 126.998, timestamp: 1539268428 },
  { lat: 35.9581, lng: 128.936, timestamp: new Date() },
  { lat: 35.9581, lng: "128.936a" }
];

hackYourForecast.lookup(cities).then(console.log);

// development: use npm link to test the functionality or require from relative path
