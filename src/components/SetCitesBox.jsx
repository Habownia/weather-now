import useFetch from '../../hooks/useFetch';
import { AiFillDelete } from 'react-icons/ai';

function SetCitiesBox(props) {
	const data = useFetch(props.city, props.coords, false);

	// lazy loader uruchamia się gdy nie ma weathercode'a albo props.city nie są równe data.city
	// if (typeof data.weathercode === 'undefined' || props.city !== data.city) {
	// 	return <div>Lazyloader</div>;
	// }
	return (
		<>
			{data && props.city === data.city && (
				<div className='m-4 indicator flex flex-col'>
					<div className='flex gap-2 items-center py-2'>
						<p className='text-xl'>{data.city}</p>
						<p className='text-lg'>{data.temperature}°C</p>
					</div>
					{data.weathercode}
					<AiFillDelete
						size={20}
						className=' indicator-item -right-3 top-1 hover:text-red-700 transition-colors'
						onClick={() => {
							props.handleDelete(props.city);
						}}
					/>
				</div>
			)}
		</>
	);
}

export default SetCitiesBox;
