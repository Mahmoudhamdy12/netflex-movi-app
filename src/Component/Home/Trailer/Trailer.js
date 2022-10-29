import './Trailer.css'
import { AiOutlineCloseSquare } from 'react-icons/ai';
// import { useState } from 'react';

const Trailer = ({setTrailer,trailer,trailerId}) => {
  // const [trailerFetch,setTrailerFetch] = useState([])
//     const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '8fbc1f7f86msh12fd7d0fad08d74p1d0b51jsnd7bab9b9976a',
//       'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
// 	}
//   };
// fetch(`https://movies-app1.p.rapidapi.com/api/trailers/${trailerId}`, options)
// 	.then(response => response.json())
// 	.then(response => setTrailer(response))
// 	.catch(err => console.error(err));

  return (
    <div className='trailer'>
      <AiOutlineCloseSquare className='close' onClick={()=> setTrailer(!trailer)}/>
        {/* {trailerFetch.map((item)=>{
          const {title,url,image,seconds,timestamp,ago} = item;
          return (
            <div className='center-trailer'>
              <p>{title}</p>
            </div>
          )
        })} */}
    </div>
  )
}

export default Trailer