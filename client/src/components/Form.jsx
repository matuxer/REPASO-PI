import React from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useSelector } from 'react-redux';
import styles from './Form.module.css';

const validate = (input) => {
  let error = {};
  if (input.name.length === 0) {
    error.name = "Se requiere un nombre"
  };
  if (input.species.length === 0) {
    error.species = "Se requiere una especie"
  };
  if (input.origin.length === 0) {
    error.origin = "Se requiere un origen"
  };
  if (input.episodes.length === 0) {
    error.episodes = "Se requiere minimo 1 episodio"
  }
  return error;
}

function Form() {
  const initialState = {
    name: "",
    species: "",
    origin: "",
    image: "",
    episodes: []
  }

  const episodes = (useSelector(state => state.episodes)).sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0;
  });;
  let [input, setInput] = React.useState(initialState);
  let [error, setError] = React.useState({});

  let handleOnChange = (e) => {
    setInput(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    let error = validate({...input, [e.target.name]: e.target.value});
    setError(error);
    return error;
  }
  
  let handleCheckBox = (e) => {
    let epList = [...input.episodes]
    if(e.target.checked){
      epList = [...input.episodes, e.target.value]
    }else {
      epList.splice(input.episodes.indexOf(e.target.value), 1);
    }
    setInput(prevState => ({
      ...prevState,
      episodes: epList
    }));
    let error = validate({...input, [e.target.name]: e.target.value});
    setError(error);
    return error;
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.image) {
      await axios.post('http://localhost:3001/character', {
        name: input.name,
        species: input.species,
        origin: input.origin,
        episodes: input.episodes 
      })
    }else{
      await axios.post('http://localhost:3001/character', input)
    }
    setInput(initialState)
  }
  console.log(input)
  console.log(episodes);
  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input 
          type="text"
          value={input.name} 
          name='name'
          onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="origin">Origen:</label>
          <input 
          type="text" 
          name='origin'
          value={input.origin}
          onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="species">Especie:</label>
          <input 
          type="text"
          value={input.species}
          onChange={handleOnChange}
          name='species'
          />
        </div>
        <div>
          <label htmlFor="image">Imagen:</label>
          <input 
          type="text"
          value={input.image}
          onChange={handleOnChange}
          name='image'
          />
        </div>
        <div>
          <ol>
          {episodes.map((ep) => (
            <li key={ep.id}>
              <label htmlFor='episodes'>
                <input value={ep.name} name='episodes' type='checkbox' onChange={handleCheckBox} />{ep.name}
              </label>
            </li>
          ))}
          </ol>
        </div>
        <input disabled={Object.keys(error).length>0} type='submit' value='ENVIAR'/>
      </form>
    </div>
  )
}

export default Form