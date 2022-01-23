import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import CardInfo from "../components/UI/Card/CardInfo";
import Loading from "../components/UI/Loading";
import EpisodesComponent from "../components/UI/EpisodesComponent";
import CharacterImage from "../components/Characters/CharacterImage";
import HeadingComponent from "../components/UI/HeadingComponent";

function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (loading) return <Loading />;
  if (error) return "Error....";
  console.log(data);
  return (
    <Box display="flex" flexDirection="column">
      <CharacterImage image={data.character.image} />
      <Container maxW="3xl">
        <HeadingComponent title={data.character.name} />
        <CardInfo
          location={data.character.location.name}
          badgeText={data.character.species}
          id={id}
          locationId={data.character.location.id}
        />

        <EpisodesComponent episodes={data.character.episode} />
      </Container>
    </Box>
  );
}

export default Character;
