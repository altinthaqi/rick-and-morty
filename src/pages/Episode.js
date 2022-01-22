import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/UI/Loading";
import { useEpisode } from "../hooks/useEpisode";
import { Box, Container, Divider, Text } from "@chakra-ui/react";
import EpisodeIntro from "../components/Episodes/EpisodeIntro";
import EpisodeCast from "../components/Episodes/EpisodeCast";

function Episode() {
  const { id } = useParams();
  const { loading, error, data } = useEpisode(id);
  if (loading) return <Loading />;
  if (error) return "Error....";
  return (
    <Box bg="gray.50">
      <Container maxW="5xl" alignContent="center">
        <EpisodeIntro name={data.episode.name} />

        <Divider />

        <Text my={5} color="gray.400" fontWeight="bold" textAlign="center">
          {data.episode.episode}
        </Text>

        <Divider />

        <Text fontWeight="bold" fontSize="4xl" mt={10} color="gray.500">
          Cast:
        </Text>

        <EpisodeCast episodeCharacters={data.episode.characters} />
      </Container>
    </Box>
  );
}

export default Episode;
