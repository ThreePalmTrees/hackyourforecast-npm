# hack-your-forecast

Open source weather API, Provided by _https://www.HackYourForecast.com_, powered by contributors ❤

See [available agencies](https://hackyourforecast.com/api#apis-we-work-with)

## installation and usage:

`npm i hackyourforecast`

```javascript
const hackYourForecast = require("hackyourforecast");

const cities = [
  { lat: 37.5681, lng: 126.998, timestamp: 1539268428 },
  { lat: 35.9581, lng: 128.936, timestamp: new Date() },
  { lat: 37.569, lng: 126.983 }
];

hackYourForecast.lookup(cities).then(console.log);
/*
  output type: JSON, output schema:

  [{
    "result": {
      [
        {
          "weather": {
            "TemperatureC: 7.6,
            "windSpeedMps: 0.3,
            etc..
          },
          "location": {
            "lat": 37.5683,
            "lng": 126.998,
            "fromHour": 1539268428,
            "distance": 0.1735
          }
        },
        etc..
      ]
    }
  }]

/*
```

## Contribution

1. [Fork this](https://github.com/HackYourForecast/hackyourforecast) and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Added some feature'
3. Push to the branch: git push origin my-new-feature
4. Submit a pull request.

see more details about [contributing](https://hackyourforecast.com/contribute)

![an overly used coding meme](https://img.devrant.com/devrant/rant/r_536209_rcy6p.gif)

## License:

ISC
