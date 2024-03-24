'use client';

import Link from "next/link";
import { useEffect, useRef } from "react";

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const Header = () => {

    const navRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const links = document.querySelectorAll('nav a');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(e => {
                if(e.isIntersecting) {
                    const id = e.target.getAttribute('id');
                    setActiveLink(id!);
                }
            })
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        function setActiveLink(id : string) {
            links.forEach(l => {
                const href = l.getAttribute('href')?.substring(1);

                if(id === href) {
                    l.classList.add('active');
                } else {
                    l.classList.remove('active');
                }
            })
        }

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        }

    }, []);

    
    return (
        <header className='block lg:fixed'>
            <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
                <Link href='/'>
                    Vitor Bretas Prata
                </Link>
            </h1>

            <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
                Senior Software Engineer
            </h2>

            <nav className='nav hidden lg:block' aria-label='In-page jump links'>
                <ul className='mt-16 w-max' ref={navRef}>
                    <li>
                        <Link href="#about-me" className='group flex items-center py-3'>
                            <span className='nav-point mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>About me</span>
                        </Link>                        
                    </li>
                    <li>
                        <Link href="#experience" className='group flex items-center py-3'>
                            <span className='nav-point mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Experience</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects" className='group flex items-center py-3'>
                            <span className='nav-point mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#tutorials" className='group flex items-center py-3'>
                            <span className='nav-point mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Tutorials</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <ul className='ml-1 mt-8 flex items-center'>
                <li className='mr-5 text-xs shrink-0'>
                    <Link 
                    href="https://github.com/vitorbretasprata"
                    className='block hover:text-slate-200 text-slate-500 transition-all' 
                    target='_blank' 
                    rel='noreferrer noopener' 
                    aria-label='GitHub (opens in a new tab)'
                    title='GitHub'
                    >
                    <span className='sr-only'>GitHub</span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 16 16" fill="currentColor" 
                        className="h-6 w-6" 
                        aria-hidden="true"
                    >
                        <path 
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">

                        </path>
                        </svg>                                      
                    </Link>
                </li>

                <li className='mr-5 text-xs shrink-0'>
                    <Link 
                    href="https://www.linkedin.com/in/vitor-prata-a899b16b/"
                    className='block hover:text-slate-200 text-slate-500 transition-all' 
                    target='_blank' 
                    rel='noreferrer noopener' 
                    aria-label='LinkedIn (opens in a new tab)'
                    title='LinkedIn'
                    >
                    <span className='sr-only'>LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                        </path>
                    </svg>
                    </Link>
                </li>

                <li className='mr-5 text-xs shrink-0'>
                    <Link 
                    href="https://medium.com/@vitorbretasprata"
                    className='block hover:text-slate-200 text-slate-500 transition-all' 
                    target='_blank' 
                    rel='noreferrer noopener' 
                    aria-label='Medium (opens in a new tab)'
                    title='Medium'
                    >
                    <span className='sr-only'>Medium</span>
                    <svg 
                        viewBox="0 0 24 24"
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                        <path d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z"></path> 
                        <path d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z"></path> 
                        <path d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z"></path> 
                        </g>
                    </svg>
                    </Link>
                </li>

                <li className='mr-5 text-xs shrink-0'>
                    <Link 
                    href="https://dev.to/vitorbretasprata"
                    className='block hover:text-slate-200 text-slate-500 transition-all' 
                    target='_blank' 
                    rel='noreferrer noopener' 
                    aria-label='Dev.to (opens in a new tab)'
                    title='Dev.to'
                    >
                    <span className='sr-only'>Dev.to</span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-label="dev.to" 
                        role="img" 
                        viewBox="0 0 512 512"
                        className="h-6 w-6"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%"></rect>
                        <path fill="#94a3b8" d="M140.47 203.94h-17.44v104.47h17.45c10.155-.545 17.358-8.669 17.47-17.41v-69.65c-.696-10.364-7.796-17.272-17.48-17.41zm45.73 87.25c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H233.6v38.42h32.57v29.57H233.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"></path>
                        </g>
                    </svg>

                    </Link>
                </li>
            </ul>
        </header>        
    );
}

export default Header;