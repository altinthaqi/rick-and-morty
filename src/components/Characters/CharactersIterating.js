import React from "react";
import Loading from "../UI/Loading";
import Card from "../UI/Card/Card";
import { useCharacters } from "../../hooks/useCharacters";
import { BsPerson } from "react-icons/bs";

function CharactersIterating({ userInput }) {
  const { error, data, loading } = useCharacters();
  if (loading) return <Loading />;
  if (error) return "Error....";
  return (
    <>
      {data.characters.results
        .filter((character) => character.name.toLowerCase().includes(userInput))
        .map((character) => (
          <Card
            cardImage={character.image}
            buttonText="Character"
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
