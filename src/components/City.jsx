import useFetch from '../../hooks/useFetch';

function City(props) {
	const { city, coords } = props;
	const data = useFetch(city, coords, false);

	return (
		<div className=' w-56 p-6 m-7 rounded-xl bg-slate-700 red flex flex-col items-center justify-center'>
			<div className='flex items-center gap-2'>
				<h2 className='m-1 text-xl'>{data.city}</h2>
				<p className='relative text-xl'>
					{data.temperature}
					<span>°C</span>
				</p>
			</div>
			<p className='text-sm '>
				{data.temp_max}°C / {data.temp_min}°C
			</p>
			{data.weathercode}
			<p>Wschód: {data.sunrise}</p>
			<p>Zachód: {data.sunset}</p>
		</div>
	);
}

export default City;
