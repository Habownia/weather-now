import CityBox from './CityBox';
import settingCoords from '../../hooks/settingCoords';

function City(props) {
	const cities = props.reducedArray.map((item) => (
		<CityBox key={item} city={item} coords={settingCoords(item)} />
	));

	return (
		<div className=' min-h-[90vh] flex flex-wrap justify-center content-center gap-5'>
			{cities}
		</div>
	);
}

export default City;
