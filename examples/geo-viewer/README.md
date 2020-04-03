### Build

First, set your valid Mapbox API token in src/env.js:

```js
export default {
    zoom: 13, // 12 fair; 13 good; 14 high resolution
    enableTilesLeaflet: true,
    tokenMapbox: '********', // <---- set your Mapbox API token here
};
```

Then, build the app as follows:

```
$ cd ../.. && npm i && cd -  # set up build
$ npm run dev
```

### Run

Open `examples/geo-viewer/dist/index.html` in a browser.

### Demo

Visit the [live demo](https://w3reality.github.io/three-geo/examples/geo-viewer/io/index.html).
