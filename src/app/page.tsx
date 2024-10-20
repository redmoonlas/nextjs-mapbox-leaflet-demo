"use client"
import Map from 'react-map-gl';

export default function Home() {
  return (
      <Map
          mapboxAccessToken="pk.eyJ1Ijoic2FsdmF0b3JlYXZhbnpvNzUiLCJhIjoiY20yZnBpdjJ0MGJ5azJscXplbG0xeTMzdyJ9.3WuDPJmpXhT5BsNQYfmqvQ"
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
