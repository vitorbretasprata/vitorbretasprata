'use client';
import { useEffect } from "react";

export default function WebNotification() {

    const init = async () => {
        const permission = await Notification.requestPermission();

        switch(permission) {
            case 'granted':
                console.log('Permission was granted!');
                break;

            case 'denied':
                console.log('Permission was denied!');
                break;
            
            default:
                console.log('Awaiting answer....');
                break;
        }

        setTimeout(showNotification, 3000);

    }

    const showNotification = () => {
        const notification = notify('📱 Notification', { 
            body: 'Test Notification', 
            icon: 'https://i.imgur.com/2Qs6HQp.png' 
        });

        if(notification) {
            notification.addEventListener('click', (ev : any) => {

                window.parent.focus();                
                if(ev) ev.target.close();

            });
        }
    }

    const notify = (title : string, body : object) => {
        if(Notification.permission === 'granted') {
            return new Notification(title, body);
        }

        return null;
    }

    useEffect(() => {
        if('Notification' in window) init();        
    }, []);    
    
    return (
        <main className='m-auto container p-5'>
            <h1 className='text-3xl my-12'>
                Web Notification
            </h1>

            <div className="my-12">
                <h3 className='text-2xl mb-3'>Summary</h3>
                <hr />

                <p className='mt-6'>
                    Some websites or softwares have this feature when there is a task running on the background, 
                    one way to notify the user when the task is completed is by using the Notfication API.
                    Today we will build a simple notification message.
                </p>
            </div>

            <div className="my-12">
                <h3 className='text-xl mb-3'>1 - Request permission</h3>
                <hr />

                <p className="my-8">
                    The notification API is one of those features in Javascript where it asks permission for the user first.
                    The first step in building the notification is request permissions. 
                    Let's build a function for this, once the page loads, it will be askes for permission for the user.
                </p>
            </div>      

            <pre>
                <code className="code-chunk">
{`
const init = async () => {
    const permission = await Notification.requestPermission();

    switch(permission) {
        case 'granted':
            console.log('Permission was granted!');
            break;

        case 'denied':
            console.log('Permission was denied!');
            break;
        
        default:
            console.log('Awaiting answer....');
            break;
    }

}

useEffect(() => {
    if('Notification' in window) init();        
}, []); 
`}                    
                </code>
            </pre> 
                

            <p className="my-8">
                Quite simple, right? First we use the hook <code>useEffect</code> to check if the 'Notification' is in the <code>Window</code> object. 
                If it is true, then call our function <code>init</code>. 

                <br />
                <br />

                Inside the <code>init</code> function we call <code>Notification.requestPermission</code>, 
                as the name say, it ask permission to the user to enable notification. We also create a <code>switch</code> just to check the permission, 
                it is not important for this tutorial.
            </p>

            <div className="my-12">
                <h3 className='text-xl mb-3'>2 - Create notification</h3>
                <hr />

                <p className="my-8">
                    Assuming that we granted permission to recieve notification, 
                    let's make our notification function. 
                    For the sake of organization, let's create two functions: <code>showNotification</code> and <code>notify</code>.                    
                </p>
            </div>      

            <pre>
                <code className="code-chunk">
{`
const showNotification = () => {
    const notification = notify('🔊 Now Playing', { 
        body: 'Mr. Brightside - The Killers', 
        icon: 'https://i.imgur.com/2Qs6HQp.png' 
    });

}

const notify = (title : string, body : object) => {
    if(Notification.permission === 'granted') {
        return new Notification(title, body);
    }

    return null;
}
`}                    
                </code>
            </pre> 
                

            <p className="my-8">
                The <code>notify</code> function checks if the permission is granted, if it is then it will create a new Notification, if permission isn't granted then return null.
                The <code>showNotification</code> calls the <code>notify</code> function and pass the parameters.
            </p>

            <div className="my-12">
                <h3 className='text-xl mb-3'>3 - Focus window and close notification</h3>
                <hr />

                <p className="my-8">
                    Once the notification appears, we can click it not only to close it but also to focus on the window where the notification comes from.

                    <br />
                    <br />

                    To do this let's add a block of code inside the <code>showNotification</code>.
                    
                </p>
            </div>      

            <pre>
                <code className="code-chunk">
{`
const showNotification = () => {
    const notification = notify('🔊 Now Playing', { 
        body: 'Mr. Brightside - The Killers', 
        icon: 'https://i.imgur.com/2Qs6HQp.png' 
    });

    if(notification) {
        notification.addEventListener('click', (ev : any) => {
            window.parent.focus();
            
            if(ev) ev.target.close();
        });
    }
}
`}                    
                </code>
            </pre>                 

            <p className="my-8">
                This block of code basically add an even listener on click, 
                inside the event listener it calls <code>window.parent.focus()</code> 
                which is used to focus on the window of the notification and <code>ev.target.close()</code> to close the notification.

                <br />
                <br />                

            </p>

            <h3 className='text-xl mb-3'>Final Thoughts</h3>
                <hr />

                <p className="my-8">
                    There are more thing we can do, one thing we recommend is to debug the <code>Notification</code> API to see which functions and attributes it has, 
                    explore it and see what more you can do with it. We manage make a simple notification function, 
                    but there still a lot more to see it on this API, but I will end up here, thanks and see you in the next tutorial.
                </p>
        </main>
    );
}
