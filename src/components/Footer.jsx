/* eslint-disable no-console */
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';

import SocialMediaIcons from './SocialMediaIcons';

function Footer() {
	const year = new Date().getFullYear();

	// Needed for Particles component's init props.
	const particlesInit = async main => {
		await loadFull(main);
	};

	// Needed for Particles component's loaded props.
	const particlesLoaded = container => {
		console.log(container);
	};

	return (
		<footer className='h-60 bg-dark-blue pt-10'>
			{/* Text */}
			<div className='w-10/12 mx-auto'>
				<SocialMediaIcons />
				<div className='md:flex justify-center md:justify-between text-center'>
					<p className='font-playfair font-semibold text-2xl text-yellow'>
						Munish Mummadi
					</p>
					<p className='font-playfair text-md text-yellow'>
						©{year} DyslecixDev. All Rights Reserved.
					</p>
				</div>
			</div>

			{/* TS Particles effect */}
			<Particles
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				// The options object holds the tsParticles options.
				options={{
					// The background canvas.
					background: {
						// Image of the background canvas.
						image: "url('https://particles.js.org/images/background3.jpg')",
						// Background canvas position.
						position: 'center',
						// Background canvas repeat.
						repeat: 'no-repeat',
						// Background canvas size.
						size: 'cover'
					},

					// The foreground canvas covering the background canvas.
					backgroundMask: {
						// Enables the backgroundMask object.
						enable: true,
						// Styling the foreground canvas.
						cover: {
							// Color of the foreground canvas.
							color: '#5b4db3'
						}
					},

					fullScreen: {enable: false},

					// Enables the device's retina detection setting.
					detectRetina: true,

					// Frame per second limit for particle animations.
					fpsLimit: 120,

					// Mouse interactivity with particles.
					interactivity: {
						// Mouse interaction works on the entire screen.
						detectsOn: 'window',
						// Mouse events.
						events: {
							// On-click mouse effect.
							onclick: {
								// Enables this onclick object.
								enable: true,
								// Particles avoid the mouse.
								mode: 'repulse'
							},
							// On-hover mouse effect.
							onhover: {
								// Enables this onhover object.
								enable: true,
								// Generates a trail of particles under the mouse.
								mode: 'trail'
							}
						},
						// Styles the mode keys in the events object.
						modes: {
							// The repulse mode.
							repulse: {
								// Distance particles are from the mouse.
								distance: 200
							},
							// The trail mode.
							trail: {
								// Delay between each generation of particles.
								delay: 0.01,
								// How many particles are generated at a time.
								quantity: 2
							}
						}
					},

					// Styles the particles.
					particles: {
						// Movement of particles.
						move: {
							// Enables this move object.
							enable: true,
							// Particles disappear when moving past the screen's border.
							outModes: 'destroy',
							// How quickly particles move.
							speed: 5
						},
						// Number of particles.
						number: {
							// How many particles on the screen when first rendered.
							value: 0
						},
						// Transparency of the particles.
						opacity: {
							// How transparent particles are.
							value: 0.9
						},
						// Shape of the particles.
						shape: {
							// Shape type.
							type: 'circle'
						},
						// Size of the particles.
						size: {
							// How large particles are.
							value: {min: 10, max: 50},
							// Animation if the value has a min and max.
							animation: {
								// At what size particles disappear.
								destroy: 'max',
								// Enables this animation object.
								enable: true,
								// How quickly particles move from the startValue to the opposite value.
								speed: 6,
								// Starting size of particles.
								startValue: 'min',
								// All particles change size at the same rate.
								sync: true
							}
						}
					}
				}}
			/>
		</footer>
	);
}

export default Footer;
