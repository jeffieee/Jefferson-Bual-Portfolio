import Certified from '@/components/certified';
import Description from '@/components/description';
import Title from '@/components/title';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services_card: { src: string; alt: string; title: string; details: string[] }[] = [
    {
      src: '/airflow-fan.png',
      alt: 'Data Engineering',
      title: 'Data Engineering',
      details: ['Apache Airflow'],
    },
    {
      src: '/mysql-logo.svg',
      alt: 'Database Management',
      title: 'Database Management',
      details: ['MySQL'],
    },
    {
      src: '/numpy-logo.svg',
      alt: 'Statistical Analysis',
      title: 'Statistical Analysis',
      details: ['NumPy'],
    },
    {
      src: '/grafana-icon.svg',
      alt: 'Data Visualization',
      title: 'Data Visualization',
      details: ['Grafana'],
    },
  ];
  return (
    <section>
      <div className='w-full min-h-screen bg-bg_secondary flex flex-col px-5 pt-16 pb-8 xl:px-20 lg:px-10 overflow-hidden'>
        {/* Header */}
        <div className='w-full mb-8'>
          <Certified badge='Best Services' />
          <Title title='Data Engineering & Analysis' />
          <p className='sm:text-[11px] md:text-[12px] lg:text-[13px] text-[10px]'>
            I build end-to-end data pipelines using Apache Airflow to automate ETL workflows and visualize real-time metrics through Grafana dashboards. I turn raw data into actionable insights through statistical analysis, custom reporting, and backend scripting.
          </p>
        </div>

        {/* Cards — grow to fill space */}
        <div className='flex-1 flex items-center'>
          <div className='flex flex-col lg:flex-row gap-4 justify-center items-stretch w-full'>
            {services_card.map((service, index) => (
              <div
                key={index}
                className='bg-[#F7F7F7] w-full rounded-lg grid grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none lg:grid-cols-none lg:grid-rows-2 place-items-center transition-all transform hover:scale-105 duration-300'>
                <div className='flex md:hidden lg:flex justify-center items-center overflow-hidden h-[20svh] w-full'>
                  <div className='transition-all transform hover:scale-110 duration-300'>
                    <Image src={service.src} width={120} height={120} alt={service.alt} className='w-[120px] h-[120px] object-contain' />
                  </div>
                </div>
                <div className='flex sm:items-start sm:justify-normal flex-col gap-1 text-[10px] md:text-[11px] lg:text-[13px] xl:text-[16px] p-3 sm:px-4 md:px-5 lg:px-10'>
                  <h1 className='font-bold text-[11px] sm:text-[13px] xl:text-[18px]'>
                    {service.title}
                  </h1>
                  {service.details.map((dets, i) => (
                    <div key={i}>
                      <Certified badge={dets} />
                    </div>
                  ))}
                </div>
                <div className='hidden md:flex lg:hidden justify-center items-center overflow-hidden h-[20svh] w-full'>
                  <div className='transition-all transform hover:scale-110 duration-300'>
                    <Image src={service.src} width={120} height={120} alt={service.alt} className='w-[120px] h-[120px] object-contain' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA bar — pinned to bottom */}
        <div className='mt-auto pt-4 border-t border-gray-200'>
          <div className='py-3 flex flex-row justify-between items-center gap-3 w-full'>
            <h1 className='font-bold text-[11px] sm:text-[13px] md:text-[16px]'>
              Lets Talk About Your Project
            </h1>
            <Link
              href={'#footer-page'}
              className='bg-secondary w-fit p-3 text-[11px] rounded-md text-white hover:bg-button_hover transition-all duration-300'>
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
