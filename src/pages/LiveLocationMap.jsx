import React from "react";
import  { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const LiveLocationMap = () => {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching live location
        const fetchLiveLocation = async () => {
            // Replace this with your live location fetching logic
            // For demonstration, using a dummy API that returns a random location
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();

            // Assuming the response contains lat and lng properties
            setLocation({
                lat: parseFloat(data.lat),
                lng: parseFloat(data.lng),
            });

            setLoading(false);
        };

        fetchLiveLocation();
    }, []); // Make sure to include any dependencies if needed

    return (
        <div className="w-[100%] h-[200px]">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <MapContainer
                    center={location}
                    zoom={13}
                    style={{ width: '100%', height: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={location}>
                        <Popup>
                            Live Location: {location.lat}, {location.lng}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
};

export default LiveLocationMap;
