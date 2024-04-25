import { useState } from 'react';
import { useQuiz } from '../context/UseContext';

const SearchBox = ({ setposition }: any) => {
  const API_MAP_BASE_URL = 'https://nominatim.openstreetmap.org/search?';
  const [search, setSearch] = useState('');
  const [listplace, setlistplace] = useState([]);
  const { dispatch } = useQuiz();

  function handleText(event) {
    setSearch(event.target.value);

  }

  function handleCordinat(item) {
    setposition(item);
    if (item) {
      dispatch({ type: 'dataReceived', payload: item });
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const params = {
      q: `Azerbaijan Bakı ${search} `,
      format: 'json',
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const querystring = new URLSearchParams(params).toString();
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(`${API_MAP_BASE_URL}${querystring}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setlistplace(JSON.parse(result));
        console.log(JSON.parse(result));
      });
  }

  return (
    <form className='' onSubmit={handleSubmit}>
      <input
        type="text"
        className="lg:max-w-[349px] sm:max-w-full w-full  pl-4 mb-4 rounded-lg border-0 py-1.5  shadow-md   sm:text-sm sm:leading-6"
        value={search}
        onChange={handleText}
      />
     

      <ul>
        {listplace?.map((item: any, index: number) => {
          return (
            <li
              onClick={() => handleCordinat(item)}
              key={item?.osm_id}
              className="flex hover:cursor-pointer"
            >
              <img
                src="/placeholder.png"
                alt=""
                style={{ width: '38px', height: '38px' }}
              />
              <p>{item?.display_name}</p>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default SearchBox;
