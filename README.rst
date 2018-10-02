three-geo
===================

**three-geo** is a `three.js <https://github.com/mrdoob/three.js>`__ based geographic visualization library.  Using
three-geo, we can easily build satellite-textured 3D terrain models in near
real-time by simply specifying GPS coordinates anywhere on the globe.
The geometry of the terrain is based on the RGB-encoded DEM (Digital Elevation Model)
provided by the Mapbox Maps API.

The terrain is represented by standard `THREE.Mesh <https://threejs.org/docs/#api/en/objects/Mesh>`__ objects.
This makes it easy for us to access underlying geometry/texture array and
perform original GIS (Geographic Information System) experiments in JavaScript.
(See Usage for how to programatically obtain those mesh objects).

Credits: this library has been made possible thanks to

- geo-related libraries such as `mapbox <https://github.com/mapbox>`__, `Turfjs <https://github.com/Turfjs/turf>`__, `d3 <https://github.com/d3/d3>`__ in npm, and `the Mapbox Maps API <https://www.mapbox.com/api-documentation/#maps>`__.
- DEM generator implementation in `peterqliu.github.io <https://github.com/peterqliu/peterqliu.github.io>`__

Demo
----

As a flagship demo application of the three-geo library, we introduce **examples/geo-viewer** (`live <https://w3reality.github.io/three-geo/examples/geo-viewer/io/index.html>`__ | `source code <https://github.com/w3reality/three-geo/tree/master/examples/geo-viewer>`__).

This app demonstrates features such as

- on-demand 3D terrain building (by a mouse click on the Leaflet map),
- real-time camera projection onto Leaflet (with oritentaion and HFoV indication),
- terrain interaction with a VR-like laser beam,
- measuring Euclidean distances between terrain points,
- auto camera orbiting around the custom z-axis.

Live:

- https://w3reality.github.io/three-geo/examples/geo-viewer/io/index.html?lat=46.5763&lng=7.9904

  .. image:: https://w3reality.github.io/three-geo/examples/img/5.jpg
     :target: https://w3reality.github.io/three-geo/examples/geo-viewer/io/index.html?lat=46.5763&lng=7.9904&title=Eiger

- https://w3reality.github.io/three-geo/examples/geo-viewer/io/index.html?lat=46.5763&lng=7.9904&mode=contours

  .. image:: https://w3reality.github.io/three-geo/examples/img/eiger-contours-100m.png
     :target: https://w3reality.github.io/three-geo/examples/geo-viewer/io/index.html?lat=46.5763&lng=7.9904&mode=contours&title=Eiger
 
- https://w3reality.github.io/three-geo/examples/geo-viewer/io/index.html?lat=36.2058&lng=-112.4413

  .. image:: https://w3reality.github.io/three-geo/examples/img/2.jpg
     :target: https://w3reality.github.io/three-geo/examples/geo-viewer/io/index.html?lat=36.2058&lng=-112.4413&title=Colorado_River

Setup
-----

**Installation**

.. code::
   
   $ npm install three-geo

**Loading**

Via script tags: use ``ThreeGeo`` after

.. code::

   <script src="three.min.js"></script>
   <script src="dist/three-geo.min.js"></script>

Via the ES6 module system: use ``ThreeGeo`` after
   
.. code::

   import ThreeGeo from 'three-geo/src';

Usage
-----

Here is an example of how to build a geographic terrain located at GPS coordinates (46.5763,
7.9904) in a 5 km radius circle.  The terrain's satellite zoom resolution is set to 12.
(The highest zoom value supported is 17.)

For standalone tests, use **examples/simple-viewer** (`source code <https://github.com/w3reality/three-geo/tree/master/examples/simple-viewer>`__).

.. code::

    const tgeo = new ThreeGeo({
        tokenMapbox: '********', // <---- set your Mapbox API token here
    });

    // params: [lat, lng], terrain's radius (km), satellite zoom resolution, callbacks
    // Beware the value of radius; for zoom 12, radius > 5.0 (km) could trigger huge number of tile API calls!!
    tgeo.getTerrain([46.5763, 7.9904], 5.0, 12, {
        onRgbDem: (meshes) => { // your implementation when the terrain's geometry is obtained
            meshes.forEach((mesh) => { scene.add(mesh); });
            render(); // now render scene after dem meshes are added
        },
        onSatelliteMat: (mesh) => { // your implementation when terrain's satellite texture is obtained
            render(); // now render scene after dem material (satellite texture) is applied
        },
    });

.. image:: https://w3reality.github.io/three-geo/examples/img/1.jpg

Who is using ``three-geo``?
---------------------------

- `jet-wasp <https://jet-wasp.glitch.me/>`__ - Three-geo as A-Frame component (`source code <https://glitch.com/edit/#!/jet-wasp>`__)
- *Your App* - *PR us!*

API
---

**ThreeGeo**

- **constructor(opts={})**

  Create a ThreeGeo instance with parameters.
  
  - ``opts.tokenMapbox``\="" **string** Mapbox API token.  This must be provided.
  - ``opts.unitsSide``\=1.0 **number** The side length of the square that fits the terrain in WebGL space.

- **getTerrain(latlng, radius, zoom, callbacks={})**


  - ``latlng`` **Array<number>** GPS coordinates of the form: [latitude, longitude].
  - ``radius`` **number** The radius of the circle that fits the terrain.
  - ``zoom`` **number (integer)** Satellite zoom resolution of the tiles in the terrain.
    Select from {11, 12, 13, 14, 15, 16, 17}, where 17 is the highest value supported.  For a fixed radius, higher zoom resolution results in more tileset API calls.
  - ``callbacks.onRgbDem`` **function (meshes) {}** Implement this to request the geometry of the terrain.  Called when the entire terrain's geometry is obtained.
      - ``meshes`` **Array<THREE.Mesh>** All the meshes belonging to the terrain.
  - ``callbacks.onSatelliteMat`` **function (mesh) {}** Implement this to request the satellite textures of the terrain.  Called when the satellite texture of each mesh belonging to the terrain is obtained.
      - ``mesh`` **THREE.Mesh** One of the meshes that's part of the terrain.


Build
-----

.. code::

   $ npm install  # set up build tools
   $ npm run build  # generate module files in lib/
