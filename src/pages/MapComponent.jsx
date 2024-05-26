import React from 'react';

const MapComponent = () => {
    return (
        <div className='pt-14'>
            <iframe
                id="map-canvas"
                className="map_part max-sm:w-[20rem] rounded-lg mx-auto"
                width="600"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Balaji AgroTech Industries  Tikratoli, Nagri, Ranchi 835303, Jharkhand, India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
                Powered by <a href="https://www.googlemapsgenerator.com">google maps embed</a> and <a href="https://allabeviljas.se/">allabeviljas.se</a>
            </iframe>
        </div>
    );
};

export default MapComponent;
