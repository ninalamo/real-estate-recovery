import { useState } from "react";
import MapProvider from "../contexts/MapContext";
import Filter from "./map/Filter";
import Map from "./map/Map";
import PoiCard from "./map/PoiCard";

const Explorer = () => {
  
    const markers = [
        {
          id: "4683D991-AAE4-4CF8-94F4-E920E619C3FD",
          location: { lat: 14.631430775054255, lng: 121.00490039556313 },
          status: "Available",
          type: "Residential",
          name: "Rodrigo Calapan's House",
          address: "141 Calamba Street, Santo Domingo, Quezon City",
          area: 2500,
          value: 250000000,
        },
        {
          id: "395D7710-0838-4D52-90E8-D4871C617AA8",
          location: { lat: 14.63094154397855, lng: 121.00518438346484 },
          status: "Available",
          type: "Commercial",
          name: "General Merchandising Inc.",
          address: "1114 Biak na Bato Street, Santo Domingo, Quezon City",
          area: 2000,
          value: 200000000,
        },
        {
          id: "7B5C6D88-91F4-4B31-A41B-1D9B8320F99D",
          location: { lat: 14.63046352746673, lng: 121.00309299902048 },
          status: "Recovered",
          type: "Commercial",
          name: "One Banawe Complex",
          address: "546 Banawe Street, Santo Domingo, Quezon City",
          area: 1000,
          value: 100000000,
        },
        {
          id: "1028F925-38EB-40DF-B2AB-7BCCFDD44A23",
          location: { lat: 14.63021986058453, lng: 121.00334743597591 },
          status: "Available",
          type: "Commercial",
          name: "1990 Gold Land Building",
          address: "1990 Banawe Street, Santo Domingo, Quezon City",
          area: 1700,
          value: 170000000,
        },
        {
          id: "88D59054-4756-429A-BE3A-503C039EFF09",
          location: { lat: 14.629295245151242, lng: 121.00366892667842 },
          status: "Available",
          type: "Commercial",
          name: "Reyes-Milleanor Commercial Complex",
          address: "488 Banawe Street, Santo Domingo, Quezon City",
          area: 1230,
          value: 123000000,
        },
        {
          id: "711B5A3B-BCFE-4425-B6F9-4FCFE5F107E5",
          location: { lat: 14.631492592148968, lng: 121.00263228647248 },
          status: "Available",
          type: "Commercial",
          name: "Citic Tower",
          address: "88 Banawe Street, Santo Domingo, Quezon City",
          area: 1080,
          value: 216000000,
        },
        {
          id: "64A74623-C1C6-424F-8138-B7AB55FF6382",
          location: { lat: 14.62782854619685, lng: 121.00080694757284 },
          status: "Available",
          type: "Religious",
          name: "St. Theresa's College of Quezon City",
          address: "116 D. Tuazon Avenue, Lourdes, Quezon City",
          area: 85500,
          value: 8500000000,
        },
        {
          id: "64A74623-C1C6-424F-8138-B7AZ55FF6382",
          location: { lat: 14.62751, lng: 121.00331 },
          status: "Unavailable",
          type: "Government Hospital",
          name: "Philippine Orthopedic Center",
          address: "78 Maria Clara Street, Lourdes, Quezon City",
          area: 23500,
          value: 2350000000,
        }
      ];

  const [filter, setFilter] = useState("");
  const zoom = 20;


	const renderCard = () => {
    console.log(filter);
		if (filter === "") {
			return markers.map((l) =>  <PoiCard key={l.id} marker={l} zoom={zoom} />);
		} else {
			return markers
				.filter(
					(x) =>
						x.name.toLowerCase().includes(filter.toLowerCase()) ||
						filter.toLowerCase().includes(x.name.toLowerCase()) ||
						x.address.toLowerCase().includes(filter.toLowerCase()) ||
						filter.toLowerCase().includes(x.address.toLowerCase())
				)
				.map((x) => <PoiCard key={x.id} marker={x} zoom={zoom} />);
		}
	};


    return (
      <MapProvider>
        <div className="row">
            <div  className="col-sm-12 col-md-4 mobile-50 desktop-100 p-5 overflow-scroll">
              <div className="container-fluid">
                    <Filter setFilter={setFilter} className="px-3 fixed-top" />
                    <div className="d-flex flex-column   mt-3  ">{renderCard()}</div>
              </div>
            </div>
            
          <div className="col-sm-12 col-md-8">
            <Map  markers={markers} />
          
          </div>
        </div>
      </MapProvider>

    );
}
export default Explorer;