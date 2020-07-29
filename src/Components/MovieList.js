import React, { useState ,useContext} from 'react';
import Movie from './Movie'
import { MovieContext } from './context/MovieContext';

export default function MovieList() {
const [movies, SetMovies] = useContext(MovieContext)  
  return (
    <div>
      {
      movies.map(movie => (
        <Movie
          key={movie.id}
          name={movie.name}
          price={movie.price}
          />
        ))
      }
    </div>
  );
}