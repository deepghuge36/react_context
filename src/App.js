import React from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import Nav from './Components/reusable/Nav';
import { MovieProvider } from './Components/context/MovieContext';
import AddMovie from './Components/AddMovie';
function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <AddMovie/>
      <MovieList/>
      </div>
    </MovieProvider>
   
  );
}

export default App;
