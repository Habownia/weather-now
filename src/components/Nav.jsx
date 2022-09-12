import { Link } from 'react-router-dom';
import { MdPlaylistAdd } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';

function Nav(props) {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='text-xl normal-case btn btn-ghost'>WeatherNow</a>
			</div>
			<div className='flex-none gap-4 mr-6'>
				{props.isSetCites ? (
					<Link to='/'>
						<div className='tooltip tooltip-bottom' data-tip='Powrót'>
							<div className='btn btn-ghost btn-circle'>
								<HiHome size={35} />
							</div>
						</div>
					</Link>
				) : (
					<>
						<Link to='/setcities'>
							<div className='tooltip tooltip-bottom' data-tip='Dodaj miasto'>
								<div className='btn btn-ghost btn-circle'>
									<MdPlaylistAdd size={35} />
								</div>
							</div>
						</Link>
						{/* <select
							className='select select-bordered'
							onChange={props.handleChange}
							name='city'
							value={props.city || ''}
						>
							<option disabled value=''>
								Wybierz miasto
							</option>
							<option value='Warszawa'>Warszawa</option>
							<option value='Kair'>Kair</option>
							<option value='Londyn'>Londyn</option>
							<option value='Pekin'>Pekin</option>
							<option value='Canberra'>Canberra</option>
						</select> */}
					</>
				)}
			</div>
		</div>
	);
}

export default Nav;
