'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const Menu = [
    { name: 'Home', href: '#/home', id: '/home' },
    { name: 'About', href: '#about-page', id: 'about-page' },
    { name: 'Skills', href: '#skills-page', id: 'skills-page' },
    { name: 'Projects', href: '#project-page', id: 'project-page' },
    { name: 'Services', href: '#service-page', id: 'service-page' },
    { name: 'Contact', href: '#footer-page', id: 'footer-page' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const unToggleMenu = () => setTimeout(() => setIsMenuOpen(false), 100);

  const detectActive = () => {
    const offsets = Menu.map(({ id }) => {
      const el = document.getElementById(id);
      return el ? el.getBoundingClientRect().top : Infinity;
    });
    const closest = offsets.reduce((best, top, i) =>
      Math.abs(top) < Math.abs(offsets[best]) ? i : best, 0);
    setActiveIndex(closest);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setScrollingUp(currentScrollTop < lastScrollTop);
      setLastScrollTop(currentScrollTop);
      detectActive();
    };

    requestAnimationFrame(detectActive);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header
      style={{ transform: scrollingUp ? 'translateY(0)' : 'translateY(-100%)' }}
      className='bg-white/80 backdrop-blur-md'>
      <div className='md:px-10 px-3 py-3'>
        <div className='flex justify-between items-center'>
          <div />
          <div className='hidden md:flex gap-5 items-center font-medium text-[14px]'>
            {Menu.map((title, index) => (
              <div key={index} className='relative group'>
                <Link
                  href={title.href}
                  onClick={() => setActiveIndex(index)}
                  className={`px-1 py-1 transition-colors duration-300 ${
                    activeIndex === index ? 'text-secondary' : 'hover:text-secondary'
                  }`}>
                  {title.name}
                </Link>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-secondary rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </div>
            ))}
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='focus:outline-none flex items-center'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-7'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='md:hidden px-3 py-3 bg-bg_primary shadow-md rounded-md absolute right-2'>
                {Menu.map((title, index) => (
                  <div key={index} className={`flex flex-col p-3 font-medium rounded-md transition-colors duration-200 ${
                    activeIndex === index ? 'text-secondary' : 'hover:bg-secondary'
                  }`}>
                    <Link href={title.href} onClick={() => { setActiveIndex(index); unToggleMenu(); }}>
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
