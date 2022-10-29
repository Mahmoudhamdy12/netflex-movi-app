import './App.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import { Routes, Route } from "react-router-dom";
import Contact from './Component/Contact/Contact';
import Movies from './Component/Movies/Movies';
import Movie from './Component/Movie/Movie';
import Log from './Component/Log/Log';
import Alert from './Component/Alert/Alert';
import { useState } from 'react';

function App() {
  const [alert,setAlert] = useState({show:false,type:'success' ,msg:'hello'})
    const showAlert = (show=false, type= '', msg = '') => setAlert({show,type ,msg})
  return (
    <div className="App">
      {alert.show && <Alert {...alert} removeAlert={showAlert} /> }
      <Nav/>
      <Log showAlert={showAlert}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
