import React, { useState } from 'react';
import ReactMap, { Marker } from 'react-map-gl';
import '../styles/Map.scss';

export default function Map({ lat, lon, birthplace }) {
  const REACT_APP_MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1Ijoib2xlZzU1NTU1IiwiYSI6ImNrNzB0OXM5MDAwbTAzbHRocDc3M3E4NzQifQ.sNg-pI-XaUocujOIetTA_Q';
  const [viewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 7,
    width: '80%',
    height: '400px',
  });
  return (
    <div className="mapContainer">
      <ReactMap
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/oleg55555/ck74ybnfx0yt81inb0kttqyea"
      >
        <Marker latitude={lat} longitude={lon}>
          <img
            src="https://cdn.icon-icons.com/icons2/152/PNG/128/maps_21767.png"
            alt="icon"
            width="35"
            height="35"
          />
          <h3>{birthplace}</h3>
        </Marker>
      </ReactMap>
    </div>
  );
}
