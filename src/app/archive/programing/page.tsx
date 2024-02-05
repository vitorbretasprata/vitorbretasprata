import Link from 'next/link';

export default function ProgramingArchives() {

    return (
        <main className="container m-auto">

            <div className='border-b-2 mt-12 border-gray-400'>
                <h2 className='text-2xl mb-2'>
                    Components
                </h2>
            </div>
            
            <div className="my-12 flex flex-wrap gap-4">
                <Link 
                    href="/archive/programing/components/dropout" 
                    className='p-4 shadow-lg text-sm rounded-md'
                    target='_blank'
                >
                    Drag and Drop
                </Link>  
             
            </div>

            <div className='border-b-2 mt-12 border-gray-400'>
                <h2 className='text-2xl mb-2'>
                    Features
                </h2>
            </div>
            
            <div className="my-12 flex flex-wrap gap-4">
                <Link 
                    href="/archive/programing/features/notification" 
                    className='p-4 shadow-lg text-sm rounded-md'
                    target='_blank'
                >
                    Web Notification
                </Link>              
            </div>

        </main>
    );
}
