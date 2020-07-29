import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider= (props) =>{
  const [movies, SetMovies] = useState([
    {
      id: 1,
      name: "movie 1",
      price: 300,
    }, {
      id: 2,
      name: "movie 2",
      price: 200,
    }, {
      id: 3,
      name: "movie 3",
      price: 300,
    }

  ]);
  return (
    <div>
      <MovieContext.Provider value={[movies, SetMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  )
}
