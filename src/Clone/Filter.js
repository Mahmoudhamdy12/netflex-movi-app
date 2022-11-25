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
                const { _id,countries,genres,image,
                        rating,title} = item
                return (
                  <div key={_id} onClick={()=>setMovieId(_id)}>
                    <Link style={{color:'white'}} to="/movie">
                    <img src={image} alt={title} />
                    <div className='info  p-2'>
                      <p className='fs-5 fw-bold'>{title}<span style={{float:'right'}}>{countries[0].name}</span></p>
                      <p>Rating:{`  ${rating}`}<AiFillStar/><span style={{float:'right'}}>{genres[0].name}</span></p>
                    </div>
                  </Link>
                  </div>
                )
              })}
      </>
  )
}

export default Filter