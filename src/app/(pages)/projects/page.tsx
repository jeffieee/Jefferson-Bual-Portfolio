import Certified from '@/components/certified';
import ProjectDetails from '@/components/project_details';
import Title from '@/components/title';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <section>
      <div className='w-full min-h-screen bg-bg_primary flex flex-col px-5 pt-16 pb-8 xl:px-20 lg:px-10'>
        <div className='w-full flex flex-col items-start mb-6 animate-slideInUp1'>
          <Certified badge='Projects' />
          <Title title="Things I've Built" />
        </div>
        <div className='flex-1 flex items-stretch animate-slideInUp2'>
          <ProjectDetails />
        </div>
      </div>
    </section>
  );
}
