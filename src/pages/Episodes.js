import React from "react";
import EpisodesComponent from "../components/UI/EpisodesComponent";
import { useEpisodes } from "../hooks/useEpisodes";
import Loading from "../components/UI/Loading";
import { Container } from "@chakra-ui/react";

function Episodes() {
  const { loading, error, data } = useEpisodes();
  if (loading) return <Loading />;

  if (error) return "Error...";
  console.log(data);
  return (
    <Container maxW={"3xl"}>
      <EpisodesComponent episodes={data.episodes.results} />
    </Container>
  );
}

export default Episodes;
