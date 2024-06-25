import { useState } from 'react';
import Map from './Map';
import { useTranslation } from 'react-i18next';

const App = (props: any) => {
  const { lat, lng } = props;
  const { t } = useTranslation();

  const [cordinat, setCoordinat] = useState<any>({ lat: lat, lng: lng });

  const handleCoordinateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const [newLat, newLng] = value.split(',');

    setCoordinat({
      lat: newLat || ' ',
      lng: newLng || ' ',
    });
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
          placeholder="nnasasaaaaaaaaa"
          className="mb-4 w-full rounded-lg border-0 py-1.5 pl-4 shadow-md outline-none sm:max-w-full sm:text-sm sm:leading-6 lg:max-w-90"
          value={`${cordinat.lat}, ${cordinat.lng}`}
          onChange={handleCoordinateChange}
        />
      </div>
    </>
  );
};

export default App;
