import useFetch from '../../hooks/useFetch';
import { AiFillDelete } from 'react-icons/ai';

function SetCitiesBox(props) {
	const data = useFetch(props.city, props.coords, false);

	// console.log(props.city, '>', props.coords, ':', data);

	return (
		<>
			{data && (
				<div className='m-4 indicator flex flex-col'>
					<div className='flex gap-2 items-center py-2'>
						<p className='text-xl'>{props.city}</p>
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
