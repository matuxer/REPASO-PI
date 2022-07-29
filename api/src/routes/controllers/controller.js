const axios = require('axios');
const { Character, Episode } = require('../../db');

//https://rickandmortyapi.com/api/character


const getApiCharacters = async function () {
  const apiCharacters = (await axios.get('https://rickandmortyapi.com/api/character')).data.results;
  const result = await apiCharacters.map((e) => {
    return {
    id: e.id,
    name: e.name,
    species: e.species,
    origin: e.origin.name,
    image: e.image,
    created: e.created,
    }
  });
  return result;
};

const getDbCharacters = async function () {
  const dbCharacters = await Character.findAll();
  const result = await dbCharacters.map(e => {
    return {
      id: e.id,
      name: e.name,
      species: e.species,
      origin: e.origin,
      image: e.image,
      created: e.created
    }
  })
  return result;
}

const getAllCharacters = async function () {
  const apiCharacters = await getApiCharacters();
  const dbCharacters = await getDbCharacters();
  const result = [  ...dbCharacters, ...apiCharacters ];
  return result;
}

const getAllEpisodes = async function () {
  const apiEpisodes = (await axios.get('https://rickandmortyapi.com/api/episode')).data.results;
  await apiEpisodes.map(e => {
    Episode.findOrCreate({
      where: {
        name: e.name,
      }
    })
  });
  const result = await Episode.findAll();
  return result;
}

module.exports = {
  getAllCharacters,
  getAllEpisodes
};