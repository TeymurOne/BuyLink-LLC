import { useState } from 'react';
import Map from './Map';
import SearchBox from './SearchBox';

const App = (props: any) => {
  const { lat, lng } = props; 

  const [selectposition, setposition] = useState(null);

  return (
    <div>
      
      <div className="w-full">
        <SearchBox selectposition={selectposition} setposition={setposition}  />
      </div>
      <div className="w-full h-[60vh]  rounded-md shadow-2xl">
        <Map lat={lat} lng={lng}  selectposition={selectposition} />
      </div>

    </div>
  );
};

export default App;
