// MapContext.js

import { createContext, useContext, useRef } from "react";

const MapContext = createContext(null);

export const useMap = () => {
  const mapRef = useContext(MapContext);
  if (!mapRef) throw new Error("useMap must be used within a MapProvider");
  return mapRef;
};

const MapProvider = ({ children }) => {
  const mapRef = useRef(null);

  return <MapContext.Provider value={mapRef}>{children}</MapContext.Provider>;
};

export default MapProvider;
