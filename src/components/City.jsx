import useFetch from '../../hooks/useFetch';
import { BsFillSunsetFill, BsFillSunriseFill } from 'react-icons/bs';

function City(props) {
	const { city, coords } = props;
	const data = useFetch(city, coords, false);

	return (
		<div className=' w-72 h-52  p-6 m-7 rounded-xl bg-slate-700 red flex flex-col items-center justify-center'>
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
			<span className='mt-2'>{data.weathercode}</span>
			<div className='mt-2'>
				<p className='flex items-center gap-2'>
					<BsFillSunriseFill size={22} />
					<span className='font-bold'>{data.sunrise}</span>
				</p>
				<p className='flex items-center gap-2'>
					<BsFillSunsetFill size={22} />{' '}
					<span className='font-bold'>{data.sunset}</span>
				</p>
			</div>
		</div>
	);
}

export default City;
