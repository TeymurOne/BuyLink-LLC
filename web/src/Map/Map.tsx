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
import L, { LeafletMouseEvent } from 'leaflet';
import placeholder from '../../public/placeholder.png';

interface Coordinate {
  lat: number;
  lng: number;
}

interface ResetCenterViewProps {
  coordinate: Coordinate | null;
  setClickPosition: (position: Coordinate | null) => void;
  resetCoordinates: boolean;
}

interface MapProps {
  coordinate: Coordinate | null;
  setCoordinate: (coordinate: Coordinate) => void;
  setInputValue: (value: string) => void;
  resetCoordinates: boolean;
}

interface MapEventsHandlerProps {
  handleMapClick: (e: LeafletMouseEvent) => void;
}

function ResetCenterView({
  coordinate,
  setClickPosition,
  resetCoordinates,
}: ResetCenterViewProps) {
  const map = useMap();

  useEffect(() => {
    if (resetCoordinates) {
      map.setView([40.34720432727009, 49.81097458154038], map.getZoom(), {
        animate: true,
      });
      setClickPosition(null);
    } else if (coordinate) {
      map.setView([coordinat.lat, coordinate.lng], map.getZoom(), {
        animate: true,
      });
      setClickPosition({ lat: coordinate.lat, lng: coordinate.lng });
    }
  }, [coordinate, resetCoordinates, map, setClickPosition]);

  return null;
}
const Map = ({
  coordinate,
  setCoordinate,
  setInputValue,
  resetCoordinates,
}: MapProps) => {
  const dispatch = useDispatch();
  const [clickedPosition, setClickPosition] = useState<Coordinate | null>(null);
  const [markedPosition, setMarkedPosition] = useState<Coordinate | null>(null);

  useEffect(() => {
    if (clickedPosition) {
      dispatch(partnerFormMap(clickedPosition));
      setMarkedPosition(clickedPosition);
    }
  }, [clickedPosition, dispatch]);

  useEffect(() => {
    if (resetCoordinates) {
      setClickPosition(null);
      setMarkedPosition(null);
    }
  }, [resetCoordinates]);

  // Center the map and update the marker when coordinates change
  useEffect(() => {
    if (coordinate?.lat && coordinate?.lng) {
      setMarkedPosition(coordinate); // Update marker position
      setClickPosition(coordinate); // Center the map
    }
  }, [coordinate]);

  const handleMapClick = (e: LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    const newCoordinates = { lat, lng };
    setClickPosition(newCoordinates);
    setCoordinate(newCoordinates);
    setInputValue(`${lat}, ${lng}`);
  };

  const icon = L.icon({
    iconUrl: placeholder,
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      center={[
        coordinate?.lat || 40.34720432727009,
        coordinate?.lng || 49.81097458154038,
      ]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=GS3gO4cT4n0iC6EE9teK"
      />
      <MapEventsHandler handleMapClick={handleMapClick} />
      {markedPosition && (
        <Marker position={markedPosition} icon={icon}></Marker>
      )}
    </MapContainer>
  );
};

const MapEventsHandler = ({ handleMapClick }: MapEventsHandlerProps) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return null;
};

export default Map;
