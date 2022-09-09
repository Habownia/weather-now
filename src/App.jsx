import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useSettingCoords from '../hooks/useSettingCoords';

import City from './components/City';
import Nav from './components/Nav';
import SetCites from './components/SetCities';

function App() {
	const [city, setCity] = useState('Dodaj element');

	function handleChange(e) {
		setCity(e.target.value);
	}

	// const [seed, setSeed] = useState(1);

	// function handleReload() {
	// setSeed(Math.random());
	// }

	const coords = useSettingCoords(city);

	const [reducedArray, setReducedArray] = useState([
		'Warszawa',
		'Kair',
		'Londyn',
	]);

	console.log(reducedArray);

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
			<SetCites reducedArray={reducedArray} setReducedArray={setReducedArray} />
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
