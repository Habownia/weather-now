import { useEffect, useState } from 'react';

import SetCitiesBox from './SetCitesBox';

function SetCities() {
	const [addedCity, setAddedCity] = useState('');
	const [addedArray, setAddedArray] = useState(['Warszawa']);
	const [reducedArray, setReducedArray] = useState(addedArray);

	function handleChange(e) {
		setAddedCity(e.target.value);
	}

	function handleSave(e) {
		e.preventDefault();
		setAddedArray((prevState) => [...prevState, addedCity]);
	}

	useEffect(() => {
		setReducedArray(() => {
			// usunięcie z tablicy wszystkich powtrórzeń
			const unique = addedArray.reduce(
				(unique, item) => (unique.includes(item) ? unique : [...unique, item]),
				[]
			);
			// jeśli będzie wprowadzona pusta wartość [''] to ją usuwa z tablicy
			if (unique.indexOf('') === 0) {
				unique.shift();
			}
			return unique;
		});
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

	const [box, setBox] = useState();
	useEffect(() => {
		setBox(
			reducedArray.map((item, index) => (
				<SetCitiesBox
					key={index}
					city={reducedArray[index]}
					coords={setCoords(reducedArray[index])}
				/>
			))
		);
	}, [reducedArray]);

	console.log(box);

	return (
		<div>
			Wybierz miasto które chcesz dodać:
			<form className='flex flex-col w-40 gap-2 ' onSubmit={handleSave}>
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
			<div className='flex justify-center gap-3'>{box}</div>
		</div>
	);
}

export default SetCities;
