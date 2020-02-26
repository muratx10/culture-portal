import React, { useState } from 'react';
import ReactMap from 'react-map-gl';

export default function Map() {
  const REACT_APP_MAPBOX_ACCESS_TOKEN =
    'pk.eyJ1Ijoib2xlZzU1NTU1IiwiYSI6ImNrNzB0OXM5MDAwbTAzbHRocDc3M3E4NzQifQ.sNg-pI-XaUocujOIetTA_Q';
  const [viewport, setViewport] = useState({
    latitude: 53.9,
    longitude: 27.56667,
    zoom: 10,
    width: '500px',
    height: '500px',
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
