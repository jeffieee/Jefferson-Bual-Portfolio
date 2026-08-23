'use client';
import Image from 'next/image';
import Certified from './certified';
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const projectDetails = [
    {
      id: 1,
      src: '/airflow-icon.svg',
      alt: 'airflow',
      icon: true,
      badge: 'In Development',
      title: 'Airflow Data Pipeline',
      description:
        'A personal project I built to practice data engineering. It pulls data from free nature-related APIs (climate, earthquake, and environmental feeds), runs them through an Airflow ETL pipeline, and stores the results in MySQL.',
      highlights: ['Pulls from climate, earthquake, and environment APIs', 'Automated ETL scheduling with Airflow', 'Stores processed data in MySQL'],
      tools: [
        { src: '/airflow-icon.svg', alt: 'Airflow' },
        { src: '/python.png', alt: 'Python' },
        { src: '/mysql-logo.svg', alt: 'MySQL' },
        { src: '/github.png', alt: 'GitHub' },
      ],
    },
    {
      id: 2,
      src: '/grafana-icon.svg',
      alt: 'grafana-dashboard',
      icon: true,
      badge: 'In Development',
      title: 'Grafana Monitoring Dashboard',
      description:
        'A set of Grafana dashboards I built to visualize data from my Airflow pipeline and other database projects. It gives a live view of metrics and trends across all connected data sources.',
      highlights: ['Visualizes data from the Airflow nature pipeline', 'Connected to multiple database sources', 'Live metrics and trend panels'],
      tools: [
        { src: '/grafana-icon.svg', alt: 'Grafana' },
        { src: '/mysql-logo.svg', alt: 'MySQL' },
        { src: '/github.png', alt: 'GitHub' },
      ],
    },
    {
      id: 3,
      src: '/web_project2_img.png',
      alt: 'web_project2_img',
      icon: false,
      badge: 'Website',
      title: 'CityAssist: Local Resident Monitoring and Demographic-Based Program Recommendation System',
      description:
        'A web system built for barangay-level governance. It helps local officials monitor residents, view demographic data, and get program recommendations based on community needs.',
      highlights: ['Resident monitoring and data collection', 'Demographic-based program recommendations', 'Supports local resource planning'],
      tools: [
        { src: '/sql.png', alt: 'SQL' },
        { src: '/python.png', alt: 'Python' },
        { src: '/excel.png', alt: 'Excel' },
        { src: '/github.png', alt: 'GitHub' },
      ],
    },
    {
      id: 4,
      src: '/web_project1_img.png',
      alt: 'web-project1_img',
      icon: false,
      badge: 'Website',
      title: 'Web-Based Student Academic Performance Monitoring System for Banay-Banay Elementary School',
      description:
        'A web-based system built for Banay-Banay Elementary School to help teachers and admins track student academic performance. It centralizes grade records and makes it easier to monitor progress over time.',
      highlights: ['Student performance tracking per subject', 'Centralized grade and record management', 'Separate dashboards for teachers and admins'],
      tools: [
        { src: '/php.png', alt: 'PHP' },
        { src: '/sql.png', alt: 'SQL' },
        { src: '/github.png', alt: 'GitHub' },
      ],
    },
    {
      id: 5,
      src: '/baya-mobile-project.png',
      alt: 'baya-mobile-project',
      icon: false,
      badge: 'Mobile',
      title: 'BayaScript: Convolutional Neural Networks Driven Character Recognition In a Mobile Application for Learning BayBayin',
      description:
        'A mobile app built to help users learn Baybayin, an ancient Philippine writing system. It includes lessons, quizzes, and a writing pad that uses a CNN model to recognize handwritten Baybayin characters.',
      highlights: ['CNN-based handwritten character recognition', 'Interactive lessons and quizzes', 'Writing practice with real-time feedback'],
      tools: [
        { src: '/java.png', alt: 'Java' },
        { src: '/python.png', alt: 'Python' },
        { src: '/github.png', alt: 'GitHub' },
      ],
    },
  ];

  const current = projectDetails[currentIndex];

  const navigate = (newIndex: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setVisible(true);
    }, 150);
  };

  const handleNext = () => {
    if (currentIndex < projectDetails.length - 1) navigate(currentIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) navigate(currentIndex - 1);
  };

  return (
    <div className='w-full flex flex-col'>
      {/* Main card */}
      <div className='flex-1 w-full flex flex-col lg:grid lg:grid-cols-2 gap-8 items-stretch justify-center'>
        {/* Image */}
        <div className='flex w-full items-center justify-center bg-gray-50 rounded-xl overflow-hidden h-[300px] md:h-[380px] lg:h-full lg:min-h-[380px]'>
          <Image
            src={current.src}
            width={400}
            height={400}
            alt={current.alt}
            className={`object-contain transition-opacity duration-150 ${visible ? 'opacity-100' : 'opacity-0'} ${current.icon ? 'w-[180px] h-[180px] md:w-[220px] md:h-[220px]' : 'w-full h-full p-10'}`}
          />
        </div>

        {/* Info */}
        <div className='flex flex-col gap-5 justify-center'>
          <Certified badge={current.badge} />
          <h1 className='font-bold text-[16px] xl:text-[22px] leading-snug'>
            {current.title}
          </h1>
          <p className='text-[12px] xl:text-[14px] leading-7 text-gray-600'>
            {current.description}
          </p>

          {/* Highlights */}
          <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-[13px]'>Key Highlights</h2>
            <ul className='flex flex-col gap-2'>
              {current.highlights.map((h, i) => (
                <li key={i} className='flex items-center gap-2 text-[12px] xl:text-[13px] text-gray-600'>
                  <span className='w-1.5 h-1.5 rounded-full bg-secondary shrink-0' />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-[13px]'>Tools Used</h2>
            <div className='flex flex-row gap-4 items-center'>
              {current.tools.map((tool, i) => (
                <div key={i} className='group flex flex-col items-center gap-1'>
                  <div className='transition-transform duration-300 group-hover:scale-125'>
                    <Image src={tool.src} width={26} height={26} alt={tool.alt} className='object-contain w-[26px] h-[26px]' />
                  </div>
                  <span className='text-[10px] text-gray-400 group-hover:text-secondary transition-colors duration-300'>{tool.alt}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={`/project/${current.id}`}
            className='w-fit px-4 py-2 text-[11px] font-semibold border-2 border-secondary text-black rounded-lg hover:bg-secondary hover:text-white transition-all duration-300'>
            View Project →
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className='flex flex-row justify-center items-center gap-4 w-full pt-6 mt-auto border-t border-gray-100'>
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className='group flex items-center justify-center w-8 h-8 rounded-full border-2 border-secondary text-black transition-all duration-300 hover:bg-secondary hover:text-white disabled:opacity-30 disabled:pointer-events-none'>
          <svg className='size-4 transition-transform duration-300 group-hover:-translate-x-1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
            <path d='m15 18-6-6 6-6'></path>
          </svg>
        </button>
        <div className='flex gap-2 items-center'>
          {projectDetails.map((_, index) => (
            <button
              key={index}
              onClick={() => navigate(index)}
              className={`rounded-full transition-all duration-300 ${index === currentIndex ? 'w-6 h-3 bg-secondary' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentIndex === projectDetails.length - 1}
          className='group flex items-center justify-center w-8 h-8 rounded-full border-2 border-secondary text-black transition-all duration-300 hover:bg-secondary hover:text-white disabled:opacity-30 disabled:pointer-events-none'>
          <svg className='size-4 transition-transform duration-300 group-hover:translate-x-1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
            <path d='m9 18 6-6-6-6'></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
