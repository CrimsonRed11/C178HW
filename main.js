let latitude = 51.535125, longitude = -3.112301;
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 6
});
map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);
//Big Ben
var img1 = document.querySelector("#bigben")
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([-0.1246, 51.5007])
	.addTo(map);

//Brecon Beacons
var img2 = document.querySelector("#brecon")
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([-3.4435, 51.9465])
	.addTo(map);

//Cardiff Castle
var img3 = document.querySelector("#castle")
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([-3.182, 51.4816])
	.addTo(map);
