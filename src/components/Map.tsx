"use client"
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface Hazard {
    severity: string;
    type: string;
    name: string;
    latitude: number;
    longitude: number;
    created: string;
    lastUpdate: string;
}

const icon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoic2FsdmF0b3JlYXZhbnpvNzUiLCJhIjoiY20yZnBpdjJ0MGJ5azJscXplbG0xeTMzdyJ9.3WuDPJmpXhT5BsNQYfmqvQ"//process.env.NEXT_PUBLIC_MAPBOXTOKEN;

const Map: React.FC = () => {
   const [hazards, setHazards] = useState<Hazard[]>([]);


    useEffect(() => {
        fetch("https://api.hungermapdata.org/v1/climate/hazards")
            .then((res) => res.json())
            .then((data) => {
                setHazards(data.body.hazards);
            });
    }, []);


    return (
        <MapContainer
            center={[0, 20]}
            zoom={2}
            style={{ height: '100vh', width: '100%' }}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`}
                attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
                tileSize={512}
                zoomOffset={-1}
            />
            {hazards && hazards.map((hazard) => (
                <Marker key={hazard.name} position={[hazard.latitude, hazard.longitude]} icon={icon}>
                    <Popup>{hazard.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;




