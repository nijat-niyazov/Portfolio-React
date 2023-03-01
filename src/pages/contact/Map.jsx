import React, { useCallback, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const center = {
    lat: 40.389,
    lng: 49.803,
  };

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCDkjKlmOq-Bx5LowuhRIupZPO0c4nUM6Q">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
