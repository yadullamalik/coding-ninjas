import { useEffect, useState, useRef } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
const google = window.google;

export const Google_Map = ({ lat, lon, city }) => {
  var map;
  var infowindow;

  function initialize() {
    var pyrmont = new google.maps.LatLng(19.107567, 72.8335); // sample location to start with: Mumbai, India

    map = new google.maps.Map(document.getElementById("map-canvas"), {
      center: pyrmont,
      zoom: 15,
    });

    var request = {
      location: pyrmont,
      radius: 200,
      types: ["hospital", "health"], // this is where you set the map to get the hospitals and health related places
    };
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  google.maps.event.addEventListener(window, "load", initialize);

  //   const center = { lat: lat, lng: lon };
  //   const { isLoaded } = useJsApiLoader({
  //     googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //     libraries: ["places"],
  //   });

  //   const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  //   //   const [directionsResponse, setDirectionsResponse] = useState(null);
  //   const [distance, setDistance] = useState("");
  //   const [duration, setDuration] = useState("");
  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   const getData = async () => {
  //     const directionsService = new google.maps.DirectionsService();
  //     const results = await directionsService.route({
  //       origin: city,
  //       destination: "hospital",
  //       travelMode: google.maps.TravelMode.DRIVING,
  //     });
  //     // setDirectionsResponse(results);
  //     console.log("results:", results);
  //     setDistance(results.routes[0].legs[0].distance.text);
  //     setDuration(results.routes[0].legs[0].duration.text);
  //   };

  //   console.log("hi", distance, duration);
  //   if (!isLoaded) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <>
      {/* <div
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
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {/* {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )} 
          </GoogleMap>
        </div>
        <div
          style={{
            backgroundColor: "white",
            zIndex: "1",
            padding: "4px",
            margin: "4px",
          }}
        >
          <div>
            {distance}-{duration}
            <br />
            <button
              onClick={() => {
                map.panTo(center);
                map.setZoom(15);
              }}
            >
              Center
            </button>
          </div>
        </div>
      </div> */}
      <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"></script>

      <div id="map-canvas" style={{ height: "500px", width: "500px" }}></div>
    </>
  );
};
