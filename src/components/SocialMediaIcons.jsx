// import Linkedin from '../assets/linkedin.png';
// import Github from '../assets/github.png';
// import X from '../assets/x.png';
// import Instagram from '../assets/instagram.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

function SocialMediaIcons() {
	return (
		<div className='flex justify-center md:justify-start my-10 gap-7'>
			<a
				className='hover:opacity-50 transition-duration-500'
				href='https://www.linkedin.com/in/munishmummadi/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon icon={faLinkedin} style={{color: '#ffffff', fontSize: '2rem'}} />
			</a>
			<a
				className='hover:opacity-50 transition-duration-500'
				href='https://github.com/MunishMummadi'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon icon={faGithub} style={{color: '#ffffff', fontSize: '2rem'}} />
			</a>
			{/* <a
				className='hover:opacity-50 transition-duration-500'
				href='https://logiclyceum.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon icon={faPaperPlane} style={{color: '#ffffff', fontSize: '2rem'}} />
			</a> */}
			<a
				className='hover:opacity-50 transition-duration-500'
				href='https://twitter.com/MunishMummadi'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon icon={faXTwitter} style={{color: '#ffffff', fontSize: '2rem'}} />
			</a>
			<a
				className='hover:opacity-50 transition-duration-500'
				href='https://www.instagram.com/kausaleya_nandan/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon icon={faInstagram} style={{color: '#ffffff', fontSize: '2rem'}} />
			</a>
		</div>
	);
}

export default SocialMediaIcons;
