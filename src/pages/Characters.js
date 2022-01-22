import {
  Box,
  Container,
  Image,
  Text,
  SimpleGrid,
  Badge,
  Button,
  Stack,
} from "@chakra-ui/react";

import { BsPerson } from "react-icons/bs";
import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import Loading from "../components/UI/Loading";

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
            <Box
              key={character.id}
              w="100%"
              justifyContent="center"
              alignItems="center"
              display="flex"
              flexDirection="column"
              boxShadow="sm"
              bg="white"
              p={2}
              rounded="xl"
            >
              <Image
                src={character.image}
                alt={character.name}
                boxSize="200px"
                objectFit="cover"
                borderRadius="xl"
                mt={2}
              />
              <Box
                display="flex"
                my="3"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
              >
                <Badge borderRadius="md" px="2" colorScheme="teal" my={1}>
                  {character.species}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {character.episode.length} episodes &bull; id #{character.id}
                </Box>
              </Box>
              <Text
                fontSize="xl"
                textAlign="center"
                color="gray.600"
                fontWeight="medium"
              >
                {character.name}
              </Text>

              <Stack spacing={4} direction="row" align="center" my={2}>
                <Button
                  leftIcon={<BsPerson />}
                  colorScheme="teal"
                  size="xs"
                  variant="outline"
                >
                  View Character
                </Button>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Characters;
