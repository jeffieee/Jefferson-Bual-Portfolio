export default function Details(props: any) {
  return (
    <div className='flex flex-col gap-3 sm:gap-1 text-[10px] sm:text-[11px] md:text-[14px] lg:text-[16px]'>
      <h1>{props.title}</h1>
      {!props.isHide && <h1>{props.year}</h1>}
      <li className='text-secondary ml-4'>{props.description}</li>
    </div>
  );
}
