import { divIcon, Icon, point } from 'leaflet';

const homeIcon = new Icon({
  iconSize: [33, 33],
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2163/2163350.png',
});

const coffeeIcon = new Icon({
  iconSize: [33, 33],
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1047/1047503.png',
});

export const markers = [
  {
    geoLoc: [40.389, 49.803],
    popUp: 'I live here 😊 ',
    icon: homeIcon,
  },
  {
    geoLoc: [40.385536411844136, 49.8286821978371],
    popUp: 'This is my favorite place. Come over for a cup of coffee ☕ ',
    icon: coffeeIcon,
  },
];

export const clusterIcon = cluster =>
  new divIcon({
    html: '<span>' + cluster.getChildCount() + '</span>',
    className: 'cluster-icon',
    iconSize: point(40, 40, true),
  });
