import './Movies.css'
import { useGlobalContext } from '../../Context'
import All from '../../Clone/All'
import Filter from '../../Clone/Filter'
const Movies = () => {
    const { searchItems,show} = useGlobalContext()
    return (
    <div className='movies'>
        <div className='container'>
            <div className='text'>
                <p className='fs-1 fw-bold'>Movies</p>
                <p className='fs-5'>Movies move us like nothing else can, whether they,
                re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
            </div>
            <div className="row justify-content-center ">
              <input  className="form-control col-4" onChange={(e)=>searchItems(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
            </div>
            <div className='movie-list'>
              { show !== ''  ? <Filter/> : <All/> }
            </div>
        </div>
    </div>
  )
}

export default Movies