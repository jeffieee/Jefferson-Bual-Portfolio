import Certified from '@/components/certified';
import Title from '@/components/title';
import Image from 'next/image';

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
        <div className='w-full mb-8 animate-slideInUp1'>
          <Certified badge='What I Do' />
          <Title title='Data Engineering & Analysis' />
          <p className='sm:text-[11px] md:text-[12px] lg:text-[13px] text-[10px] text-gray-600 leading-6'>
            I build and maintain data pipelines, manage databases, and turn raw data into reports people can actually use.
          </p>
        </div>

        {/* Cards — grow to fill space */}
        <div className='flex-1 flex items-center'>
          <div className='flex flex-col lg:flex-row gap-4 justify-center items-stretch w-full'>
            {services_card.map((service, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                className='animate-slideInUp1 [animation-fill-mode:both] bg-[#F7F7F7] w-full rounded-lg grid grid-rows-2 grid-cols-none md:grid-cols-2 md:grid-rows-none lg:grid-cols-none lg:grid-rows-2 place-items-center transition-all transform hover:scale-105 duration-300'>
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


      </div>
    </section>
  );
}
