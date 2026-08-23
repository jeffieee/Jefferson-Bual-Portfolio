import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { project_details } from '@/app/_lib/db';

export default async function Project({
  params,
}: {
  params: { projectId: number };
}) {
  const data = project_details.find((p) => p.id === Number(params.projectId));

  if (data?.type === 'airflow' || data?.type === 'grafana') {
    redirect(`/in-development?project=${data.type}`);
  }

  return (
    <section>
      <div className='h-fit w-full bg-bg_primary'>
        <div>
          <header className='w-full h-fit shadow-lg'>
            <div className='flex justify-between items-center text-black py-5 px-10'>
              <h1 className='font-bold'>{data.name}</h1>
              <div className='flex gap-2'>
                <Link
                  href={'/'}
                  className='bg-white hover:bg-gray-300 rounded-lg p-2 flex  items-center justify-center'>
                  <GoHomeFill size={25} />
                </Link>
                <Link
                  href={data.github_link}
                  className='bg-white hover:bg-gray-300 rounded-lg p-2 flex  items-center justify-center'>
                  <FaGithub size={25} />
                </Link>
              </div>
            </div>
          </header>

          <div className='h-fit w-full p-5 flex flex-wrap gap-5 items-center justify-center bg-gray-200'>
            {data.type === 'grafana' ? (
              data.link.map((url: string, index: number) => (
                <iframe
                  key={index}
                  src={url}
                  className='w-full h-[80vh] border-0 rounded-lg'
                  allowFullScreen
                />
              ))
            ) : (
              data.link.map((link: string, index: number) => (
                <div key={index}>
                  {data.type === 'mobile' ? (
                    <Image
                      src={'https://lh3.googleusercontent.com/d/' + link}
                      alt='img'
                      width={250}
                      height={0}
                      className='w-[250px] h-auto'
                    />
                  ) : (
                    <Image
                      src={'https://lh3.googleusercontent.com/d/' + link}
                      alt='img'
                      width={500}
                      height={0}
                      className='w-[500px] h-auto'
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
