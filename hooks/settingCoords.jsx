function settingCoords(city) {
	let coords;
	switch (city) {
		case 'Warszawa':
			coords = { lat: '52.2297', lng: '21.0122' };
			break;
		case 'Kair':
			coords = { lat: '30.0571', lng: '31.2272' };
			break;

		case 'Londyn':
			coords = { lat: '51.507359', lng: '-0.136439' };
			break;

		case 'Pekin':
			coords = { lat: '39.9056', lng: '116.3958' };
			break;

		case 'Canberra':
			coords = { lat: '-35.2820', lng: '149.1286' };
			break;
	}
	return coords;
}

export default settingCoords;
