import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

export const apikey = 'AIzaSyDDDB-r8zysSBEC-5qV9oFlXm41J9v0MVo';

export const MapModal = ({ lat, lng, allkordinat , name}:any) => {

  
  

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (allkordinat && allkordinat.length > 0) {
      const newMarkers = allkordinat.map((coord:any, index:number) => ({
        id: index,
        lat: parseFloat(coord.lat),
        lng: parseFloat(coord.lng),
        color: 'blue',
      }));

      setMarkers(newMarkers);
    }
  }, [allkordinat]);
  

  useEffect(() => {
    if (lat !== undefined && lng !== undefined) {
      const newMarker = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        bname:name,
        color: 'red',
      };
      setMarkers([newMarker]);
    } else {
      setMarkers([]);
    }
  }, [lat, lng]);

  const loadMap = (map, maps) => {
    markers.forEach((marker) => {
      new maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map,
        draggable: true,
        title: `Marker ${marker?.bname}`,
      });
    });
    
  };

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };
  const defaultZoom = 12;

  return (
    <div style={{ height: '500px', width: '700px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apikey }}
        center={center}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      />
    </div>
  );
};
