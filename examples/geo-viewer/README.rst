
Build
-----

First, set your valid Mapbox API token in src/env.js:

.. code::

   export default {
       zoom: 13, // 12 fair; 13 good; 14 high resolution
       enableTilesLeaflet: true,
       tokenMapbox: '********', // <---- set your Mapbox API token here
   };

Then, build the app as follows:

.. code::

   $ cd ../.. && npm install && cd -  # set up build tools for three-geo
   $ npm install  # set up build tools for geo-viewer
   $ npm run build  # generate app files in dist/
