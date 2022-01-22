import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { BsPerson } from "react-icons/bs";
import Card from "../UI/Card/Card";

function EpisodeCast(props) {
  return (
    <SimpleGrid columns={[2, 2, 3, 4]} bg="gray.50" rounded="lg" spacingX={10}>
      {props.episodeCharacters.map((character) => (
        <Card
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
    </SimpleGrid>
  );
}

export default EpisodeCast;
