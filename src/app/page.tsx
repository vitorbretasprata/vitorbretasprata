import Link from 'next/link';
import Image from 'next/image';

import { Header } from '@/features/home';

export default function Page() {
  return (
    <div>
      <div className='relative max-w-7xl m-auto px-24 flex lg:flex-row flex-col my-24 gap-24'>
          <div className='lg:w-1/2'>
            <Header />
          </div>          

          <main className='lg:w-1/2' id='content'>
            <section className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' id='about-me' aria-label="About me">
              <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                  About Me
                </h2>
              </div>

              <div>
                <p className='mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed mi rhoncus, pretium sem vitae, 
                  blandit ante. Suspendisse turpis orci, malesuada sed finibus sed, pellentesque eu elit. Aliquam 
                  volutpat elementum mi, et mollis lectus tincidunt vel. Nulla ornare, nisi eu hendrerit tempor, 
                  velit nunc sodales ante, nec semper erat dui ac quam. Integer risus magna, egestas eget eros eu, 
                  elementum elementum quam. Curabitur condimentum diam ac nunc tempor, vitae ultrices ipsum maximus. 
                  Etiam fringilla cursus arcu, eu rhoncus ipsum ultricies dapibus. In venenatis ultrices metus non molestie. 
                  Aenean et odio justo.
                </p>
                <p className='mb-4'>
                  Vestibulum efficitur sodales nibh, id congue elit rhoncus a. Aliquam erat volutpat. Integer non felis non 
                  lectus mattis condimentum ac ut enim. Nunc mollis blandit eros eget accumsan. Morbi ac ante vel magna 
                  eleifend dignissim a in lectus. Vivamus mattis, purus eget finibus dapibus, justo sapien posuere metus, 
                  ut ullamcorper augue neque vitae magna. Sed at pretium nisi. Sed elit mi, vestibulum ut luctus et, 
                  vulputate vitae est.
                </p>

                <p className='mb-4'>
                  Curabitur ex leo, efficitur eget interdum non, lobortis eu nunc. Nunc maximus efficitur enim, a feugiat leo.
                  Nulla aliquet, ipsum nec bibendum dictum, leo velit porta elit, sit amet cursus elit felis ac 
                  tortor. Quisque in mi sed elit imperdiet vehicula sed nec justo. Quisque ac posuere 
                  ipsum, nec hendrerit velit. Nulla bibendum consequat libero, ac porta tortor tincidunt eu. 
                  Mauris id enim felis. Praesent commodo sodales elit. Donec dictum nec mauris venenatis lobortis. 
                  Aliquam eu nunc vitae libero convallis placerat.
                </p>

                <a href="/teste.pdf" className='resume font-bold text-lg uppercase tracking-wide mt-12 flex gap-2' target='_blank'>
                  <span>My Resume</span>  
                  <Image 
                    src="/anchor.svg"
                    height={20}
                    width={20}
                    alt='My Resume'
                    className='fill-slate-400'
                  />
                </a>
              </div>
            </section>

            <section 
              id='experience' 
              className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' 
              aria-label="Work experience"
            >
              <ol className='group/list'>
                <li className='mb-12'>
                  <div className='lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
                        2021 - Present
                      </header>
                      <div>
                        <h3 className='mb-4 text-lg font-semibold'>Senior Software Engineer - <Link href="https://allmatech.com.br/" target='_blank'>Allmatech</Link></h3>
                        <div>
                          <p className='text-slate-500'>
                            Curabitur ex leo, efficitur eget interdum non, lobortis eu nunc. Nunc maximus efficitur enim, a feugiat leo.
                            Nulla aliquet, ipsum nec bibendum dictum, leo velit porta elit, sit amet cursus elit felis ac 
                            tortor. Quisque in mi sed elit imperdiet vehicula sed nec justo. 
                          </p>

                          <ul className='mt-2 flex flex-wrap'>

                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Javascript
                              </div>
                            </li>
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Typescript
                              </div>
                            </li>
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                React
                              </div>
                            </li>
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Next
                              </div>
                            </li>
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Python
                              </div>
                            </li>
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Azure
                              </div>
                            </li>

                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                System Design
                              </div>
                            </li>

                          </ul>

                        </div>
                      </div>
                      
                    </div>
                  </div>
                </li>

                <li className='mb-12'>
                  <div className='lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
                        2020 - 2021
                      </header>
                      <div>
                        <h3 className='mb-4 text-lg font-semibold'>Mobile Developer - <Link href="http://www.smedgv.com/SMED.php" target='_blank'>SMED</Link></h3>
                        <div>
                          <p className='text-slate-500'>
                            Curabitur ex leo, efficitur eget interdum non, lobortis eu nunc. Nunc maximus efficitur enim, a feugiat leo.
                            Nulla aliquet, ipsum nec bibendum dictum, leo velit porta elit, sit amet cursus elit felis ac 
                            tortor. Quisque in mi sed elit imperdiet vehicula sed nec justo. 
                          </p>

                          <ul className='mt-2 flex flex-wrap'>

                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Javascript
                              </div>
                            </li>                            
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                React Native
                              </div>
                            </li>                            
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                PHP
                              </div>
                            </li>                            

                          </ul>

                        </div>

                      </div>
                      
                    </div>
                  </div>
                </li>

                <li className='mb-12'>
                  <div className='lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
                        2019 - 2020
                      </header>
                      <div>
                        <h3 className='mb-4 text-lg font-semibold'>Junior Software Engineer - <Link href="https://www.qualidade.co/" target='_blank'>Qualidade.CO</Link></h3>
                        <div>
                          <p className='text-slate-500'>
                            Curabitur ex leo, efficitur eget interdum non, lobortis eu nunc. Nunc maximus efficitur enim, a feugiat leo.
                            Nulla aliquet, ipsum nec bibendum dictum, leo velit porta elit, sit amet cursus elit felis ac 
                            tortor. Quisque in mi sed elit imperdiet vehicula sed nec justo. 
                          </p>

                          <ul className='mt-2 flex flex-wrap'>

                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Javascript
                              </div>
                            </li>                            
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                React
                              </div>
                            </li>                            
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Python
                              </div>
                            </li>                            

                          </ul>

                        </div>

                      </div>
                      
                    </div>
                  </div>
                </li>

                <li className='mb-12'>
                  <div className='lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
                        2018 - 2019
                      </header>
                      <div>
                        <h3 className='mb-4 text-lg font-semibold'>Junior Software Engineer - <Link href="https://www.qualidade.co/" target='_blank'>Allmatech</Link></h3>
                        <div>
                          <p className='text-slate-500'>
                            Curabitur ex leo, efficitur eget interdum non, lobortis eu nunc. Nunc maximus efficitur enim, a feugiat leo.
                            Nulla aliquet, ipsum nec bibendum dictum, leo velit porta elit, sit amet cursus elit felis ac 
                            tortor. Quisque in mi sed elit imperdiet vehicula sed nec justo. 
                          </p>

                          <ul className='mt-2 flex flex-wrap'>

                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Javascript
                              </div>
                            </li>                            
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                .NET
                              </div>
                            </li>                            
                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                PHP
                              </div>
                            </li> 

                            <li className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300'>
                                Azure
                              </div>
                            </li>                           

                          </ul>

                        </div>

                      </div>
                      
                    </div>
                  </div>
                </li>
              </ol>
            </section>

            <section id='projects'>

            </section>
          </main>
      </div>


    </div>
  );
}