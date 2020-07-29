import React,{ useState,useContext} from 'react'
import { MovieContext} from './context/MovieContext'
const AddMovie=()=> {
  const [name, SetName] = useState('');
  const [price, SetPrice] = useState('');
  const [movies, SetMovies] = useContext(MovieContext);
  
  const updateName = (e) => {
  SetName(e.target.value)
 }
  const updatePrice = e => {
  SetPrice(e.target.value)
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    SetMovies(preMovies => [...preMovies,{name:name,price:price}])
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={updateName}/>
        <input type="number" name="price" value={price} onChange={updatePrice} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default AddMovie;