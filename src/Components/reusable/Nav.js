import React, { useContext } from 'react';
import { MovieContext} from '../context/MovieContext'

export default function Nav() {
  const [movies, SetMovies] = useContext(MovieContext);
  // const onChange = () => {
  //   SetMovies = movies.reduce((a, b) =>  {return a + b.price}, 0)
  // }
  console.log(movies.reduce((a, b) =>  {return a + b.price}, 0))
  return (
    <div>
      <h2>movies total names are {movies.length}</h2>
      {/* <p onChange={onChange}>movie total price is { movies.reduce((a, b) =>  {return a + b.price}, 0)}</p> */}
    </div>  
  )
}
