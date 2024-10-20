"use client"
import Map from 'react-map-gl';

const MapCanvas = () => {
    return (
        <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOXTOKEN}
            initialViewState={{
                longitude: 20,
                latitude: 0,
                zoom: 3
            }}
            style={{width: '100%', height: '800px'}}
            mapStyle="mapbox://styles/mapbox/dark-v10"
        />
    );
}

export default MapCanvas;