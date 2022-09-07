import { useState, useEffect } from 'react';

import cloudy from '../image/weather-icons/cloudy.svg';
import fog from '../image/weather-icons/fog.svg';
import rainy from '../image/weather-icons/rainy.svg';
import snowing from '../image/weather-icons/snowing.svg';
import sun from '../image/weather-icons/sun.svg';
import thunderstorm from '../image/weather-icons/thunderstorm.svg';

function City(props) {
	const [data, setData] = useState({
		latitude: 52.25,
		longitude: 21,
		generationtime_ms: 0.6619691848754883,
		utc_offset_seconds: 7200,
		timezone: 'Europe/Warsaw',
		timezone_abbreviation: 'CEST',
		elevation: 119,
		hourly_units: {
			time: 'iso8601',
			temperature_2m: '°C',
		},
		hourly: {
			time: [
				'2022-09-07T00:00',
				'2022-09-07T01:00',
				'2022-09-07T02:00',
				'2022-09-07T03:00',
				'2022-09-07T04:00',
				'2022-09-07T05:00',
				'2022-09-07T06:00',
				'2022-09-07T07:00',
				'2022-09-07T08:00',
				'2022-09-07T09:00',
				'2022-09-07T10:00',
				'2022-09-07T11:00',
				'2022-09-07T12:00',
				'2022-09-07T13:00',
				'2022-09-07T14:00',
				'2022-09-07T15:00',
				'2022-09-07T16:00',
				'2022-09-07T17:00',
				'2022-09-07T18:00',
				'2022-09-07T19:00',
				'2022-09-07T20:00',
				'2022-09-07T21:00',
				'2022-09-07T22:00',
				'2022-09-07T23:00',
				'2022-09-08T00:00',
				'2022-09-08T01:00',
				'2022-09-08T02:00',
				'2022-09-08T03:00',
				'2022-09-08T04:00',
				'2022-09-08T05:00',
				'2022-09-08T06:00',
				'2022-09-08T07:00',
				'2022-09-08T08:00',
				'2022-09-08T09:00',
				'2022-09-08T10:00',
				'2022-09-08T11:00',
				'2022-09-08T12:00',
				'2022-09-08T13:00',
				'2022-09-08T14:00',
				'2022-09-08T15:00',
				'2022-09-08T16:00',
				'2022-09-08T17:00',
				'2022-09-08T18:00',
				'2022-09-08T19:00',
				'2022-09-08T20:00',
				'2022-09-08T21:00',
				'2022-09-08T22:00',
				'2022-09-08T23:00',
				'2022-09-09T00:00',
				'2022-09-09T01:00',
				'2022-09-09T02:00',
				'2022-09-09T03:00',
				'2022-09-09T04:00',
				'2022-09-09T05:00',
				'2022-09-09T06:00',
				'2022-09-09T07:00',
				'2022-09-09T08:00',
				'2022-09-09T09:00',
				'2022-09-09T10:00',
				'2022-09-09T11:00',
				'2022-09-09T12:00',
				'2022-09-09T13:00',
				'2022-09-09T14:00',
				'2022-09-09T15:00',
				'2022-09-09T16:00',
				'2022-09-09T17:00',
				'2022-09-09T18:00',
				'2022-09-09T19:00',
				'2022-09-09T20:00',
				'2022-09-09T21:00',
				'2022-09-09T22:00',
				'2022-09-09T23:00',
				'2022-09-10T00:00',
				'2022-09-10T01:00',
				'2022-09-10T02:00',
				'2022-09-10T03:00',
				'2022-09-10T04:00',
				'2022-09-10T05:00',
				'2022-09-10T06:00',
				'2022-09-10T07:00',
				'2022-09-10T08:00',
				'2022-09-10T09:00',
				'2022-09-10T10:00',
				'2022-09-10T11:00',
				'2022-09-10T12:00',
				'2022-09-10T13:00',
				'2022-09-10T14:00',
				'2022-09-10T15:00',
				'2022-09-10T16:00',
				'2022-09-10T17:00',
				'2022-09-10T18:00',
				'2022-09-10T19:00',
				'2022-09-10T20:00',
				'2022-09-10T21:00',
				'2022-09-10T22:00',
				'2022-09-10T23:00',
				'2022-09-11T00:00',
				'2022-09-11T01:00',
				'2022-09-11T02:00',
				'2022-09-11T03:00',
				'2022-09-11T04:00',
				'2022-09-11T05:00',
				'2022-09-11T06:00',
				'2022-09-11T07:00',
				'2022-09-11T08:00',
				'2022-09-11T09:00',
				'2022-09-11T10:00',
				'2022-09-11T11:00',
				'2022-09-11T12:00',
				'2022-09-11T13:00',
				'2022-09-11T14:00',
				'2022-09-11T15:00',
				'2022-09-11T16:00',
				'2022-09-11T17:00',
				'2022-09-11T18:00',
				'2022-09-11T19:00',
				'2022-09-11T20:00',
				'2022-09-11T21:00',
				'2022-09-11T22:00',
				'2022-09-11T23:00',
				'2022-09-12T00:00',
				'2022-09-12T01:00',
				'2022-09-12T02:00',
				'2022-09-12T03:00',
				'2022-09-12T04:00',
				'2022-09-12T05:00',
				'2022-09-12T06:00',
				'2022-09-12T07:00',
				'2022-09-12T08:00',
				'2022-09-12T09:00',
				'2022-09-12T10:00',
				'2022-09-12T11:00',
				'2022-09-12T12:00',
				'2022-09-12T13:00',
				'2022-09-12T14:00',
				'2022-09-12T15:00',
				'2022-09-12T16:00',
				'2022-09-12T17:00',
				'2022-09-12T18:00',
				'2022-09-12T19:00',
				'2022-09-12T20:00',
				'2022-09-12T21:00',
				'2022-09-12T22:00',
				'2022-09-12T23:00',
				'2022-09-13T00:00',
				'2022-09-13T01:00',
				'2022-09-13T02:00',
				'2022-09-13T03:00',
				'2022-09-13T04:00',
				'2022-09-13T05:00',
				'2022-09-13T06:00',
				'2022-09-13T07:00',
				'2022-09-13T08:00',
				'2022-09-13T09:00',
				'2022-09-13T10:00',
				'2022-09-13T11:00',
				'2022-09-13T12:00',
				'2022-09-13T13:00',
				'2022-09-13T14:00',
				'2022-09-13T15:00',
				'2022-09-13T16:00',
				'2022-09-13T17:00',
				'2022-09-13T18:00',
				'2022-09-13T19:00',
				'2022-09-13T20:00',
				'2022-09-13T21:00',
				'2022-09-13T22:00',
				'2022-09-13T23:00',
			],
			temperature_2m: [
				10.8, 10.3, 9.4, 8.9, 8.2, 7.6, 7, 7.2, 8.9, 11.7, 14.6, 17.3, 18.5,
				19.3, 20, 20.4, 20.4, 20.1, 19.3, 17.7, 15.7, 14.3, 13.3, 12.5, 11.7,
				11.1, 10.5, 9.9, 9.5, 9, 8.6, 8.9, 10.6, 13.3, 16.2, 18.2, 19.3, 20.2,
				20.9, 21.3, 21.3, 20.8, 19.8, 18.2, 16.4, 15.1, 14.2, 13.9, 13.7, 13,
				12.4, 12.2, 12.1, 12, 12.1, 12.1, 11.3, 10.6, 10.5, 10.6, 10.8, 11.2,
				11.8, 12.3, 12.9, 13.3, 13.4, 13.2, 12.8, 12.4, 12, 11.7, 11.4, 11.3,
				11.3, 11.1, 11, 11.1, 11.3, 11.6, 12.4, 13.2, 14.1, 14.8, 14.5, 13.7,
				12.7, 12.2, 11.7, 11.3, 11.1, 11, 11, 10.9, 10.9, 10.9, 10.8, 10.7,
				10.6, 10.6, 10.6, 10.6, 10.5, 10.4, 10.4, 10.8, 11.5, 12.2, 12.7, 13.2,
				13.3, 12.7, 11.7, 10.7, 10.4, 10.4, 10.4, 10.4, 10.4, 10.4, 10.4, 10.3,
				10.2, 11, 10.5, 10.3, 10.4, 10.7, 11.6, 12.7, 14.2, 15.9, 16.9, 17.6,
				18.5, 19, 19.5, 19.5, 18.8, 17.8, 16.5, 15.9, 15.5, 15.1, 14.9, 14.8,
				14.6, 14.5, 14.4, 14.2, 14, 13.8, 13.8, 14.3, 15.2, 16.2, 17, 17.7,
				18.4, 18.4, 18.1, 17.7, 17.4, 17, 16.6, 16.5, 16.4, 16.3,
			],
		},
		daily_units: {
			time: 'iso8601',
			weathercode: 'wmo code',
			temperature_2m_max: '°C',
			temperature_2m_min: '°C',
		},
		daily: {
			time: [
				'2022-09-07',
				'2022-09-08',
				'2022-09-09',
				'2022-09-10',
				'2022-09-11',
				'2022-09-12',
				'2022-09-13',
			],
			weathercode: [3, 3, 80, 61, 61, 3, 61],
			temperature_2m_max: [20.4, 21.3, 13.7, 14.8, 13.3, 19.5, 18.4],
			temperature_2m_min: [7, 8.6, 10.5, 10.9, 10.4, 10.2, 13.8],
		},
	});

	useEffect(() => {
		fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${props.coords.lat}&longitude=${props.coords.lng}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
		)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Something went wrong');
			})
			.then((data) => setData(data))
			.catch((err) => console.log(err));
	}, [props]);

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
	useEffect(() => {
		setEditedData((prevData) => {
			const foundIndexes = data.hourly.time.indexOf(setDate(2, 2));
			return {
				...prevData,
				temperature: String(data.hourly.temperature_2m[foundIndexes]),
				time: setDate(0, 4),
			};
		});
	}, [data]);

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
			(code >= 14 && code <= 15) ||
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
			<div>
				<p>{weatherPrescription}</p>
				<img src={actualWeather} alt='pogoda' />
			</div>
		);
	}

	return (
		<div className='inline-block p-3 m-7 bg-slate-700 red'>
			<h2 className='m-1 text-xl'>{props.city}</h2>
			<p className='relative text-lg'>
				{editedData.temperature}{' '}
				<span className='absolute text-xs bottom-4 rignt-2'>°C</span>
			</p>
			<p className='text-sm '>
				{data.daily.temperature_2m_max[0]}°C /{' '}
				{data.daily.temperature_2m_min[0]}°C
			</p>
			{interpretWeatherCode(data.daily.weathercode[0])}
		</div>
	);
}

export default City;
