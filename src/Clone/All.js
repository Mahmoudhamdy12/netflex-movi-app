import { useGlobalContext } from '../Context'
import { AiFillStar } from 'react-icons/ai';
import {Link } from "react-router-dom";
import Loading from '../Loading';
const All = () => {
    const {movie,setMovieId,loading} = useGlobalContext()
    if(loading){
        return <Loading/>
    }
    // if(loading && <Loading/> )
  return (
    <>
        {movie.map((item)=> {
                const { stream_type,stream_icon,rating,
                        title,added} = item
                return (
                  <div key={added} onClick={()=>setMovieId(added)}>
                    <Link style={{color:'white'}} to="/movie">
                    <img src={stream_icon} alt={title} />
                    <div className='info  p-2'>
                      <p className='fs-5 fw-bold'>{title}</p>
                      <p>Rating:{`  ${rating}`}<AiFillStar/><span style={{float:'right'}}>{stream_type}</span></p>
                    </div>
                  </Link>
                  </div>
                )
              })}
    </>
  )
}

export default All