// Button.js
import { useMap } from "../../contexts/MapContext";

const PoiCard = ({ marker, zoom }) => {
  const mapRef = useMap();

  const handleButtonClick = () => {
    if (mapRef.current) {
      mapRef.current.flyTo(marker.location, zoom, { duration: 2 });
    }
  };


  return (
    <div className="card border-light mb-3">
      <div className="card-header"> {marker.status} </div>
      <div className="card-body">
        <h5 className="card-title">
          {marker.name} ({marker.type})
        </h5>
        <p className="card-text">{marker.address}</p>
        <div className="p-2">
          <button onClick={handleButtonClick} className='btn btn-md btn-success text-white m-2'>Navigate</button>
          <button onClick={handleButtonClick} className='btn btn-md btn-secondary text-white'>Images</button>
        </div>
      </div>
    </div>
    );
};

export default PoiCard;
