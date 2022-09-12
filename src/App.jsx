import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import City from './components/City';
import SetCites from './components/SetCities';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
	const [reducedArray, setReducedArray] = useState(
		JSON.parse(localStorage.getItem('cities'))
			? JSON.parse(localStorage.getItem('cities'))
			: []
	);
	// dodawanie elementu do local storage
	useEffect(() => {
		localStorage.setItem('cities', JSON.stringify(reducedArray));
	}, [reducedArray]);

	const defaultSite = (
		<>
			<Nav isSetCites={false} />
			<City reducedArray={reducedArray} />
			<Footer />
		</>
	);

	const setCitiesSite = (
		<>
			<Nav isSetCites={true} />
			<SetCites reducedArray={reducedArray} setReducedArray={setReducedArray} />
			<Footer />
		</>
	);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={defaultSite} />
					<Route path='setcities' element={setCitiesSite} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
