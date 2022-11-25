// import { useState } from 'react'
import { useGlobalContext } from '../../Context'
import { AiFillStar } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import './Movie.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Movie = () => {
    const {movie_id,showMovie} = useGlobalContext()
    const [readMore,setReadMore] = useState(false)
    const [para,setPara] = useState(false)
    const handleDownload = ()=> {
      if(showMovie === false){
        setPara(true)
    }
  }
  return (
    <div className='movie-center'>
        <div className='container' ><Link className="nav-link " to="/movies"><BsFillArrowLeftCircleFill/>Back</Link></div>
        {movie_id.map((x)=> {
            const { _id,description,embedUrls,countries,genres,image,
                     rating,title} = x;
            return (
                 <div className='container' key={_id}>
                    <img style={{width:'350px'}} src={image} alt={title}/>
                    <div className='info'>
                        <p className='fs-5 fw-bold'>{title}</p>
                        <p>{`${genres[0].name}`}<span style={{float:'right'}}>{countries[0].name}</span></p>
                        <p>Rating:{`  ${rating}`}<AiFillStar/></p>
                        <p className='description'>{readMore ? description : `${description.substring(0, 200)}...`}
                        <span className='read' onClick={()=> setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</span></p>
                        <div className='download'>
                        <div className='download-btn btn btn-outline-danger'>
                          <div onClick={()=> handleDownload()} className={ showMovie ? 'please-sign none' : 'please-sign' }></div>
                          <a  href={embedUrls[0].url} target='blank' >Download and Watch Now</a></div>
                        </div>
                        {para &&  <p> Please sign in to download...</p>}
                        <p>
                        </p>
                    </div>
                  </div>
            )
        })}
    </div>
  )
}

export default Movie