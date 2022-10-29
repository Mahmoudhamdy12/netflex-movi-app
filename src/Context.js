import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [personalName,setPersonalName] = useState('')
  const [loginShow,setLoginShow] = useState(false)
  const [filter, setFilter] = useState([])
  const [movie, setMovie] = useState([])
  const [movieId, setMovieId] = useState('')
  const [show, setShow] = useState('')
  const [loading,setLoading] = useState(true)
  const [showMovie,setShowMovie] = useState(false)

  const fetchMovies = useCallback(  () => {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8fbc1f7f86msh12fd7d0fad08d74p1d0b51jsnd7bab9b9976a',
		'X-RapidAPI-Host': 'razorcloud-xtream1.p.rapidapi.com'
	}
};
fetch('https://razorcloud-xtream1.p.rapidapi.com/player_api.php?username=asdf&password=asdf&action=get_vod_streams', options)
	.then(response => response.json())
	.then(response => {
    setMovie(response.slice(1000,1100))
    setLoading(false)
  })
      .catch(err => console.error(err));
    },[])
    
 const searchItems = (e)=> {
    setShow(e)
    const newItems = movie.filter((item)=> item.title.toLowerCase().includes(e.toLowerCase()))
    setFilter(newItems)
  }
    
  const movie_id = movie.filter((x)=> x.added === movieId)
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])
  return (
    <AppContext.Provider
      value={{ 
        movie,
        searchItems,
        filter,
        setMovieId,
        movie_id,
        show,
        loading,
        personalName,
        setPersonalName,
        loginShow,
        setLoginShow,
        setShowMovie,
        showMovie
       }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
