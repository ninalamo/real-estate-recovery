import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import availableSvg from "../../assets/available.svg";
import unavailableSvg from "../../assets/unavailable.svg";
import recoveredSvg from "../../assets/recovered.svg";

const PoiMarker = ({ data }) => {
  const { location, status, type, name, address, area, value } = data;

  const iconAvailable = new L.Icon({
    iconUrl: availableSvg,
    iconRetinaUrl: availableSvg,
    iconSize: new L.Point(48, 48),
    iconAnchor: new L.Point(24, 48),
  });
  const iconUnvailable = new L.Icon({
    iconUrl: unavailableSvg,
    iconRetinaUrl: unavailableSvg,
    iconSize: new L.Point(48, 48),
  });
  const iconRecovered = new L.Icon({
    iconUrl: recoveredSvg,
    iconRetinaUrl: recoveredSvg,
    iconSize: new L.Point(48, 48),
    iconAnchor: new L.Point(24, 48),
  });

  const getIcon = (status) => {
    if (status === "Available") return iconAvailable;
    else if (status === "Unavailable") return iconUnvailable;
    else if (status === "Recovered") return iconRecovered;
    else return iconAvailable;
  };

  const icon = getIcon(status);

  // const map = useMap();

  return (
    <Marker position={location} icon={icon} id={location.id}>
      <Popup>
        <dl>
          <dt>Status</dt>
          <dd>{status}</dd>
          <dt>Type</dt>
          <dd>{type}</dd>
          <dt>Name</dt>
          <dd>{name}</dd>
          <dt>Address</dt>
          <dd>{address}</dd>
          <dt>Area</dt>
          <dd>
            {area} m<sup>2</sup>
          </dd>
          <dt>Value</dt>
          <dd>
            {value.toLocaleString("en-PH", {
              style: "currency",
              currency: "PHP",
            })}
          </dd>
        </dl>
      </Popup>
    </Marker>
  );
};

export default PoiMarker;
