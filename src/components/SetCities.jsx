import { useEffect, useState } from 'react';

import useFetch from '../../hooks/useFetch';

import SetCitiesBox from './setCitesBox';

function SetCities() {
	const [addedCity, setAddedCity] = useState('');
	const [addedArray, setAddedArray] = useState(['Warszawa']);
	const [reducedArray, setReducedArray] = useState(['Warszawa']);

	function handleChange(e) {
		setAddedCity(e.target.value);
	}

	function handleSave(e) {
		e.preventDefault();
		setAddedArray((prevState) => [...prevState, addedCity]);
	}

	useEffect(() => {
		setReducedArray(
			// usunięcie z tablicy wszystkich powtrórzeń
			addedArray.reduce(
				(unique, item) => (unique.includes(item) ? unique : [...unique, item]),
				[]
			)
		);
	}, [addedArray]);

	function setCoords(city) {
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
	}

	return (
		<div>
			Wybierz miasto które chcesz dodać:
			<form className='flex flex-col w-40 gap-2' onSubmit={handleSave}>
				<select
					className='select select-bordered'
					name='city'
					onChange={handleChange}
					value={addedCity}
				>
					<option disabled value=''>
						Wybierz miasto
					</option>
					<option value='Warszawa'>Warszawa</option>
					<option value='Kair'>Kair</option>
					<option value='Londyn'>Londyn</option>
					<option value='Pekin'>Pekin</option>
					<option value='Canberra'>Canberra</option>
				</select>
				<button className='btn'>Dodaj</button>
			</form>
			{/* <p>{reduced.toString()}</p> */}
			<SetCitiesBox key={0} />
		</div>
	);
}

export default SetCities;
