'use client';
import Certified from '@/components/certified';
import DetailsTitle from '@/components/details_title';
import Title from '@/components/title';
import Image from 'next/image';
import { SiGithub, SiGrafana, SiJavascript, SiMicrosoftexcel, SiMysql, SiPhp, SiTypescript, SiOpenai, SiGooglegemini, SiPostgresql, SiPostman } from 'react-icons/si';

export default function SkillsExpPage() {
  const isDisabled = true;

  const experience = [
    {
      title: 'Junior Data Analyst',
      company: 'PhilWeb Corporation',
      year: 'Nov 2024 - Present',
      description: 'Working on ETL pipelines, automated reporting, and SQL-based data processing to keep data accurate and stakeholders informed.',
    },
    {
      title: 'Backend Developer Intern',
      company: 'Pixel8 Web Solutions & Consultancy Inc.',
      year: 'Jan 2024 - Jun 2024',
      description: 'Developed and tested REST APIs, handled response structures for both success and error cases, and worked closely with the team during integration.',
    },
  ];
  const tools: { icon: React.ReactNode; title: string }[] = [
    { icon: <Image src='/airflow-fan.png' width={28} height={28} alt='airflow' className='w-[28px] h-[28px] object-contain' />, title: 'Apache Airflow' },
    { icon: <SiMysql size={28} className='text-[#00758F]' />, title: 'MySQL' },
    { icon: <SiMicrosoftexcel size={28} className='text-[#217346]' />, title: 'Excel' },
    { icon: <SiGrafana size={28} className='text-[#F46800]' />, title: 'Grafana' },
    { icon: <SiPostman size={28} className='text-[#FF6C37]' />, title: 'Postman' },
    { icon: <SiGithub size={28} className='text-[#181717]' />, title: 'Github' },
  ];
  const languages: { icon: React.ReactNode; title: string }[] = [
    { icon: <Image src='/python-logo.svg' width={28} height={28} alt='python' className='w-[28px] h-[28px] object-contain' />, title: 'Python' },
    { icon: <SiJavascript size={28} className='text-[#F7DF1E]' />, title: 'JavaScript' },
    { icon: <SiTypescript size={28} className='text-[#3178C6]' />, title: 'TypeScript' },
    { icon: <SiPhp size={28} className='text-[#777BB4]' />, title: 'PHP' },
    { icon: <SiPostgresql size={28} className='text-[#4169E1]' />, title: 'SQL' },
  ];
  const ai: { icon: React.ReactNode; title: string }[] = [
    { icon: <SiOpenai size={28} className='text-[#412991]' />, title: 'ChatGPT' },
    { icon: <Image src='/claude-logo.png' width={28} height={28} alt='claude' className='w-[28px] h-[28px] object-contain' />, title: 'Claude' },
    { icon: <SiGooglegemini size={28} className='text-[#4285F4]' />, title: 'Gemini' },
  ];

  return (
    <section>
      <div className='w-full min-h-screen bg-white text-black flex flex-col px-5 pt-16 pb-8 xl:px-20 lg:px-10 overflow-hidden'>
        {/* Header */}
        <div className='mb-8 animate-slideInUp1'>
          <Certified badge='Skills & Experience' />
          <Title title="What I Know and Where I've Worked" />
        </div>

        {/* Content — grows to fill remaining space */}
        <div className='flex-1 flex items-center'>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-8 w-full'>
            <div className='flex flex-col gap-4 animate-slideInUp2'>
              <DetailsTitle title='Work Experiences' bg_color='black' />
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
            <div className='flex flex-col gap-4 animate-slideInRight1'>
              <div className='flex flex-col gap-5 mt-2'>

                <div>
                  <p className='text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3'>Tools</p>
                  <div className='grid grid-cols-2 gap-2'>
                    {tools.map((data, index) => (
                      <div key={index} className='group flex items-center gap-3 bg-gray-50 hover:bg-secondary/10 border border-gray-100 hover:border-secondary/30 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300'>
                        <div className='shrink-0 w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>{data.icon}</div>
                        <span className='text-[11px] font-medium text-gray-600 group-hover:text-secondary transition-colors duration-300 truncate'>{data.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className='text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3'>Programming Languages</p>
                  <div className='grid grid-cols-2 gap-2'>
                    {languages.map((data, index) => (
                      <div key={index} className='group flex items-center gap-3 bg-gray-50 hover:bg-secondary/10 border border-gray-100 hover:border-secondary/30 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300'>
                        <div className='shrink-0 w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>{data.icon}</div>
                        <span className='text-[11px] font-medium text-gray-600 group-hover:text-secondary transition-colors duration-300 truncate'>{data.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className='text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3'>AI</p>
                  <div className='grid grid-cols-2 gap-2'>
                    {ai.map((data, index) => (
                      <div key={index} className='group flex items-center gap-3 bg-gray-50 hover:bg-secondary/10 border border-gray-100 hover:border-secondary/30 rounded-xl px-4 py-3 cursor-pointer transition-all duration-300'>
                        <div className='shrink-0 w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>{data.icon}</div>
                        <span className='text-[11px] font-medium text-gray-600 group-hover:text-secondary transition-colors duration-300 truncate'>{data.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
