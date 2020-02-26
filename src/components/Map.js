import React, { useState } from 'react';
import ReactMap from 'react-map-gl';

export default function Map({ lat, lon }) {
  const REACT_APP_MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1Ijoib2xlZzU1NTU1IiwiYSI6ImNrNzB0OXM5MDAwbTAzbHRocDc3M3E4NzQifQ.sNg-pI-XaUocujOIetTA_Q';
  const [viewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 7,
    width: '300px',
    height: '400px',
  });
  return (
    <div>
      <ReactMap
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
      />
    </div>
  );
}
