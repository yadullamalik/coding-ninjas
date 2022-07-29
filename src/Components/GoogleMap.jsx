import { useEffect, useState, useRef } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
const google = window.google;

export const Google_Map = ({ lat, lon, city }) => {
  const center = { lat: lat, lng: lon };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  //   const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: city,
      destination: "hospital",
      travelMode: google.maps.TravelMode.DRIVING,
    });
    // setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "500px",
          height: "500px",
          position: "relative",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            // options={{
            //   zoomControl: false,
            //   streetViewControl: false,
            //   mapTypeControl: false,
            //   fullscreenControl: false,
            // }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {/* {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )} */}
          </GoogleMap>
        </div>
        <div
          style={{
            backgroundColor: "white",
            bottom: "105px",
            right: "10px",
            padding: "4px",
            position: "absolute",
            zIndex: "1",
          }}
          onClick={() => {
            map.panTo(center);
            map.setZoom(15);
          }}
        >
          <BiCurrentLocation />
        </div>
      </div>
    </>
  );
};
