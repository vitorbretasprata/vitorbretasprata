'use client';

import Link from "next/link";

const Banner = () => {
    
    return (
        <div>
            <div className="m-auto flex justify-between items-center max-w-[1140px]">
                <div className="w-[50%]">
                    <div>
                        <h2 className="uppercase tracking-widest bg-opacity rounded-md px-3 w-fit">Vitor Prata</h2>
                    </div>

                    <div className="mt-4">
                        <h1 className="uppercase text-6xl font-semibold">Hello! I{'\u2019'}m Vitor</h1>
                        <h1 className="uppercase text-6xl text-blue-500 mt-2">I{'\u2019'}m a developer</h1>
                    </div>

                    <p className="mt-8 text-lg">
                        Yet bed any for travelling assistance indulgence unpleasing. 
                        Not thoughts all exercise blessing. Indulgence way everything 
                        joy alteration boisterous the attachment.
                    </p>

                    <div className="flex justify-start mt-6 gap-6 items-center">
                        <Link href="/contact-me" className="transition-all hover:bg-blue-800 bg-blue-500 rounded-xl text-white py-4 px-8">
                            Contact Me
                        </Link>

                        <Link href={window.location.href + '/teste.pdf'} target="_blank" className="line-below">
                            Download CV
                        </Link>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
        
    );
}

export default Banner;