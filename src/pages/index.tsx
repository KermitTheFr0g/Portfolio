import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import TopNav from '@/components/modules/TopNav'
import Experience from '@/components/modules/Experience'
import Projects from '@/components/modules/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Oli Gray</title>
        <meta name="description" content="Software developer and Cyber criminal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopNav />
        <div className="min-h-screen">
          <div className='flex flex-col lg:w-1/2 md:m-auto'>
            <div className='flex flex-col md:flex-row'>
              <div className="m-auto p-10 md:ml-10 md:w-5/12 lg:w-9/12">
                  <div>👋 Hello, my name is</div>
                  <div className="text-3xl">Oli Gray</div>
                  <div className="text-xl">Software Developer and Cyber Criminal</div>
                  <p className='text-left mt-3'>
                      bio for about me and what kinda stuff i be doing
                      and there is some cool stuff. hacking, reverse engineering,
                      software development, and more!
                  </p>
              </div>  
              <div className="text-center my-auto pb-10 md:mr-10 md:pb-0">
                have cool image here
              </div>
            </div>
            <div className='m-auto flex flex-row pb-10'>
              <a className='p-3' target="_blank" href="mailto:business@oligray.xyz" rel="noopener noreferrer">
                <div>Email</div>
              </a>
              <a className='p-3' target="_blank" href="https://github.com/KermitTheFr0g" rel="noopener noreferrer">
                <div>GitHub</div>
              </a>
              <a className='p-3' target="_blank" href="https://www.linkedin.com/in/oli-gray-b22872214/" rel="noopener noreferrer">
                <div>LinkedIn</div>
              </a>
              <a className='p-3' target="_blank" href="https://www.youtube.com" rel="noopener noreferrer">
                <div>YouTube</div>
              </a>
            </div>
          </div>

          <div className='animate-bounce pt-10'>
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-arrow-down-short m-auto" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
            </svg> 
          </div>
        </div>

        <div className='flex flex-col lg:w-1/2 md:m-auto'>
            <div className="m-auto p-10 md:ml-10 md:w-5/12 lg:w-9/12">
                <div className="text-3xl">About Me</div>
                <p>
                    talk some stuff about me here
                </p>
            </div>
        </div>
        
        <Projects />


      </main>

    </>
  )
}
