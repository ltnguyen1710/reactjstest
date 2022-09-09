import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { InfoBox } from "@react-google-maps/api";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 10.781653085205598, 
  lng: 106.64542917260083,
};

function MyComponent({ data }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA7pWol3r68zyJEPfIDl6QV05ppREcomdw",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const options = { closeBoxURL: "", enableEventPropagation: true };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        icon={{
          url: data.image,
          scaledSize: new window.google.maps.Size(40, 40),
        }}
        position={center}
      >
        <InfoBox options={options}>
          <>
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                borderRadius: "1em",
                padding: "0.2em",
              }}
            >
              {data.name}
            </div>
          </>
        </InfoBox>
      </Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
