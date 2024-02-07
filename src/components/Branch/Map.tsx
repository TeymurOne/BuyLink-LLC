import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
export const apikey = 'AIzaSyDDDB-r8zysSBEC-5qV9oFlXm41J9v0MVo';

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
  }, [lat, lng, setLat, setLng,  marker, selectedLat, selectedLng]);

  const loadMap = (map:any, maps:any) => {
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

  const handleDragEnd = (e:any) => {
    handleLat(e.latLng.lat());
    handleLng(e.latLng.lng());
  };
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    if (inputValue.trim() !== '') {
      const geocoder:any = new google.maps.Geocoder();
      const componentRestrictions = { country: 'AZ' }; // Replace with the desired country code

      geocoder.geocode(
        {
          address: inputValue,
          componentRestrictions,
        },
        (results:any, status:any) => {
          if (status === 'OK' && results.length > 0) {
            const location = results[0].geometry.location;
            handleLat(location.lat())
            handleLng(location.lng())
           
            if (marker) {
              marker.setPosition(location);
            }
          } else {
            console.error(
              'Geocode was not successful for the following reason:',
              status,
            );
          }
        },
      );
    }
  }, [inputValue, marker]);

  return (
    <div className="w-full h-[400px]">
      <input
        type="text"
        
        className="block w-full max-w-[300px] px-2 rounded-md border-1 py-1.5 mb-4  shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da] sm:text-sm sm:leading-6"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <GoogleMapReact
        bootstrapURLKeys={{ key: apikey }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
      />
        
    </div>
  );
};
