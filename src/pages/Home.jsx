import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TypeWriterEffect from 'react-typewriter-effect';
import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import ProfileImg from '../assets/profile-img.jpg';
import Resume from '../assets/resume.pdf';

const DownloadResumeButton = () => {
  const downloadFile = () => {
    fetch(Resume)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'MunishMummadiResume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error downloading PDF:', error));
  };

  return (
    <div className='bg-gradient-rainbow p-0.5 rounded'>
      <button
        onClick={downloadFile}
        className='bg-black hover:bg-white hover:text-black transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10'
      >
        Download My Resume
      </button>
    </div>
  );
};

function Home() {
  const isDesktop = useMediaQuery('(min-width: 1060px)');
  const [typewriterAlign, setTypewriterAlign] = useState('center');

  useEffect(() => {
    if (isDesktop) setTypewriterAlign('left');
    else setTypewriterAlign('center');
  }, [isDesktop]);

  return (
    <section
      id='home'
      className='mx-auto px-8 md:flex md:justify-between md:items-center md:h-full gap-16 pb-8 md:bg-gradient-reverse-space'
    >
      {/* Image Section */}
      <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-24 mb-20 md:mt-32'>
        {isDesktop ? (
          <img
            alt='profile'
            className='grayscale hover:grayscale-0 duration-1000 z-10 w-full max-w-[400px] cursor-pointer rounded-t-full'
            src={ProfileImg}
          />
        ) : (
          <img
            alt='profile'
            className='z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-full'
            src={ProfileImg}
          />
        )}
      </div>

      {/* Main section */}
      <div className='z-30 basis-1/2 mt-12'>
        {/* Heading */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className='text-6xl font-playfair z-10 text-center md:text-start'>
            Munish{' '}
            <span className='xs:relative xs:text-white xs:font-semibold z-20 xs:before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'>
            Mummadi
            </span>
          </p>

          {/* Typewriter Effect */}
          <div className='mt-10 mb-8 text-4xl md:text-start text-white font-playfair'>
            <TypeWriterEffect
              textStyle={{ textAlign: typewriterAlign }}
              startDelay={1000}
              cursorColor='#FBF9F3'
              multiText={[
                'a Blank Slate',
                'Tech Nerd',
                'Book Worm',
                'Introvert',
                'Linux Guy',
                'and Software Engineer'
              ]}
              multiTextDelay={2000}
              multiTextLoop={true}
              typeSpeed={90}
            />
          </div>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <DownloadResumeButton />
        </motion.div>

        {/* Social Links */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
