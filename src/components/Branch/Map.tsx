import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import placeholder from "../../../public/placeholder.png"
import 'leaflet/dist/leaflet.css';

const Map = ({ allCoordinates }:any) => {
  const icons = L.icon({
    iconUrl: placeholder,
    iconSize: [38, 38],
  });
  
  const position = allCoordinates.length > 0 ? [allCoordinates[0].lat, allCoordinates[0].lng] : [0, 0]; // Use the first coordinate as the initial position

  return (
    <>
      {allCoordinates && (
        <MapContainer
          center={position}
          zoom={8}
          style={{ width: '100%', height: '400px' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=GS3gO4cT4n0iC6EE9teK"
          />
          {allCoordinates.map((item:any, index:any) => (
            <Marker key={index} position={[item.lat, item.lng]} icon={icons} />
          ))}
        </MapContainer>
      )}
    </>
  );
};

export default Map;
