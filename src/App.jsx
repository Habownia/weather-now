import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import City from './components/City';
import Nav from './components/Nav';
import SetCites from './components/SetCities';

function App() {
	const [city, setCity] = useState('Dodaj element');
	const [coords, setCoords] = useState();

	function handleChange(e) {
		setCity(e.target.value);
	}

	// const [seed, setSeed] = useState(1);

	// function handleReload() {
	// setSeed(Math.random());
	// }

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

	const defaultSite = (
		<>
			<Nav
				handleChange={handleChange}
				// handleReload={handleReload}
				city={city}
				isSetCites={false}
			/>
			{city && coords && <City city={city} coords={coords} />}
		</>
	);

	const setCitiesSite = (
		<>
			<Nav
				// handleReload={handleReload}
				isSetCites={true}
			/>
			<SetCites />
		</>
	);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={defaultSite} />
					<Route path='setcities' element={setCitiesSite} />
					<Route
						path='*'
						element={
							<main>
								<p>404 Not Found</p>
							</main>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
