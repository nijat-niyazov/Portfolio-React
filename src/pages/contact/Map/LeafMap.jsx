import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { markers, clusterIcon } from './mapData';
import MarkerClusterGroup from 'react-leaflet-cluster';

const LeafMap = () => {
  return (
    <MapContainer center={[40.387318798444554, 49.81600596369627]} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading iconCreateFunction={clusterIcon}>
        {markers?.map(({ geoLoc, popUp, icon }, i) => {
          return (
            <Marker
              position={geoLoc}
              icon={icon}
              key={i}
              eventHandlers={{
                mouseover: e => e.target.openPopup(),
                mouseout: e => e.target.closePopup(),
              }}
            >
              <Popup>
                {popUp.split('.').map((sentence, i) => {
                  if (i === 0) {
                    return (
                      <span key={i} className="popup">
                        {sentence} <br />
                      </span>
                    );
                  }
                  return (
                    <span key={i} className="popup">
                      {sentence}
                    </span>
                  );
                })}
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default LeafMap;
