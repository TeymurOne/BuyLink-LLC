import { useState, useEffect } from 'react';
import { Map } from '../Branch/Map';

interface Props {
  lat?: number;
  lng?: number;
  onLat: (lat: number) => void;
  onLng: (lng: number) => void;
}

const EditMap = ({ lat, lng, onLat, onLng }: Props) => {
  const [selectedLat, setSelectedLat] = useState<number>(Number(lat));
  const [selectedLng, setSelectedLng] = useState<number>(Number(lng));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectedLat(Number(lat));
      setSelectedLng(Number(lng));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [lat, lng]);

  const handleLatChange = (lat: number) => {
    setSelectedLat(lat);
    onLat(lat);
  };

  const handleLngChange = (lng: number) => {
    setSelectedLng(lng);
    onLng(lng);
  };

  return (
    <>
      {selectedLat !== null && selectedLng !== null && (
        <Map
          selectedLat={selectedLat}
          selectedLng={selectedLng}
          onLatChange={handleLatChange}
          onLngChange={handleLngChange}
        />
      )}
    </>
  );
};

export default EditMap;
