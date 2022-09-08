import { useState, useEffect } from 'react';

import cloudy from '../src/image/weather-icons/cloudy.svg';
import fog from '../src/image/weather-icons/fog.svg';
import rainy from '../src/image/weather-icons/rainy.svg';
import snowing from '../src/image/weather-icons/snowing.svg';
import sun from '../src/image/weather-icons/sun.svg';
import thunderstorm from '../src/image/weather-icons/thunderstorm.svg';

function useFetch(city, coords, isSetCities) {
	const [data, setData] = useState();
	const reloadEffect = isSetCities ? '' : coords;
	useEffect(() => {
		fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
		)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Something went wrong');
			})
			.then((data) => setData(data))
			.catch((err) => console.log(err));
	}, [reloadEffect]);

	function setDate(plusDay, plusHour) {
		const date = new Date();
		const year = date.getFullYear();
		let month = date.getMonth() + 1;
		if (month < 10) {
			month = '0' + String(month);
		}
		let day = date.getDate() + plusDay;
		if (day < 10) {
			day = '0' + String(day);
		}
		let hour = date.getHours() + plusHour;
		// zaokrąglanie godzin do przystej liczby
		hour = 2 * Math.round(hour / 2);
		if (hour < 10) {
			hour = '0' + String(hour);
		}
		const dateString = year + '-' + month + '-' + day + 'T' + hour + ':00';
		return dateString;
	}

	const [editedData, setEditedData] = useState({});

	// ustawia już określoną wartość w obiekcie
	const nextDay = 2;
	useEffect(() => {
		// sprawdza czy data jest ustawiona a potem wykonuje efekt
		if (data) {
			setEditedData(() => {
				const foundIndexes = data.hourly.time.indexOf(setDate(2, 2));
				return {
					city,
					temperature: data.hourly.temperature_2m[foundIndexes],
					time: setDate(0, 4),
					temp_max: data.daily.temperature_2m_max[nextDay - 1],
					temp_min: data.daily.temperature_2m_min[2 - 1],
					weathercode: interpretWeatherCode(data.daily.weathercode[2 - 1]),
					//  Ucina godzinę ze stringa (2022-09-09T19:07) => 19:07
					sunrise: data.daily.sunrise[2 - 1].substring(11),
					sunset: data.daily.sunset[2 - 1].substring(11),
				};
			});
		}
	}, [data]);

	// interpretuje podany kod WMO
	function interpretWeatherCode(code) {
		let actualWeather;
		let weatherPrescription;
		if (code >= 0 && code < 2) {
			actualWeather = sun;
			weatherPrescription = 'Lekkie zachmurzenie / brak';
		} else if (code >= 2 && code < 4) {
			actualWeather = cloudy;
			weatherPrescription = 'Zachmurzenie';
		} else if (
			code === 5 ||
			code === 10 ||
			code === 28 ||
			(code >= 40 && code < 50)
		) {
			actualWeather = fog;
			weatherPrescription = 'Mgła';
		} else if (code === 17 || code === 29 || (code >= 95 && code <= 99)) {
			actualWeather = thunderstorm;
			weatherPrescription = 'Burza';
		} else if (
			code === 14 ||
			code === 15 ||
			code === 21 ||
			code === 25 ||
			(code >= 60 && code <= 69) ||
			(code >= 80 && code <= 83)
		) {
			actualWeather = rainy;
			weatherPrescription = 'Deszcz';
		} else if (
			(code >= 20 && code <= 27 && code === 37 && code === 39) ||
			(code >= 70 && code <= 79) ||
			(code >= 83 && code <= 94)
		) {
			actualWeather = snowing;
			weatherPrescription = 'Śnieg';
		} else {
			console.log('inne zdarzenia meteorologiczne');
		}
		return (
			<div className='flex py-2'>
				<img src={actualWeather} alt='pogoda' className=' mr-2' />
				<p>{weatherPrescription}</p>
			</div>
		);
	}

	return editedData;
}

export default useFetch;
