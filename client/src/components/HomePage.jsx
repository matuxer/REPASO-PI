import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions";
import { CharacterCard } from "./CharacterCard";
import NavBar from "./NavBar";

export const HomePage = () => {
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters())
  }, [dispatch]);
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Home</h1>
      <ul>
      {characters.map(character => 
        (<li key={character.id}>
          <CharacterCard name={character.name} image={character.image} />
        </li>))}
      </ul>
    </div>
  )
}