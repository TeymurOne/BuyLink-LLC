import React, { useEffect, useState } from 'react';
import Map from './Map';
import { useTranslation } from 'react-i18next';

const App = (props: any) => {
  const { lat, lng, attemptedSubmit, resetCoordinates } = props;
  const { t } = useTranslation();

  const [coordinate, setCoordinate] = useState<any>({ lat, lng });
  const [inputValue, setInputValue] = useState<string>(
    `${lat ?? ''},${lng ?? ''}`,
  );

  useEffect(() => {
    if (resetCoordinates) {
      setCoordinate({ lat: '', lng: '' });
      setInputValue('');
    }
  }, [resetCoordinates]);

  useEffect(() => {
    setInputValue(`${coordinate.lat ?? ''},${coordinate.lng ?? ''}`);
  }, [coordinate]);

  const handleCoordinateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d.,-]/g, '');
    setInputValue(value);
    const [newLat, newLng] = value.split(',').map((coord) => coord.trim());
    const isValidCoordinate = (coord: string) => /^-?\d+(\.\d+)?$/.test(coord);

    if (isValidCoordinate(newLat) && isValidCoordinate(newLng)) {
      setCoordinate({
        lat: parseFloat(newLat),
        lng: parseFloat(newLng),
      });
    } else {
      setCoordinate({ lat: undefined, lng: undefined });
    }
  };

  const isCoordinateValid = (value: string) => {
    const [lat, lng] = value.split(',').map((coord) => coord.trim());
    const isValidCoordinate = (coord: string) => /^-?\d+(\.\d+)?$/.test(coord);
    return isValidCoordinate(lat) && isValidCoordinate(lng);
  };

  const inputClassName = (isInvalid: boolean): string =>
    isInvalid ? 'error-input' : '';

  return (
    <>
      <div className="h-125 w-full rounded-md shadow-2xl">
        <Map
          coordinate={coordinate}
          setCoordinate={setCoordinate}
          setInputValue={setInputValue}
          resetCoordinates={resetCoordinates}
        />
      </div>

      <div className="mt-10" style={{ position: 'relative' }}>
        <label htmlFor="coordinates">{t('branch.15')}</label>
        <input
          type="text"
          id="coordinates"
          placeholder="Enter your coordinates"
          value={inputValue}
          onChange={handleCoordinateChange}
          className={`${inputClassName(attemptedSubmit && !isCoordinateValid(inputValue))} mb-4 w-full rounded-lg border-0 py-1.5 pl-4 shadow-md outline-none sm:max-w-full sm:text-sm sm:leading-6 lg:max-w-90`}
        />
        {attemptedSubmit && !isCoordinateValid(inputValue) && (
          <span style={{ color: '#F31F1F', fontSize: '10px' }}>
            *{t('toast.14')}
          </span>
        )}
      </div>
    </>
  );
};

export default App;
