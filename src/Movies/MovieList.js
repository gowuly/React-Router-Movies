import React from 'react';
import {useNavigate, Link} from 'react-router-dom'   //bring in the useNavigate hook,

export default function MovieList(props) {

  const navigate = useNavigate();    //useNavigate invoked 
  const onMovieClick = id => ()=>{   //create a click handler. And this needs to take an ID and return a function, which takes an event handler, which performs the navigation
    navigate(`movies/${id}`)         // navigate to movies slash whatever id, so we need to use a template literal. movies slash and interpolate the id right there 
  }                                 // now we need to send send the handler down into MovieDetails so that it can attach it to the div, the movie card down at the jsx.
  return (
    <div className="movie-list">
      {props.movies.map(movie => (

        <MovieDetails 
        link = {<Link to={`movies/${movie.id}`}>Details</Link>}//we pass the handler along and we'ere going straight to invoke it right there passing movie.id
        onMovieClick={onMovieClick(movie.id)} // returns that event handler which MovieDetails actually needs and which can destructure from props
        key={movie.id} 
        movie={movie}                 
        />  
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const {onMovieClick, link}=props // destructure from props and wire it to the div using a click handler
  

  return (
    <div className="movie-card" onClick={onMovieClick}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {link}
    </div>
  );
}
