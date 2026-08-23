'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const Menu = [
    { name: 'Home', href: '#/home' },
    { name: 'Projects', href: '#project-page' },
    { name: 'Skills', href: '#skills-page' },
    { name: 'Services', href: '#service-page' },
    { name: 'About', href: '#about-page' },
    { name: 'Contact', href: '#footer-page' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const unToggleMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setScrollingUp(currentScrollTop < lastScrollTop);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      style={{
        transform: scrollingUp ? 'translateY(0)' : 'translateY(-100%)',
      }}
      className='bg-[#eae9e5]/75'>
      <div className='md:px-10 px-3 py-3'>
        <div className='flex justify-between items-center'>
          <Link
            href={'#home'}
            className='flex justify-center items-center gap-2'>
            <Image
              src='/jeff_wo_text_logo.png'
              width={50}
              height={0}
              alt='Logo'
              className='animate-scaleIn'
            />
            <h1 className='font-extrabold hidden md:flex'>Welcome!</h1>
          </Link>
          <div className='hidden md:flex gap-5 items-center font-medium text-[14px]'>
            {Menu.map((title, index) => (
              <div
                key={index}
                className='hover:text-secondary p-1 rounded-lg transition-all transform hover:scale-125 duration-300'>
                <Link href={title.href}>{title.name}</Link>
              </div>
            ))}
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='focus:outline-none flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='size-7'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='md:hidden px-3 py-3 bg-bg_primary shadow-md rounded-md absolute right-2'>
                {Menu.map((title, index) => (
                  <div
                    key={index}
                    className='flex flex-col p-3 hover:bg-secondary font-medium rounded-md'>
                    <Link href={title.href} onClick={unToggleMenu}>
                      {title.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
