import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

export const Map = (props: any) => {
  const { selectedLat, selectedLng, onLatChange, onLngChange } = props;

  const [lat, setLat] = useState(40.405999043422824);
  const [lng, setLng] = useState(49.91863556236839);

  useEffect(() => {
    setLat(selectedLat);
    setLng(selectedLng);
  }, [selectedLat, selectedLng]);


  const [marker, setMarker] = useState(null);

  function handleLat(latKordinat: any) {
    onLatChange(latKordinat);
  }

  function handleLng(lngKordinat: any) {
    onLngChange(lngKordinat);
  }

  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 13,
    draggable: true,
  };
  useEffect(() => {
    if (marker) {
      marker.setPosition({ lat, lng });
    }
  }, [lat, lng, marker, selectedLat, selectedLng]);

  const loadMap = (map, maps) => {
    if (!marker) {
      const newMarker = new maps.Marker({
        position: {
          lat: defaultProps.center.lat,
          lng: defaultProps.center.lng,
        },
        map,
        draggable: true,
      });
      newMarker.addListener('dragend', handleDragEnd);
      setMarker(newMarker);
    }
  };

  const handleDragEnd = (e) => {
    handleLat(e.latLng.lat());
    handleLng(e.latLng.lng());
  };

  return (
    <div className="w-full h-[400px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD-mUP0enyn48aZflccupdAU4WsGIYEthM' }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      />
        
    </div>
  );
};
