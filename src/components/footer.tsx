import Socials from './socials';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Certified from './certified';
import Title from './title';

export default function Footer() {
  const contactItems = [
    { icon: <FaPhone size={16} className='text-secondary' />, text: '(+63) 9286199959' },
    { icon: <FaEnvelope size={16} className='text-secondary' />, text: 'bualjefferson64@gmail.com' },
    { icon: <FaMapMarkerAlt size={16} className='text-secondary' />, text: 'Laguna, Philippines' },
  ];

  return (
    <footer>
      {/* Contact page */}
      <div className='w-full min-h-screen bg-bg_primary flex flex-col px-5 pt-16 pb-8 xl:px-20 lg:px-10'>
        {/* Header */}
        <div className='mb-8 animate-slideInUp1'>
          <Certified badge='Contact' />
          <Title title='Get in Touch' />
          <p className='text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] text-gray-500'>
            I&apos;m open to job opportunities, collaborations, or just a quick conversation. Don&apos;t hesitate to reach out.
          </p>
        </div>

        {/* Centered contact info */}
        <div className='flex-1 flex items-center justify-center'>
          <div className='flex flex-col items-center gap-8 animate-slideInUp2'>
            <div className='flex flex-col gap-5'>
              {contactItems.map((item, i) => (
                <div key={i} style={{ animationDelay: `${i * 0.1 + 0.3}s` }} className='flex items-center gap-4 animate-fadeIn1 [animation-fill-mode:both]'>
                  <div className='w-9 h-9 rounded-full border-2 border-secondary flex items-center justify-center shrink-0'>
                    {item.icon}
                  </div>
                  <span className='text-[13px] md:text-[15px] font-medium text-primary'>{item.text}</span>
                </div>
              ))}
            </div>
            <Socials />
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-auto pt-4 border-t border-gray-100'>
          <p className='text-center text-[11px] text-gray-400'>All Rights Reserved 2024</p>
        </div>
      </div>
    </footer>
  );
}
