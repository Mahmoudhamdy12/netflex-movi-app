import { useGlobalContext } from '../Context'
import { AiFillStar } from 'react-icons/ai';
import {Link } from "react-router-dom";
const Filter = () => {
    const {filter,setMovieId} = useGlobalContext()
    if(filter.length === 0){
        return <div className='sorry'>Sorry, This Movie Not Found</div>
    }
  return (
    <>
        {filter.map((item)=> {
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

export default Filter