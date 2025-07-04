mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12',
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
});



const marker=new mapboxgl.Marker({color : "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(
        `<h4>${listing.title}</h4> <p>Exact Location will be provided after booking </p>`
    ))
    .addTo(map);


// const customMarker = document.createElement('div');
// customMarker.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2WspGg7HhOyNg_GZ109oy4Pvc30L8udAIbmBSzrgwl6X7bf6rJ28QUjvUa_5_gyuE1I&usqp=CAU")';
// customMarker.style.width = '30px';
// customMarker.style.height = '30px';
// customMarker.style.backgroundSize = 'cover';
// customMarker.style.borderRadius = '50%';

// new mapboxgl.Marker(customMarker)
//   .setLngLat(listing.geometry.coordinates)
//   .setPopup(new mapboxgl.Popup({offset: 25})
//     .setHTML(
//         `<h4>${listing.title}</h4> <p>Exact Location will be provided after booking </p>`
//     ))
//   .addTo(map);


