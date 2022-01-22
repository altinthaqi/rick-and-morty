import { Box, Container, SimpleGrid } from "@chakra-ui/react";

import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import Loading from "../components/UI/Loading";
import Card from "../components/UI/Card/Card";

import { BsPerson } from "react-icons/bs";

function Characters() {
  const { error, data, loading } = useCharacters();
  if (loading) return <Loading />;
  if (error) return "Error....";

  return (
    <Box width="100%" bg="gray.50">
      <Container maxW="container.xl" centerContent>
        <SimpleGrid
          columns={[2, 2, 3, 4]}
          bg="gray.50"
          rounded="lg"
          spacing={10}
        >
          {data.characters.results.map((character) => (
            <Card
              // cardItem={character}
              cardImage={character.image}
              buttonText="Character"
              buttonIcon={<BsPerson />}
              badgeText={character.species}
              showcasedIn={character.episode.length}
              id={character.id}
              cardTitle={character.name}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Characters;
