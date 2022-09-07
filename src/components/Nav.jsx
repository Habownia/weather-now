import { useState } from 'react';

function Nav(props) {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='text-xl normal-case btn btn-ghost'>WeatherNow</a>
			</div>
			<div className='flex-none gap-4 mr-6'>
				<div className='tooltip tooltip-bottom' data-tip='Odśwież'>
					<div className='btn btn-ghost btn-circle '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							className='scale-125 fill-slate-400'
						>
							<path d='M23 12c0 1.042-.154 2.045-.425 3h-2.101c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9-1.706 0-3.296.484-4.655 1.314l1.858 2.686h-6.994l2.152-7 1.849 2.673c1.684-1.049 3.659-1.673 5.79-1.673 6.074 0 11 4.925 11 11zm-6.354 7.692c-1.357.826-2.944 1.308-4.646 1.308-4.962 0-9-4.038-9-9 0-1.053.191-2.06.525-3h-2.1c-.271.955-.425 1.958-.425 3 0 6.075 4.925 11 11 11 2.127 0 4.099-.621 5.78-1.667l1.853 2.667 2.152-6.989h-6.994l1.855 2.681z' />
						</svg>
					</div>
				</div>
				<div className='tooltip tooltip-bottom' data-tip='Dodaj miasto'>
					<div className='btn btn-ghost btn-circle'>
						<svg
							width='24'
							height='24'
							xmlns='http://www.w3.org/2000/svg'
							className='scale-125 -translate-y-1 fill-slate-400'
						>
							<path d='M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z' />
						</svg>
					</div>
				</div>

				<select
					className='select select-bordered'
					onChange={props.handleChange}
					name='city'
					value={props.city || ''}
				>
					<option disabled value=''>
						Wybierz miasto
					</option>
					<option value='Warszawa'>Warszawa</option>
					<option value='Nowy York'>Nowy York</option>
					<option value='Londyn'>Londyn</option>
					<option value='Pekin'>Pekin</option>
					<option value='Canberra'>Canberra</option>
				</select>
			</div>
		</div>
	);
}

export default Nav;