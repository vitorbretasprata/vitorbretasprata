'use client';

import Link from "next/link";
import { DragEvent, useEffect, useRef, useState } from "react";

export default function Dropout() {

    const previewListRef = useRef<HTMLDivElement>(null);
    const uploadFilesRef = useRef<HTMLInputElement>(null);

    const [imagePreviews, setimagePreviews] = useState<string[]>([]);

    useEffect(() => {
        document.addEventListener('dragover', e => e.preventDefault());
        document.addEventListener('drop', e => e.preventDefault());

        return () => {
            document.removeEventListener('dragover', e => e.preventDefault());
            document.removeEventListener('drop', e => e.preventDefault());
        }

    }, []);

    const handleDropImages = (e : DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const { files } = e.dataTransfer!;

        uploadFilesRef.current!.files = files;

        const changeEvent = new Event('change', { bubbles: true });
        uploadFilesRef.current!.dispatchEvent(changeEvent);

    }

    const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        
        if(event.target.files) {
            const files : FileList = event.target.files;
            handleFileUpload(files);
        }

    }

    const showFilesPreview = (file : File) => {

        const reader = new FileReader();

        reader.onloadend = () => {

            const image = new Image();

            image.onload = () => {

                const maxWidth = 300;
                const maxHeight = 300;

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d')!;

                let width = image.width;
                let height = image.height;

                if (width > maxWidth || height > maxHeight) {

                    const aspectRatio = width / height;

                    if (aspectRatio > 1) {
                        width = maxWidth;
                        height = width / aspectRatio;
                    } else {
                        height = maxHeight;
                        width = height * aspectRatio;
                    }

                }

                canvas.width = width;
                canvas.height = height;

                context.drawImage(image, 0, 0, width, height);

                const resizedDataUrl = canvas.toDataURL(file.type);

                if(!imagePreviews?.includes(resizedDataUrl))
                    setimagePreviews((prevImages) => [...prevImages, resizedDataUrl]);

            }

            image.src = reader.result as string;

        };

        reader.readAsDataURL(file);

    }

    const isAllowedType = (file : File) => ['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type);

    const handleFileUpload = (files : any) => {

        const allowedFiles = [...files].filter(isAllowedType);
        allowedFiles.forEach(showFilesPreview);

    }  
    
    return (
        <main className='m-auto container p-5'>
            <h1 className='text-3xl my-12'>
                Drag upload file
            </h1>

            <div className="my-12">
                <h3 className='text-2xl mb-3'>Summary</h3>
                <hr />

                <p className='mt-6'>
                    Most websites have some kind of file upload, either image, docs, videos or other type of file. 
                    Here we will learn how to make a nice file upload element. 
                    We will build the two most common options for upload, the dragand drop and the upload, 
                    it won't be anything super fancy, but it will attend most use cases.
                    We will show the final product then we will teach how to build.
                </p>
            </div>

            <div className="my-12">
                <h3 className='text-xl mb-3'>Final Product</h3>
                <hr />

                <div className="box-border max-w-[90%] rounded-lg border-b-2  my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
                    <input type="file" className="files my-6" accept="image/*" ref={uploadFilesRef} onChange={handleFileChange} multiple />
                    <div 
                        className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
                        onDrop={handleDropImages}
                    >
                        {imagePreviews.length > 0 ? <p>{imagePreviews.length} Images</p> : '📁 Drag here!'}
                    </div>

                    <div className="preview-list mt-6 flex justify-start w-full" ref={previewListRef}>
                        {imagePreviews.length > 0 ? (
                            <div className="flex gap-4 flex-wrap">
                                {imagePreviews.map((p, i) => (
                                    <div key={`prev-${i}`}>
                                        <img 
                                            src={p}
                                            alt={`preview-${i}`}
                                            className="max-w-full max-h-[200px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>  

            <div className="my-12">
                <h3 className='text-xl mb-3'>1 - Create the HTML</h3>
                <hr />

                <p className="my-8">
                    So the first thing we should do is the skeleton of our upload element.
                </p>
            </div>      

            <pre>
                <code className="code-chunk">
{`
<div>
    <h2>Upload File ✔</h2>
    <div>
        📁 Drag here!
    </div>
</div>
`}                    
                </code>
            </pre>

            <div className="my-12">
                <h3 className='text-xl mb-3'>2 - Add some CSS</h3>
                <hr />

                <p className="my-8">
                    Next thing we will do is add some style. For this tutorial I will use  
                    <strong><Link href="https://tailwindcss.com/" target="_blank" className="text-blue-400"> tailwind CSS</Link></strong>.   
                </p>
            </div> 

            <pre>
                <code className="code-chunk">
{`
<div className="box-border max-w-[90%] rounded-lg border-b-2 my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
    <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
    <div 
        className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
        onDrop={handleDropImages}

    >

        📁 Drag here!
    </div>
</div>
`}
                </code>
            </pre>

            <p className="my-8">
                For now it will look like this.
            </p>   

            <div className="box-border max-w-[90%] rounded-lg border-b-2 my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
                <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
                <div 
                    className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
                >

                    📁 Drag here!
                </div>
            </div>

            <div className="my-12">
                <h3 className='text-xl mb-3'>3 - Add the functionality</h3>
                <hr />

                <p className="my-8">
                    So far so good, now we can add some javascript code to make it work. 
                    First let's create a function and add it on <code>onDrop</code> handler of our <code>div</code> element.  
                </p>
            </div> 

            <pre>
                <code className="code-chunk">
{`
const handleDropImages = (e : DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer!;

    handleFileUpload(files);
}


<div className="box-border max-w-[90%] rounded-lg border-b-2 my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
    <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
    <div 
        className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
        onDrop={handleDropImages}
    >

        📁 Drag here!
    </div>
</div>
`}
                </code>
            </pre>  

            <p className="my-8">
                The <code>handleDropImages</code> is quite simple, first add the 
                <code>e.preventDefault</code> 
                (prevent the normal behavior of the element to happen) and <code>e.stopPropagation</code> 
                (stop the propagation of the current drag event) methods. After that we destruct the <code>e.dataTransfer</code> 
                to get the files dragged to the div element. After getting the files, we pass them to the <code>handleFileUpload</code> 
                function, which we will create right now.
            </p>

            <pre>
                <code className="code-chunk">
{`
const handleDropImages = (e : DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer!;

    handleFileUpload(files);
}

const isAllowedType = (file : File) => ['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type);

const handleFileUpload = (files : File[]) => {

    const allowedFiles = [...files].filter(isAllowedType);
    allowedFiles.forEach(showFilesPreview);
}  

<div className="box-border max-w-[90%] rounded-lg border-b-2 my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
    <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
    <div 
        className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
        onDrop={handleDropImages}
    >

        📁 Drag here!
    </div>
</div>
`}
                </code>
            </pre> 

            <p className="my-8">
                Here we have some explanation to do. The <code>handleFileUpload</code> has two steps. 
                The first one is filtering all files, allowing only images that are png, jpeb and svg. 
                The second one is calls the function <code>showFilesPreview</code> for each image of the array.
                Let's build this function now.
            </p>

            <pre>
                <code className="code-chunk">
{`

const [imagePreviews, setimagePreviews] = useState<string[]>([]);

const showFilesPreview = (file : File) => {

    const reader = new FileReader();

    reader.onloadend = () => {

        const image = new Image();

        image.onload = () => {

            const maxWidth = 300;
            const maxHeight = 300;

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d')!;

            let width = image.width;
            let height = image.height;

            if (width > maxWidth || height > maxHeight) {

                const aspectRatio = width / height;

                if (aspectRatio > 1) {
                    width = maxWidth;
                    height = width / aspectRatio;
                } else {
                    height = maxHeight;
                    width = height * aspectRatio;
                }

            }

            canvas.width = width;
            canvas.height = height;

            context.drawImage(image, 0, 0, width, height);

            const resizedDataUrl = canvas.toDataURL(file.type);

            if(!imagePreviews?.includes(resizedDataUrl))
                setimagePreviews((prevImages) => [...prevImages, resizedDataUrl]);

        }

        image.src = reader.result as string;

    };

    reader.readAsDataURL(file);

}

const handleDropImages = (e : DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer!;

    handleFileUpload(files);
}

const isAllowedType = (file : File) => ['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type);

const handleFileUpload = (files : File[]) => {

    const allowedFiles = [...files].filter(isAllowedType);
    allowedFiles.forEach(showFilesPreview);
}  

<div className="box-border max-w-[90%] rounded-lg border-b-2 my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
    <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
    <div 
        className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
        onDrop={handleDropImages}
    >

        📁 Drag here!
    </div>
</div>
`}
                </code>
            </pre> 

            <p className="my-8">
                Ok, this function is big. What does it do? It is quite simple actually. 
                The function creates a instance of <code>FileReader</code> to read the data (the image).
                Once it reads the <code>reader.onloadend</code> is called, then an instance of <code>Image</code> is created to load the image, why?
                To cheack the image's resolution, if it is to big we compress it maintaining the aspect ratio.
                Once this is done, we add the image into the <code>imagePreviews</code> array, of course not before checking if the image is already in the array.
            </p>

            <p className="my-8">
                Let's add a way to list all the <code>imagePreviews</code>. Simply add on our HTML a way to check if the array had values and if yes, 
                then loop the images, dispaying them. 
            </p>

            <pre>
                <code className="code-chunk">
{`
<div className="box-border max-w-[90%] rounded-lg border-b-2  my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
    <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
    <div 
        className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
        onDrop={handleDropImages}
    >
        {imagePreviews.length > 0 ? <p>{imagePreviews.length} Images</p> : '📁 Drag here!'}
    </div>

    <div className="preview-list mt-6 flex justify-start w-full" ref={previewListRef}>
        {imagePreviews.length > 0 ? (
            <div className="flex gap-4 flex-wrap">
                {imagePreviews.map((p, i) => (
                    <div key={i}>
                        <img 
                            src={p}
                            alt={i}
                            className="max-w-full max-h-[200px]"
                        />
                    </div>
                ))}
            </div>
        ) : null}
    </div>
</div>
`}
                </code>
            </pre> 

            <p className="my-8">For now our drag upload element looks like this.</p>

            <div className="box-border max-w-[90%] rounded-lg border-b-2  my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
                    <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
                    <div 
                        className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
                        onDrop={handleDropImages}
                    >
                        {imagePreviews.length > 0 ? <p>{imagePreviews.length} Images</p> : '📁 Drag here!'}
                    </div>

                    <div className="preview-list mt-6 flex justify-start w-full" ref={previewListRef}>
                        {imagePreviews.length > 0 ? (
                            <div className="flex gap-4 flex-wrap">
                                {imagePreviews.map((p, i) => (
                                    <div key={`prev-${i}`}>
                                        <img 
                                            src={p}
                                            alt={`preview-${i}`}
                                            className="max-w-full max-h-[200px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>

                <p className="my-8">
                    We are almost done. Now we need to add an input so the user can also add the images trough the input.                   
                </p>

                <pre>
                    <code className="code-chunk">
{`
<div className="my-12">
    <h3 className='text-xl mb-3'>Final Product</h3>
    <hr />

    <div className="box-border max-w-[90%] rounded-lg border-b-2  my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
        <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
        <input type="file" className="files my-6" accept="image/*" onChange={handleFileChange} multiple />
        <div 
            className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
            onDrop={handleDropImages}
        >
            {imagePreviews.length > 0 ? <p>{imagePreviews.length} Images</p> : '📁 Drag here!'}
        </div>

        <div className="preview-list mt-6 flex justify-start w-full" ref={previewListRef}>
            {imagePreviews.length > 0 ? (
                <div className="flex gap-4 flex-wrap">
                    {imagePreviews.map((p, i) => (
                        <div key={i}>
                            <img 
                                src={p}
                                alt={i}
                                className="max-w-full max-h-[200px]"
                            />
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    </div>
</div>
`}                       
                    </code>
                </pre>

                <p className="my-8">
                    The input is simple, the type is <strong>files</strong>, there is a flag to add multiple files and only accept images.
                    The last thing left to explain is the function called when the <code>onChange</code> is triggered.
                    The <code>handleFileChange</code> only takes the uploaded files and pass to the <code>handleFileUpload</code> function.
                </p>

                <pre>
                    <code className="code-chunk">
{`
const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {

    if(event.target.files) {
        const files : FileList = event.target.files;
        handleFileUpload(files);
    }

}
`}
                    </code>
                </pre>


                <p className="my-8">
                    Done, we are finished. The entire code will look like this.
                </p>

                <pre>
                    <code className="code-chunk">
{`
const previewListRef = useRef<HTMLDivElement>(null);
const uploadFilesRef = useRef<HTMLInputElement>(null);

const [imagePreviews, setimagePreviews] = useState<string[]>([]);

useEffect(() => {
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', e => e.preventDefault());

    return () => {
        document.removeEventListener('dragover', e => e.preventDefault());
        document.removeEventListener('drop', e => e.preventDefault());
    }

}, []);

const handleDropImages = (e : DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer!;

    uploadFilesRef.current!.files = files;

    const changeEvent = new Event('change', { bubbles: true });
    uploadFilesRef.current!.dispatchEvent(changeEvent);

}

const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    
    if(event.target.files) {
        const files : FileList = event.target.files;
        handleFileUpload(files);
    }

}

const showFilesPreview = (file : File) => {

    const reader = new FileReader();

    reader.onloadend = () => {

        const image = new Image();

        image.onload = () => {

            const maxWidth = 300;
            const maxHeight = 300;

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d')!;

            let width = image.width;
            let height = image.height;

            if (width > maxWidth || height > maxHeight) {

                const aspectRatio = width / height;

                if (aspectRatio > 1) {
                    width = maxWidth;
                    height = width / aspectRatio;
                } else {
                    height = maxHeight;
                    width = height * aspectRatio;
                }

            }

            canvas.width = width;
            canvas.height = height;

            context.drawImage(image, 0, 0, width, height);

            const resizedDataUrl = canvas.toDataURL(file.type);

            if(!imagePreviews?.includes(resizedDataUrl))
                setimagePreviews((prevImages) => [...prevImages, resizedDataUrl]);

        }

        image.src = reader.result as string;

    };

    reader.readAsDataURL(file);

}

const isAllowedType = (file : File) => ['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type);

const handleFileUpload = (files : any) => {

    const allowedFiles = [...files].filter(isAllowedType);
    allowedFiles.forEach(showFilesPreview);

}  

<div className="my-12">
    <h3 className='text-xl mb-3'>Final Product</h3>
    <hr />

    <div className="box-border max-w-[90%] rounded-lg border-b-2  my-6 mx-auto p-6 shadow-md flex flex-col justify-center items-center">
        <h2 className="text-center font-bold text-xl">Upload File ✔</h2>
        <input type="file" className="files my-6" accept="image/*" ref={uploadFilesRef} onChange={handleFileChange} multiple />
        <div 
            className="rounded-md mt-6 p-6 border-dashed border-2 border-slate-500 bg-slate-200 text-center w-full" 
            onDrop={handleDropImages}
        >
            {imagePreviews.length > 0 ? <p>{imagePreviews.length} Images</p> : '📁 Drag here!'}
        </div>

        <div className="preview-list mt-6 flex justify-start w-full" ref={previewListRef}>
            {imagePreviews.length > 0 ? (
                <div className="flex gap-4 flex-wrap">
                    {imagePreviews.map((p, i) => (
                        <div key={i}>
                            <img 
                                src={p}
                                alt={i}
                                className="max-w-full max-h-[200px]"
                            />
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    </div>
</div>
`}
                    </code>
                </pre>

                
                <p className="my-8">
                    Some clarification, we need to add an <code>addEventListener</code> for <code>dragover</code> and <code>drop</code> 
                    to prevent the default behavior of the page in case the image dragged and dropped outside of the component by accident doesn't on your screen.
                </p>

                <div className="my-12">
                <h3 className='text-xl mb-3'>Final Thoughts</h3>
                <hr />

                <p className="my-8">
                    For the first try this seems pretty good, however it is not complete. 
                    We need to send the images to a server so it can be saved. 
                    Not only that, but we can add more complexity to it like removing 
                    unwanted images and such, but we can continue on the next part of the tutorial. 
                    For now we did a fina job, until the next tutorial.
                </p>
            </div>
                
        </main>
    );
}
