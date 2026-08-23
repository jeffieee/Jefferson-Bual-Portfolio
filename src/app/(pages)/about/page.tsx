import Button from '@/components/button';
import Certified from '@/components/certified';
import Description from '@/components/description';
import Details from '@/components/details_container';
import DetailsTitle from '@/components/details_title';
import Title from '@/components/title';

export default function AboutPage() {
  return (
    <section>
      <div className='w-full min-h-screen bg-white text-black flex flex-col px-5 pt-16 pb-8 xl:px-20 lg:px-10 overflow-hidden'>
        {/* Header */}
        <div className='flex flex-col mb-6'>
          <Certified badge='About' />
          <Title title='Know More About Me' />
          <Description />
        </div>

        {/* Main content — grows to fill space */}
        <div className='flex-1 flex items-center'>
          <div className='grid md:grid-cols-2 gap-6 w-full'>
            <div className='flex flex-col gap-4'>
              <DetailsTitle title='Education' bg_color='black' />
              <Details
                title='Bachelor of Science in Computer Science'
                year='2020 - 2024'
                description='Pamantasan ng Cabuyao(UC)'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <DetailsTitle title='Specialization' bg_color='black' />
              <div className='relative mt-2'>
                {[
                  { title: 'Data Engineering', description: 'Specialized in building automated ETL pipelines using Apache Airflow, optimizing SQL queries, and resolving pipeline issues such as deadlocks.' },
                  { title: 'Database Management', description: 'Specialized in SQL for querying, joining, and aggregating data from databases.' },
                  { title: 'Statistical Analysis', description: 'Specialized in using tools like Excel and Python libraries for statistical calculations.' },
                  { title: 'Data Visualization', description: 'Specialized in presenting data visually using graphs, charts, and dashboards.' },
                ].map((item, index, arr) => (
                  <div key={index} className='relative flex gap-4 pb-6'>
                    <div className='flex flex-col items-center'>
                      <div className='w-3 h-3 rounded-full bg-secondary mt-1 z-10 shrink-0' />
                      {index < arr.length - 1 && (
                        <div className='w-[2px] bg-secondary flex-1 mt-1' />
                      )}
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[12px] sm:text-[14px]'>{item.title}</h1>
                      <p className='text-[10px] sm:text-[11px] md:text-[12px] leading-5 text-gray-600'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CV bar — pinned to bottom */}
        <div className='mt-auto pt-4 border-t border-gray-100'>
          <div className='rounded-lg h-fit py-3 flex flex-row justify-between items-center gap-3 w-full'>
            <h1 className='font-bold text-[11px] sm:text-[13px] md:text-[16px]'>
              Curriculum Vitae
            </h1>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
