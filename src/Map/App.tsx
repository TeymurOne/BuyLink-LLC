import { useState } from 'react';
import Map from './Map';

const App = (props: any) => {
  const { lat, lng } = props;

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
      <div className="w-full h-[500px] rounded-md shadow-2xl">
        <Map cordinat={cordinat} setCoordinat={setCoordinat} />
      </div>

      <div className="mt-10">
        <label htmlFor="coordinates">Coordinates (Lat, Lng)</label>
        <input
          type="text"
          id="coordinates"
          placeholder="nnasasaaaaaaaaa"
          className="lg:max-w-90 outline-none sm:max-w-full w-full pl-4 mb-4 rounded-lg border-0 py-1.5 shadow-md sm:text-sm sm:leading-6"
          value={`${cordinat.lat}, ${cordinat.lng}`}
          onChange={handleCoordinateChange}
        />
      </div>
    </>
  );
};

export default App;
