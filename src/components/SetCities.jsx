import { useEffect, useState } from 'react';
import settingCoords from '../../hooks/settingCoords';

import SetCitiesBox from './SetCitesBox';

function SetCities(props) {
	const [addedCity, setAddedCity] = useState('');
	const [addedArray, setAddedArray] = useState(props.reducedArray);

	function handleChange(e) {
		setAddedCity(e.target.value);
	}

	function handleSave(e) {
		e.preventDefault();
		setAddedArray((prevState) => [...prevState, addedCity]);
	}

	useEffect(() => {
		props.setReducedArray(() => {
			// usunięcie z tablicy wszystkich powtrórzeń
			const unique = addedArray.reduce(
				(unique, item) => (unique.includes(item) ? unique : [...unique, item]),
				[]
			);
			// jeśli będzie wprowadzona pusta wartość [''] to ją usuwa z tablicy
			if (unique.indexOf('') >= 0) {
				unique.splice(unique.indexOf(''), 1);
			}
			return unique;
		});
	}, [addedArray]);

	function handleDelete(city) {
		setAddedArray((prevState) =>
			prevState.filter((value, index, arr) => (value !== city ? value : ''))
		);
	}

	const [box, setBox] = useState();
	useEffect(() => {
		setBox(() =>
			props.reducedArray.map((item, index) => (
				<SetCitiesBox
					key={item}
					city={item}
					coords={settingCoords(props.reducedArray[index])}
					handleDelete={handleDelete}
				/>
			))
		);
	}, [props.reducedArray]);

	return (
		<div className='flex flex-col items-center'>
			<p className='my-5'>Wybierz miasto które chcesz dodać:</p>
			<form className='flex flex-col w-56 gap-2 ' onSubmit={handleSave}>
				<select
					className='select select-bordered  text-lg pl-3'
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
			<div className='flex justify-center gap-3 flex-wrap'>{box}</div>
		</div>
	);
}

export default SetCities;
