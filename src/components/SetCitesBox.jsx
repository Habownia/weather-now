import useFetch from '../../hooks/useFetch';

function SetCitiesBox(props) {
	const data = useFetch(props.city, props.coords, true);
	console.log(data);

	return (
		<div className='m-4'>
			<div className='flex gap-2 items-center py-2'>
				<p className='text-xl'>{data.city}</p>
				<p className='text-lg'>{data.temperature}°C</p>
			</div>
			{data.weathercode}
			{/* Taki znaczek usuń trzeba dodać i go dać w lewy górny róg i dać mu handleDelete jako props i go usuwać z arraya */}
		</div>
	);
}

export default SetCitiesBox;
