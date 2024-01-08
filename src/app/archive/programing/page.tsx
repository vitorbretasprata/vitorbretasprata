import Link from 'next/link';

export default function ProgramingArchives() {

    return (
        <main className="container m-auto">

            <div className='border-b-2 border-gray-400'>
                <h2 className='text-2xl mb-2'>
                    Components
                </h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
                <div className="p-4 rounded-md shadow-md">
                    <Link href="/archive/programing/components/dropout">
                        Drag and Drop
                    </Link>
                </div>                
            </div>
        </main>
    );
}
