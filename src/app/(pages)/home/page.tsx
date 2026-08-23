'use client';
import Certified from '@/components/certified';
import Socials from '@/components/socials';
import TypeAnimation from '@/components/text_type';
import Image from 'next/image';
import Link from 'next/link';
import { project_details } from '@/app/_lib/db';

const JOB_START = new Date('2024-11-01');

function getExperienceLabel() {
  const months =
    (new Date().getFullYear() - JOB_START.getFullYear()) * 12 +
    (new Date().getMonth() - JOB_START.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (years === 0) return `${rem}mo`;
  return rem === 0 ? `${years}yr` : `${years}yr ${rem}mo`;
}

export default function LandingPage() {
  const projectCount = project_details.length;
  const experienceLabel = getExperienceLabel();
  return (
    <section>
      <div className='w-full h-svh bg-bg_primary flex flex-col px-5 xl:px-20 lg:px-8 pt-20 pb-8'>

        {/* Main hero — grows to fill space */}
        <div className='flex-1 grid md:grid-cols-2 gap-8 items-center min-h-0'>

          {/* Left — text content */}
          <div className='flex flex-col gap-5 justify-center'>
            <div className='animate-slideInLeft1'>
              <Certified badge='Junior Data Analyst at PhilWeb Corporation' />
            </div>

            <div className='flex flex-col gap-1 animate-slideInLeft2'>
              <h2 className='font-bold xl:text-[48px] lg:text-[38px] md:text-[28px] text-[28px] leading-tight m-0'>
                Hello! I&apos;m
              </h2>
              <h1 className='font-sora font-bold xl:text-[64px] lg:text-[48px] md:text-[40px] text-[40px] leading-none m-0 animate-slideInLeft3'>
                Jefferson C. Bual
              </h1>
            </div>

            <div className='animate-slideInLeft4'>
              <TypeAnimation />
            </div>

            <p className='text-[11px] md:text-[12px] lg:text-[13px] text-gray-500 leading-6 max-w-md animate-slideInLeft4'>
              Junior Data Analyst with hands-on experience building automated ETL pipelines,
              optimizing SQL queries, and delivering actionable insights through data visualization.
            </p>

            <div className='flex flex-col gap-4 animate-scaleIn'>
              <Link
                href={'#service-page'}
                className='w-fit bg-secondary flex items-center justify-center gap-2 px-6 py-3 hover:bg-button_hover text-white transition-all transform hover:scale-105 duration-300 rounded-lg text-[13px] font-semibold'>
                Get Started
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
                </svg>
              </Link>
              <Socials />
            </div>
          </div>

          {/* Right — profile image */}
          <div className='hidden md:flex w-full justify-center items-center'>
            {/* Outer wrapper with overflow visible so neuron lines extend outside */}
            <div className='relative flex justify-center items-center w-full max-w-[480px] xl:max-w-[560px]'>
              {/* Glow blob */}
              <div className='absolute w-[360px] h-[360px] xl:w-[440px] xl:h-[440px] rounded-full bg-secondary/10 blur-3xl -z-10' />
              {/* Accent rings */}
              <div className='absolute w-[260px] h-[260px] xl:w-[320px] xl:h-[320px] rounded-full border border-secondary/20 -z-10' />
              <div className='absolute w-[360px] h-[360px] xl:w-[440px] xl:h-[440px] rounded-full border border-secondary/10 -z-10' />

              {/* Hoverable profile image */}
              <Image
                src={'/profile_pic.png'}
                width={560}
                height={0}
                alt='profile'
                className='animate-scaleIn relative z-0 w-full h-auto transition-transform duration-500 hover:scale-105 cursor-pointer'
              />

              {/* Stat labels — bottom right of image */}
              <div className='absolute bottom-8 -right-6 flex items-center gap-4 animate-scaleIn z-20'>
                <div className='flex flex-col items-center'>
                  <p className='text-[20px] font-extrabold text-secondary leading-none'>{experienceLabel}</p>
                  <p className='text-[10px] font-semibold text-gray-400 leading-none mt-1'>Experience</p>
                </div>
                <div className='w-[1.5px] h-8 bg-secondary/40' />
                <div className='flex flex-col items-center'>
                  <p className='text-[20px] font-extrabold text-secondary leading-none'>{projectCount}</p>
                  <p className='text-[10px] font-semibold text-gray-400 leading-none mt-1'>Projects</p>
                </div>
              </div>

            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
