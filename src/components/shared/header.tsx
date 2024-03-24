'use client';

import Link from "next/link";

import { Dropdown } from "@/components/navigation";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const items = [
    {
      label: <Link href="/archive/programing">Programing</Link>,
      key: '0',
    }
];

const Header = () => {

    const { theme, setTheme } = useTheme();
    
    return (
        <>
            <nav className="p-4">
                <div className="container mx-auto flex justify-between gap-16 items-center">

                    <div className="flex justify-start gap-16 items-center">
                        <Link href="/" className="text-white text-2xl font-semibold">Portf<span className="text-blue-500">ólio</span></Link>

                        <div className="hidden md:flex space-x-12 text-sm font-semibold">
                            <Link href="/" className="nav-link">Home</Link>
                            <Dropdown items={items} trigger={['click']}>
                                <a 
                                    className="nav-link cursor-pointer"
                                >
                                    Archive
                                </a>
                            </Dropdown>
                            <Link href="#" className="nav-link">About</Link>
                            <Link href="#" className="nav-link">Contact</Link>
                        </div>
                    </div>                

                    <button className={`rounded-full transition-all shadow-md p-4`} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        <FaRegMoon />
                    </button>

                    <div className="md:hidden">
                        <button id="mobile-menu-toggle" className="text-white">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                </div>
            </nav>

            <div id="mobile-menu" className="md:hidden hidden p-4">
                <Link href="#" className="nav-link">Home</Link>
                <Link href="#" className="nav-link">Archive</Link>
                <Link href="#" className="nav-link">About</Link>
                <Link href="#" className="nav-link">Contact</Link>
            </div>
        </>
    );
}

export default Header;