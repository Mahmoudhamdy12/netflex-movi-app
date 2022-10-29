import { useState } from 'react'
import { useGlobalContext } from '../../Context'
import { AiFillStar } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import './Movie.css'
import { Link } from 'react-router-dom';

const Movie = () => {
    const {movie_id,showMovie} = useGlobalContext()
    const [readMore,setReadMore] = useState(false)
    const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
      also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s
       with the release of Learjet sheets containing Lorem Ipsum passages,
     and more recently with desktop publishing software like Lauds PageMaker including versions of Lorem Ipsum.`
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
            const { direct_source,stream_type,stream_icon,rating,
                        title,added,num} = x;
            return (
                 <div className='container' key={added}>
                    <img style={{width:'350px'}} src={stream_icon} alt={title}/>
                    <div className='info'>
                        <p className='fs-5 fw-bold'>{title}</p>
                        <p>Num:{`  ${num}`}<span style={{float:'right'}}>{stream_type}</span></p>
                        <p>Rating:{`  ${rating}`}<AiFillStar/></p>
                        <p className='description'>{readMore ? description : `${description.substring(0, 200)}...`}
                        <span className='read' onClick={()=> setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</span></p>
                        <div className='download'>
                        <div className='download-btn btn btn-outline-danger'>
                          <div onClick={()=> handleDownload()} className={ showMovie ? 'please-sign none' : 'please-sign' }></div>
                          <a  href={direct_source} target='blank' >Download and Watch Now</a></div>
                        </div>
                        {para &&  <p> Please sign in to download...</p>}
                    </div>
                  </div>
            )
        })}
    </div>
  )
}

export default Movie