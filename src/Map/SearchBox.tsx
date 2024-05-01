// import { useState } from 'react';

// const SearchBox = ({ setposition, selectposition }: any) => {
//   const [cordinat, setCoordinat] = useState<any>({
//     lat:"",
//     lng:" "
//   });


//   function handleSubmit(e: any) {
//     e.preventDefault();
//     if (cordinat) {
//       setposition(cordinat);

//     }
//   }

//   return (
//     <form  onSubmit={handleSubmit}>
//       <label htmlFor="lat">Lat</label>
//       <input
//         type="text"
//         className="lg:max-w-[349px] sm:max-w-full w-full  pl-4 mb-4 rounded-lg border-0 py-1.5  shadow-md   sm:text-sm sm:leading-6"
//         value={cordinat.lat}
//         onChange={(e) => setCoordinat({lat:e.target.value})}
//       />
//       <label htmlFor="Lng">Lng</label>
//       <input
//         type="text"
//         className="lg:max-w-[349px] sm:max-w-full w-full  pl-4 mb-4 rounded-lg border-0 py-1.5  shadow-md   sm:text-sm sm:leading-6"
//         value={cordinat.lng}
//         onChange={(e) => setCoordinat({lng:e.target.value})}
//       />
//     </form>
//   );
// };

// export default SearchBox;
