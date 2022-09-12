import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

function Footer() {
	return (
		<footer className='footer footer-center py-6 bg-base-300 text-base-content rounded'>
			{/* <div>
				<p>Copyright © 2022 - All right reserved by Habownia</p>
			</div> */}
			<div>
				<div className='flex gap-3'>
					<a className='btn btn-ghost btn-circle'>
						<BsFacebook size={35} />
					</a>
					<a className='btn btn-ghost btn-circle'>
						<AiOutlineInstagram size={40} />
					</a>
					<a className='btn btn-ghost btn-circle'>
						<AiFillGithub size={40} />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
