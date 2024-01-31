import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { useDispatch, useSelector } from 'react-redux';

export const Map = (props: any) => {
  const { selectedLat, selectedLng, onLatChange, onLngChange } = props;
  const latData = useSelector((state: any) => state.commonSlice.lat);
  const longData = useSelector((state: any) => state.commonSlice.lng);

  const dispatch = useDispatch();

  const [lat, setLat] = useState(40.405999043422824);
  const [lng, setLng] = useState(49.91863556236839);

  useEffect(() => {
    setLat(selectedLat);
    setLng(selectedLng);
  }, [selectedLat, selectedLng]);
  
 

  // 440.43488087315876
  // 49.76774521202658
  const [marker, setMarker] = useState(null);

  function handleLat(latKordinat) {

    
    onLatChange(latKordinat);
  }

  function handleLng(lngKordinat) {


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
