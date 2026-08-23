'use client';
import Certified from '@/components/certified';
import DetailsTitle from '@/components/details_title';
import Title from '@/components/title';
import Image from 'next/image';
import { SiGithub, SiGrafana, SiJavascript, SiMicrosoftexcel, SiMysql, SiPhp } from 'react-icons/si';

export default function SkillsExpPage() {
  const isDisabled = true;

  const experience = [
    {
      title: 'Junior Data Analyst',
      company: 'PhilWeb Corporation',
      year: 'Nov 2024 - Present',
      description: 'Developed automated reporting solutions and performed efficient ETL processes. Focused on transforming raw data into actionable insights through custom report development, backend scripting, and data analysis.',
    },
    {
      title: 'Backend Developer Intern',
      company: 'Pixel8 Web Solutions & Consultancy Inc.',
      year: 'Jan 2024 - 2021',
      description: 'Developed and tested APIs to handle success and error responses, and collaborated with the team to ensure seamless integration.',
    },
  ];
  const frameworks: { icon: React.ReactNode; title: string }[] = [
    { icon: <Image src='/python-logo.svg' width={40} height={40} alt='python' className='w-[40px] h-[40px] object-contain' />, title: 'Python' },
    { icon: <Image src='/airflow-fan.png' width={40} height={40} alt='airflow' className='w-[40px] h-[40px] object-contain' />, title: 'Apache Airflow' },
    { icon: <SiJavascript size={40} className='text-[#F7DF1E]' />, title: 'JavaScript' },
    { icon: <SiPhp size={40} className='text-[#777BB4]' />, title: 'PHP' },
    { icon: <SiMysql size={40} className='text-[#00758F]' />, title: 'MySQL' },
    { icon: <SiMicrosoftexcel size={40} className='text-[#217346]' />, title: 'Microsoft Excel' },
    { icon: <SiGrafana size={40} className='text-[#F46800]' />, title: 'Grafana' },
    { icon: <SiGithub size={40} className='text-[#181717]' />, title: 'Github' },
  ];

  return (
    <section>
      <div className='w-full min-h-screen bg-white text-black flex flex-col px-5 pt-16 pb-8 xl:px-20 lg:px-10 overflow-hidden'>
        {/* Header */}
        <div className='mb-8'>
          <Certified badge='Skills and Experiences' />
          <Title title='Check My Skills and Work Experiences' />
        </div>

        {/* Content — grows to fill remaining space */}
        <div className='flex-1 flex items-center'>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-8 w-full'>
            <div className='flex flex-col gap-4'>
              <DetailsTitle title='Work Experience' bg_color='black' />
              <div className='relative mt-2'>
                {experience.map((exp, index) => (
                  <div key={index} className='relative flex gap-4 pb-8'>
                    <div className='flex flex-col items-center'>
                      <div className='w-3 h-3 rounded-full bg-secondary mt-1 z-10 shrink-0' />
                      {index < experience.length - 1 && (
                        <div className='w-[2px] bg-secondary flex-1 mt-1' />
                      )}
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[12px] sm:text-[14px]'>{exp.title}</h1>
                      <h1 className='text-secondary text-[11px] sm:text-[12px] font-medium'>{exp.company}</h1>
                      <h1 className='text-gray-400 text-[10px] sm:text-[11px]'>{exp.year}</h1>
                      <p className='text-[10px] sm:text-[11px] md:text-[12px] leading-5 text-gray-600'>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <DetailsTitle title='Programming Languages and Tools' bg_color='black' />
              <div className='grid grid-cols-4 gap-4 mt-2'>
                {frameworks.map((data, index) => (
                  <div
                    key={index}
                    className='group relative bg-gray-100 hover:bg-gray-200 rounded-md flex flex-col justify-center items-center gap-2 p-4 cursor-pointer transition-all duration-300'
                  >
                    <div className='flex items-center justify-center w-[40px] h-[40px] transition-transform duration-300 group-hover:scale-125'>
                      {data.icon}
                    </div>
                    <span className='text-[9px] font-semibold text-gray-500 group-hover:text-secondary text-center transition-colors duration-300'>
                      {data.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
