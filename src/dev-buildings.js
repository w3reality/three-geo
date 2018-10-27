
// import osmtogeojson from 'osmtogeojson'; // TODO with babel, this should just work
import osmtogeojson from './osmtogeojson.esm.js'; // TEMP
// console.log('osmtogeojson:', osmtogeojson);

// NG, not an es-module; use babel later
// import xhr from '../node_modules/xhr/index.js';
// console.log('xhr:', xhr);

const test = () => {
    console.log('test(): hello');

    // refs --
    // https://gis.stackexchange.com/questions/180568/get-a-json-return-from-a-overpass-api-call
    // let url = `https://www.overpass-api.de/api/interpreter?data=[out:json];node[highway=speed_camera](43.46669501043081,-5.708215989569187,43.588927989569186,-5.605835010430813);out%20meta;`;
    //========
    // https://github.com/tyrasd/overpass-turbo
    // https://overpass-turbo.eu/
    /*
        // This is an example Overpass query.
        // Try it out by pressing the Run button above!
        // You can find more examples with the Load tool.
        [out:json];

        // default example --------
        // node
        //   [amenity=drinking_water]
        //   ({{bbox}});
        // out;

        // for a particular way --------
        // https://help.openstreetmap.org/questions/53239/how-to-get-all-nodes-which-belong-to-a-way
        // https://overpass-api.de/api/interpreter?data=[out:json];way(24777894);(._;>;);out;
        //way(24777894);(._;>;);out;

        // ok --------
        //way({{bbox}})["building"="yes"];(._;>;);out;
        way({{bbox}})["building"];(._;>;);out;
        way(35.3570,138.7255,35.3691,138.7408)["building"];(._;>;);out; // fuji
    */

    // const [ne, sw] = [[35.6950, 139.7748], [35.6710, 139.7442]]; // tokyo -> 5600+ ways; 2.67 x 3.40 km2
    // const [ne, sw] = [[35.36295, 138.73073], [35.36257, 138.73025]]; // fuji -> 0 ways; 0.042 x 0.053 km2
    // const [ne, sw] = [[35.3691, 138.7408], [35.3570, 138.7255]]; // fuji-zoom16 -> 29 ways; 1.34 x 1.70 km2

    // ONE_DEG_KM = 111.321; // one degree of longitude at the equator
    // console.log("dvert, dhor:", ONE_DEG_KM * (ne[0]-sw[0]), ONE_DEG_KM * (ne[1]-sw[1]));

    // gigantic; xml; 1330624 B; cache/buildings/map.overpass-fuji-zoom16
    // let url = `https://overpass-api.de/api/map?bbox=138.7255,35.3570,138.7408,35.3691`;
    // let url = `https://overpass-api.de/api/map?bbox=${sw[1]},${sw[0]},${ne[1]},${ne[0]}`;
    //----
    // compact; json; 21080 B; cache/buildings/interpreter.json-fuji-zoom16
    // let url = `https://overpass-api.de/api/interpreter?data=[out:json];way(35.3570,138.7255,35.3691,138.7408)["building"];(._;>;);out;`;
    // let url = `https://overpass-api.de/api/interpreter?data=[out:json];way(${sw[0]},${sw[1]},${ne[0]},${ne[1]})["building"];(._;>;);out;`;
    let url = '../cache/buildings/interpreter.json-fuji-zoom16'; // 21080 B
    // let url = '../cache/buildings/interpreter.json-tokyo'; // 3792512 B
    console.log('url:', url);
    // return; //!!!!!!!!

    // TODO in lib code, use xhr() instead
    fetch(url).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
        // json = {elements: [], generator: "Overpass API mock"}; // debug
        const feats = osmtogeojson(json).features;
        console.log('feats:', feats);
        // TODO check 29'th is node .... filter it out
        // TODO level ???
        // TODO name ?
        // TODO extrude
    });


};

if (1) {
    test();
}

if (1) {
    const btn = document.createElement('button');
    btn.textContent = 'test';
    btn.onclick = () => {
        test();
    };
    document.body.appendChild(btn);
}

export default {};
