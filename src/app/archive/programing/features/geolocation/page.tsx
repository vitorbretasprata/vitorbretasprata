'use client';
import { useEffect } from "react";

export default function Geolocation() {

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
                Geo Location
            </h1>

            <div className="my-12">
                <h3 className='text-2xl mb-3'>Summary</h3>
                <hr />

                <p className='mt-6'>
                    The Geolocation API provides a convenient method for obtaining the geographical location of 
                    a device or user. It allows web applications to access the device's location information, 
                    such as latitude and longitude coordinates, which can be utilized to offer location-based 
                    services or enhance user experiences. Through the use of navigator.geolocation, developers can 
                    prompt users for permission to access their location data, and upon approval, retrieve 
                    accurate location information. This API enables the creation of location-aware web applications, 
                    facilitating functionalities like mapping, weather forecasting, local business searches, and more. 
                    By leveraging the Geolocation API, developers can deliver tailored experiences that cater to the 
                    specific needs and preferences of users based on their geographic location.
                </p>
            </div>


        </main>
    );
}
