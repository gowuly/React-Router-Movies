import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import {Routes, Route} from 'react-router-dom'; // import routes,route from react-router-component
import Movieslist from './Movies/MovieList'; //import movielist
import Movie from './Movies/Movie'; // import Movie

export default function App () { //this an App with some slices of state. Although we just care about the second slice of state, because the first slice of state is stretch.
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovies(response.data);
          // Study this response with a breakpoint or log statements //could place a debugger and study the response data in the dev tools.
          // and set the response data as the 'movies' slice of state
          
        })
        
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []); // there's a effect that runs after the first render, which makes our request response supposed to be to be studied with a breakpoint.And set the response data as movies slices of state

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Routes>
        <Route path='/' element={<Movieslist movies={movies}/>}/> {/* create a Routes element and within it Route that takes a path forward slash that renders a element and the the MovieList component wrap in jsx, and we inject the component state, movies. the movies are received after making a the request. On success they need to shoved to component state, and that component state is the movies injected in the last curly braces on this line*/}
        <Route path='movies/:id' element={<Movie/>}/> {/*no need to lead with a forward slash id... /:id. but, movie/:id, as for the element Movie , singular */}
      </Routes>
    </div>
  );
}
