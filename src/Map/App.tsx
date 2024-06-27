import { useState } from 'react';
import Map from './Map';
import { useTranslation } from 'react-i18next';

const App = (props: any) => {
  const { lat, lng } = props;
  const { t } = useTranslation();

  const [cordinat, setCoordinat] = useState<any>({ lat: lat, lng: lng });
  const [inputValue, setInputValue] = useState<string>(`${lat}, ${lng}`);

  const handleCoordinateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const [newLat, newLng] = value.split(',').map(coord => coord.trim());

    const isValidCoordinate = (coord: string) => /^-?\d+(\.\d+)?$/.test(coord);

    if (isValidCoordinate(newLat) && isValidCoordinate(newLng)) {
      setCoordinat({
        lat: parseFloat(newLat),
        lng: parseFloat(newLng),
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedChars = '0123456789.,-';
    if (!allowedChars.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="h-125 w-full rounded-md shadow-2xl">
        <Map cordinat={cordinat} setCoordinat={setCoordinat} />
      </div>

      <div className="mt-10">
        <label htmlFor="coordinates">{t('branch.15')}</label>
        <input
          type="text"
          id="coordinates"
          placeholder="Enter your coordinates"
          className="mb-4 w-full rounded-lg border-0 py-1.5 pl-4 shadow-md outline-none sm:max-w-full sm:text-sm sm:leading-6 lg:max-w-90"
          value={inputValue}
          onChange={handleCoordinateChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </>
  );
};

export default App;
