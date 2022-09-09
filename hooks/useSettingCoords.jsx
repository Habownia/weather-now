import { useState, useEffect } from 'react';

function useSettingCoords(city) {
	const [coords, setCoords] = useState();
	useEffect(() => {
		setCoords(() => {
			switch (city) {
				case 'Warszawa':
					return { lat: '52.2297', lng: '21.0122' };
				case 'Kair':
					return { lat: '30.0571', lng: '31.2272' };
				case 'Londyn':
					return { lat: '51.507359', lng: '-0.136439' };
				case 'Pekin':
					return { lat: '39.9056', lng: '116.3958' };
				case 'Canberra':
					return { lat: '-35.2820', lng: '149.1286' };
			}
		});
	}, [city]);
	return coords;
}

export default useSettingCoords;
