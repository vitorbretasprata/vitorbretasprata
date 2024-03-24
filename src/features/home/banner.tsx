'use client';

import Link from "next/link";
import Image from "next/image";

const Banner = () => {
    
    return (
        <div>
            <div className="m-auto flex justify-between items-center max-w-[1140px] my-40">
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

                        <Link href="../../public/teste.pdf" target="_blank" className="line-below">
                            Download CV
                        </Link>
                    </div>
                </div>

                <div>
                    <Image 
                        src="/20171216_183348.png"
                        alt="Bolachinha"
                        height={400}
                        width={600}
                    />
                </div>
            </div>
        </div>
        
    );
}

export default Banner;