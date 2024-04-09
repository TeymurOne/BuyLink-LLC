import { useEffect, useReducer } from 'react';
import GoogleMapReact from 'google-map-react';
export const apikey = 'AIzaSyDDDB-r8zysSBEC-5qV9oFlXm41J9v0MVo';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'setLat':
      return { ...state, lat: action.payload };
    case 'setLng':
      return { ...state, lng: action.payload };
    case 'setAutocompleteService':
      return { ...state, autocompleteService: action.payload };
    case 'setAutocomplete':
      return { ...state, autocomplete: action.payload };
    case 'setMarker':
      return { ...state, marker: action.payload };
    case 'inputValue':
      return { ...state, inputValue: action.payload };
    default:
      return state; 
  }
}
interface Iface {
  lat: number;
  lng: number;
  marker: any;
  inputValue: string;
  autocompleteService: any;
  autocomplete: any;
}

export const Map = (props: any) => {
  const maps = window.google && window.google.maps;


  const initialState: Iface = {
    lat: 40.405999043422824,
    lng: 49.91863556236839,
    marker: null,
    inputValue: '',
    autocompleteService: null,
    autocomplete: null,
  };

  const [
    { lat, lng, marker, inputValue, autocompleteService, autocomplete },
    dispatch,
  ] = useReducer(reducer, initialState);
  function test() {
    dispatch({
      type: 'setAutocompleteService',
      payload: new maps.places.AutocompleteService(),
    });

    dispatch({
      type: 'setAutocomplete',
      payload: new maps.places.Autocomplete(
        document.getElementById('autocomplete-input') as HTMLInputElement
      ),
    });
    
  }

  const { selectedLat, selectedLng, onLatChange, onLngChange } = props;

  useEffect(() => {
    dispatch({ type: 'setLat', payload: selectedLat });
    dispatch({ type: 'setLng', payload: selectedLng });
  }, [selectedLat, selectedLng]);

  useEffect(() => {
    if (maps) {
      setTimeout(() => {
        test()

        
      }, 1000);
 
    
      
    }
  }, [props]);
  

  useEffect(() => {
    if (marker) {
      marker.setPosition({ lat, lng });
    }
  }, [lat, lng, marker, selectedLat, selectedLng]);


  const loadMap = (map: any, maps: any) => {
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
      dispatch({ type: 'setMarker', payload: newMarker });
    }
  
    test()
  };

  const handleDragEnd = (e: any) => {
    handleLat(e.latLng.lat());
    handleLng(e.latLng.lng());
  };

  const handlePlaceSelect = () => {
    if (!autocomplete) return;

    const place = autocomplete.getPlace();
    if (place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      dispatch({ type: 'setLat', payload: lat });
      dispatch({ type: 'setLng', payload: lng });

      onLatChange(lat);
      onLngChange(lng);
    }
  };

  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener('place_changed', handlePlaceSelect);
    }
  }, [autocomplete]);

  const handleLat = (latKordinat: any) => {
    onLatChange(latKordinat);
  };

  const handleLng = (lngKordinat: any) => {
    onLngChange(lngKordinat);
  };

  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 13,
    draggable: true,
  };

  useEffect(() => {
    if (inputValue.trim() !== '' && autocompleteService) {
      const componentRestrictions = { country: 'AZ' };
      autocompleteService.getPlacePredictions(
        {
          input: inputValue,
          componentRestrictions,
        },
      
      );
    }
  }, [inputValue, autocompleteService]);

  return (
    <div className="w-full h-[400px]">
      <input
        type="text"
        id="autocomplete-input"
        className="block w-full max-w-[300px] px-2 rounded-md border-1 py-1.5 mb-4  shadow-sm ring-1   placeholder:text-gray-400  border-[#ced4da] sm:text-sm sm:leading-6"
        value={inputValue}
        onChange={(e) =>
          dispatch({ type: 'inputValue', payload: e.target.value })
        }
      />
      <GoogleMapReact
        bootstrapURLKeys={{ key: apikey, libraries: 'places' }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
        
      />
    </div>
  );
};
