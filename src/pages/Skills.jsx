import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';

import {motion} from 'framer-motion';

import LineGradient from '../components/LineGradient';
import Globe from '../components/Globe';

function Skills() {
	return (
		<section id='skills' className='pt-10 mb-20 relative'>
			{/* Globe Background */}
			<div className='absolute w-full h-full'>
				<Canvas id='canvas'>
					<Suspense fallback={null}>
						<Globe />
					</Suspense>
				</Canvas>
			</div>

			{/* Header */}
			<div className='md:flex md:justify-between md:gap-16 mt-20 px-4'>
				{/* Text */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
					className='md:w-1/3'
				>
					<p className='font-playfair font-semibold text-4xl mb-5'>
						MY <span className='text-blue'>SKILLS</span>
					</p>

					<LineGradient width='w-1/3' />

					<p className='mt-10 mb-7'>
					I am Munish Mummadi, currently pursuing a Master's degree in Computer Information Science at Saint Louis University. 
                    My proficiency spans a diverse range of programming languages, including JavaScript/TypeScript, Python, C++, and Golang.
                    On the front-end development, I have experience with technologies such as React.js, Next.js, HTML, and CSS. 
                	On the backend, my skill set encompasses Node.js, Express.js, Nest.js, GraphQL, and the implementation of REST APIs.
					I have a solid understanding of containerization technologies, specifically Docker and Kubernetes, for efficient 
					deployment and management of applications. In terms of continuous integration and continuous deployment (CI/CD),
					I am well-versed in Jenkins, GitHub Actions, and ArgoCD.Infrastructure as Code (IAC) is an integral part of my expertise, and I am proficient in using Terraform, Pulumi, 
					and CloudFormation to automate and manage infrastructure deployments.In addition to the above, I have hands-on experience with essential tools like Git and Linux, ensuring effective 
					version control and a robust operating environment.

					</p>
				</motion.div>
			</div>
			{/* Skills */}
			<div className='md:flex md:justify-between mt-16 gap-32 px-4'>
				{/* Languages */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>01</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Languages</p>
						</div>
						<div className='w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						I am proficient in HTML, CSS, JavaScript, Typescript, Python, Rust, and SQL.
					</p>
				</motion.div>

				{/* Frameworks & Libraries */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.2, duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>02</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Frameworks</p>
						</div>
						<div className='w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						The frameworks I am the most comfortable with include React, Next.js,
						Angular, Node.js, Express.js, jQuery, NumPy, and Pandas.
					</p>
				</motion.div>

				{/* Miscellaneous */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.5}}
					transition={{delay: 0.4, duration: 0.5}}
					variants={{
						hidden: {opacity: 0, y: 50},
						visible: {opacity: 1, y: 0}
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>03</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>
								Miscellaneous
							</p>
						</div>
						<div className='w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Additional skills I have include a practical familiarity with MongoDB,
						MySQL, SQLite, Vercel, Netlify, Git, GitHub, Figma, Vite, Docker, Postman,
						Firebase, Supabase, DigitalOcean, JSON, SASS, TailwindCSS, Bootstrap, Jest,
						and WordPress.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default Skills;
