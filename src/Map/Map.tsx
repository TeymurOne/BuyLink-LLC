import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { partnerFormMap } from '../features/map/MapSlice';
import placeholder from '../../public/placeholder.png';

function ResetCenterView(props: any) {
  const { cordinat, setClickPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (cordinat && cordinat.lat && cordinat.lng) {
      map.setView([cordinat.lat, cordinat.lng], map.getZoom(), {
        animate: true,
      });
      setClickPosition({ lat: cordinat.lat, lng: cordinat.lng });
    }
  }, [cordinat]);

  return null;
}

const Map = (props: any) => {
  const { cordinat, setCoordinat, setInputValue } = props;
  const dispatch = useDispatch();
  const [clickedPosition, setClickPosition] = useState(null);

  useEffect(() => {
    if (clickedPosition) {
      dispatch(partnerFormMap(clickedPosition));
    }
  }, [clickedPosition, dispatch]);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    const newCoordinates = { lat, lng };
    setClickPosition(newCoordinates);
    setCoordinat(newCoordinates);
    setInputValue(`${lat}, ${lng}`);
  };
  const position = [40.34720432727009, 49.81097458154038];
  const icons = L.icon({
    iconUrl: placeholder,
    iconSize: [38, 38],
  });

  return (
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
      <MapEventsHandler handleMapClick={handleMapClick} />
      {clickedPosition && (
        <Marker position={clickedPosition} icon={icons}></Marker>
      )}
      {cordinat && (
        <ResetCenterView
          setClickPosition={setClickPosition}
          cordinat={cordinat}
        />
      )}
    </MapContainer>
  );
};

const MapEventsHandler = ({ handleMapClick }: any) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return null;
};

export default Map;
