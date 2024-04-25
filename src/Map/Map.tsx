import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import Loader from '../common/Loader';

function ResetCenterWiew(props) {
  const { selectposition } = props;
  const map = useMap();
  useEffect(() => {
    if (selectposition) {
      map.setView(
        L.latLng(selectposition?.lat, selectposition?.lon),
        map.getZoom(),
        {
          animate: true,
        },
      );
    }
  }, [selectposition]);
  return null;
}

const Map = (props) => {
  const { selectposition, lat, lng } = props;


  const locatioselection = [selectposition?.lat, selectposition?.lon];

  const position = [lat, lng];
  const icons = L.icon({
    iconUrl: '/placeholder.png',
    iconSize: [38, 38],
  });

  return (
    <>
      {lat == null && lng == null ? (
        <Loader />
      ) : (
        <MapContainer
          center={position}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=GS3gO4cT4n0iC6EE9teK"
          />
          <Marker position={position} icon={icons}></Marker>
          {selectposition && (
            <Marker position={locatioselection || position} icon={icons}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          )}
          <ResetCenterWiew selectposition={selectposition} />
        </MapContainer>
      )}
    </>
  );
};

export default Map;
