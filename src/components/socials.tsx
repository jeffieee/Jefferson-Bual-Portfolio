'use client';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Socials() {
  return (
    <div className='flex justify-center items-center gap-3 py-2 px-5 w-fit border-secondary border-2 rounded-2xl'>
      <div className='transition-all transform hover:px-6 hover:scale-125 duration-300'>
        <div className='rounded-full p-2 hover:bg-bg_hover duration-300'>
          <FaGithub
            size={25}
            onClick={() => window.open('https://github.com/itsmenikoru')}
          />
        </div>
      </div>
      <div className='transition-all transform hover:px-6 hover:scale-125 duration-300'>
        <div className='rounded-full p-2 hover:bg-bg_hover duration-300'>
          <FaLinkedin
            size={25}
            onClick={() =>
              window.open('https://www.linkedin.com/in/jeffersonbual/')
            }
          />
        </div>
      </div>
      <div className='transition-all transform hover:px-6 hover:scale-125 duration-300'>
        <div className='rounded-full p-2 hover:bg-bg_hover duration-300'>
          <MdEmail
            size={25}
            onClick={() => window.open('mailto:bualjefferson64@gmail.com')}
          />
        </div>
      </div>
    </div>
  );
}
