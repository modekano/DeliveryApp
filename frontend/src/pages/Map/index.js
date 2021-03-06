import React from 'react';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import Map from '../../components/Map';

const WrapperMap = withScriptjs(withGoogleMap(Map));

export default function MapContainer() {
  return (
    <div style={{ width: `100vw`, height: `100vh` }}>
      <WrapperMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
