import axios from 'axios';
const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_EPISODES = 'GET_EPISODES';

export function getCharacters(){
  return async function(dispatch){
  try{
    const characters = (await axios.get('http://localhost:3001/characters')).data;
    return dispatch({
      type: GET_CHARACTERS,
      payload: characters
    });
  }catch(e){
    console.log(e);
  }
  }
};

export function getEpisodes(){
  return async function(dispatch){
  try {
    const episodes = (await axios.get('http://localhost:3001/episodes')).data;
    return dispatch({
      type: GET_EPISODES,
      payload: episodes
    });
  } catch (e) {
    console.log(e)
  }
}
}


export {GET_CHARACTERS, GET_EPISODES};