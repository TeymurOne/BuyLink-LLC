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
import L from 'leaflet';
import placeholder from '../../public/placeholder.png';

function ResetCenterView(props: any) {
  const { coordinate, setClickPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (coordinate && coordinate.lat && coordinate.lng) {
      map.setView([coordinate.lat, coordinate.lng], map.getZoom(), {
        animate: true,
      });
      setClickPosition({ lat: coordinate.lat, lng: coordinate.lng });
    }
  }, [coordinate]);

  return null;
}

const Map = (props: any) => {
  const { coordinate, setCoordinate, setInputValue } = props;
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
    setCoordinate(newCoordinates);
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
      {coordinate && (
        <ResetCenterView
          setClickPosition={setClickPosition}
          coordinate={coordinate}
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
