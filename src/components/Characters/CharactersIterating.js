import React from "react";
import Card from "../UI/Card/Card";
import { BsPerson } from "react-icons/bs";

function CharactersIterating({ userInput, data }) {
  return (
    <>
      {data.characters.results
        .filter((character) => character.name.toLowerCase().includes(userInput))
        .map((character) => (
          <Card
            key={character.id}
            cardImage={character.image}
            buttonText="View Character"
            buttonIcon={<BsPerson />}
            badgeText={character.species}
            showcasedIn={character.episode.length}
            id={character.id}
            cardTitle={character.name}
            path="characters"
            wrap="wrap"
          />
        ))}
    </>
  );
}

export default CharactersIterating;
