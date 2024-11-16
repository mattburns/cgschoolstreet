import Image from 'next/image';
import { attributes, react as HomeCTAContent } from '../content/home-cta.md';

export default function HomeCTA () {
  const { title } = attributes;

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl sm:px-6 sm:py-8 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
          <svg
            viewBox='0 0 1024 1024'
            aria-hidden='true'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
          >
            <circle r={512} cx={512} cy={512} fill='url(#759c1415-0410-454c-8f7c-9a820de03641)' fillOpacity='0.7' />
            <defs>
              <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
          <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left'>
            <h2 className='text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
              {title}
            </h2>
            <div className='mt-6 text-pretty text-lg/8 text-gray-300'>
              <HomeCTAContent />
            </div>
            <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
              <a
                href='https://chat.whatsapp.com/BqaqL5YOEEP3zsGpeJflAC'
                className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                {title}
              </a>
            </div>
          </div>
          <div className='relative mt-16 h-80 lg:mt-8'>
            <Image
              src='/cgschoolstreet/images/pexels-thirdman-8926648.jpg'
              alt='Happy kids playing at school. credit: pexels 8926648'
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
