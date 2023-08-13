// Map.js
import React from 'react';
import { MapContainer } from 'react-leaflet';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';
import PoiMarker from './PoiMarker';
import { useMap } from '../../contexts/MapContext';

const Map = ({ markers }) => {
  const mapRef = useMap();

  return (
    <MapContainer
      center={markers[0].location}
      scrollWheelZoom={true}
      zoom={15}
      className="mobile-50 desktop-100"
      ref={mapRef}
    >
      {/* <MapRef mapRef={setMap} /> */}

      <VectorTileLayer
        styleUrl="https://tile.openstreetmap.jp/styles/openmaptiles/style.json"
        attribution='&copy; <a href="https://www.openmaptiles.org/">OpenMapTiles</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {markers.map((location) => {
        return <PoiMarker data={location} key={location.id} />;
      })}
    </MapContainer>
  );
};

export default Map;
