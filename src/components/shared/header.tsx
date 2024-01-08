import Link from "next/link";

import { Dropdown } from "@/components/navigation";

const items = [
    {
      label: <Link href="/archive/programing">Programing</Link>,
      key: '0',
    }
];

const Header = () => {
    
    return (
        <>
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">

                <Link href="#" className="text-white text-lg font-semibold">Your Logo</Link>

                <div className="hidden md:flex space-x-4">
                    <Link href="#" className="text-white">Home</Link>
                    <Dropdown items={items} trigger={['click']}>
                        <a 
                            className="text-white cursor-pointer"
                        >
                            Archive
                        </a>
                    </Dropdown>
                    <Link href="#" className="text-white">About</Link>
                    <Link href="#" className="text-white">Contact</Link>
                </div>

                <div className="md:hidden">
                    <button id="mobile-menu-toggle" className="text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                </div>
            </nav>

            <div id="mobile-menu" className="md:hidden hidden bg-blue-500 p-4">
                <Link href="#" className="text-white">Home</Link>
                <Link href="#" className="text-white">Archive</Link>
                <Link href="#" className="text-white">About</Link>
                <Link href="#" className="text-white">Contact</Link>
            </div>
        </>
    );
}

export default Header;