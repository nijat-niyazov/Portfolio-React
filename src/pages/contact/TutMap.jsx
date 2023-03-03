import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
MapContainer;
import 'leaflet/dist/leaflet.css';
import './test.scss';
import { divIcon, Icon, point } from 'leaflet';
import marker from '../../assets/images/markerIcon.png';
import MarkerClusterGroup from 'react-leaflet-cluster';

const TutMap = () => {
  
  // Steps ⤵
  // 1. Mapcontainer and center(your location) --zoom(level)
  // 2. attribution - map provider url
  // 3. url - url from site
  // 4. reason of its to be piece of piece is beacuse we import it
  // 5. solve it we need upload css and after that map will be gone and its downloading it actually, but unknowingly reason it sets its height to 0 and change its height will make map appear
  // 6. Custom icon need npm install leaflet
  // npm i react-leaflet-cluster // to make separate combinations and let know how many there are in small place

  const markers = [
    { geocode: [40.3903, 49.8027], popUp: 'Hi I live here' },
    { geocode: [40.3595, 49.8266], popUp: "It's flame Towers" },
    { geocode: [40.3959, 49.8678], popUp: "It's Heydar Aliyev museum" },
  ];

  // var greenIcon = L.icon({
  //   iconUrl: 'leaf-green.png',
  //   shadowUrl: 'leaf-shadow.png',

  //   iconSize: [38, 95], // size of the icon
  //   shadowSize: [50, 64], // size of the shadow
  //   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  //   shadowAnchor: [4, 62], // the same for the shadow
  //   popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  // });

  const customPopUpIcon = new Icon({
    // iconUrl: 'https://cdn-icons-png.flaticon.com/512/9795/9795702.png',
    iconUrl: marker,
    iconSize: [38, 38],
  });

  const customClusterIcon = cluster => {
    return new divIcon({
      html: `<div className="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: point(33, 33, true),
    });
  };

  return (
    <MapContainer center={[40.3903, 49.8027]} zoom={20}>
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <TileLayer
        attribution="Stadia_AlidadeSmoothDark"
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />

      <MarkerClusterGroup
        chunkedLoading //for performance downloading them one by one
        iconCreateFunction={customClusterIcon}
      >
        {markers.map(({ geocode, popUp }, key) => {
          return (
            <Marker position={geocode} icon={customPopUpIcon} key={key}>
              <Popup>
                <h1>{popUp}</h1>
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default TutMap;
