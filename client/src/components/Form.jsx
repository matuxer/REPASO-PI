import React from 'react'
import NavBar from './NavBar'
import axios from 'axios';

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
  return error;
}

function Form() {
  const initialState = {
    name: "",
    species: "",
    origin: "",
    image: ""
  }

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
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.image) {
      await axios.post('http://localhost:3001/character', {
        name: input.name,
        species: input.species,
        origin: input.origin
      })
    }else{
      await axios.post('http://localhost:3001/character', input)
    }
    setInput(initialState)
  }
  
  console.log(input);
  console.log(Object.keys(error));
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
        <input disabled={Object.keys(error).length>0} type='submit' value='ENVIAR'/>
      </form>
    </div>
  )
}

export default Form