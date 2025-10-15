import './App.css';
import api from './api/axiosConfig'; // <-- Import the configured instance
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState([]); // Initialize as array
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      // Use the configured 'api' instance. Axios appends /api/v1/movies 
      // to the baseURL from axiosConfig.js.
      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err) {
      console.error("API Fetch Error (CORS or network issue):", err); // Use console.error for visibility
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  // Effect runs only once on component mount to fetch the data
  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies}/>}></Route>
           <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
