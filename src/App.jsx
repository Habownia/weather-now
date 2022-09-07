import { useState } from 'react';

import City from './components/City';
import Nav from './components/Nav';

function App() {
	const [city, setCity] = useState('Warszawa');
	const [coords, setCoords] = useState({ lat: '52.237049', lng: '21.017532' });

	function handleChange(e) {
		setCity(e.target.value);
		setCoords(() => {
			switch (city) {
				case 'Warszawa':
					return { lat: '52.2297', lng: '21.0122' };
					break;
				case 'Nowy York':
					return { lat: '40.71', lng: '-74.01' };
					break;
				case 'Londyn':
					return { lat: '51.507359', lng: '-0.136439' };
					break;
				case 'Pekin':
					return { lat: '39.9056', lng: '116.3958' };
					break;
				case 'Canberra':
					return { lat: '-35.2820', lng: '149,1286' };
					break;
				default:
					return { lat: '52.2297', lng: '21.0122' };
			}
		});
	}
	return (
		<>
			<Nav handleChange={handleChange} city={city} />
			<City city={city} coords={coords} />
		</>
	);
}

export default App;
