import { useState } from 'react';
import Map from './Map';

const App = (props: any) => {
  const { lat, lng } = props;
  
  console.log(props, 'propa app');
  
  const [cordinat, setCoordinat] = useState<any>({
    lat: lat === undefined ? 40.350049801807025 : lat,
    lng: lng === undefined ? 49.8104595974197 : lng,
  });

  const handleCoordinateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const [newLat, newLng] = value.split(',');

    setCoordinat({
      lat: newLat || '',
      lng: newLng || '',
    });
  };

  return (
    <div>
      <div className="w-full h-[500px] rounded-md shadow-2xl">
        <Map cordinat={cordinat} setCoordinat={setCoordinat} />
      </div>
      <form className='mt-10'>
        <label htmlFor="coordinates">Coordinates (Lat, Lng)</label>
        <input
          type="text"
          id="coordinates"
          className="lg:max-w-[349px] outline-none sm:max-w-full w-full pl-4 mb-4 rounded-lg border-0 py-1.5 shadow-md sm:text-sm sm:leading-6"
          value={`${cordinat.lat},${cordinat.lng}`}
          onChange={handleCoordinateChange}
        />
      </form>
    </div>
  );
};

export default App;
