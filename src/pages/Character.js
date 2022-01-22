import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import CardInfo from "../components/UI/Card/CardInfo";
import CardButton from "../components/UI/Card/CardButton";
import Loading from "../components/UI/Loading";

function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (loading) return <Loading />;
  if (error) return "Error....";
  console.log(data);
  return (
    <Box display="flex" flexDirection="column">
      <Container maxW="3xl">
        <Center mt={10}>
          <Image
            src={data.character.image}
            objectFit="cover"
            boxSize={["300px", "400px", "500px"]}
            zIndex="-1"
            borderRadius="3xl"
          />{" "}
        </Center>
        <Heading textAlign="center" as="h1" size="xl" color="gray.600" my={5}>
          {data.character.name}
        </Heading>
        <CardInfo
          location={data.character.location.name}
          badgeText={data.character.species}
          id={id}
        />

        <Container my={20}>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <Text fontWeight="bold" color="gray.500">
              Episodes:
            </Text>
            {data.character.episode.map((episode) => (
              <Box
                alignItems="flex-start"
                display="flex"
                justifyContent="flex-start"
              >
                <CardInfo
                  badgeText={episode.__typename}
                  location={episode.name}
                  episode={episode.episode}
                  button={"button"}
                  wrap={"no-wrap"}
                  badgeColor="purple"
                />
                <Spacer />
                <CardButton
                  path="episodes"
                  id={episode.id}
                  buttonText="View Episode..."
                />
              </Box>
            ))}
          </VStack>
        </Container>
      </Container>
    </Box>
  );
}

export default Character;
