import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import CharactersIterating from "../components/Characters/CharactersIterating";
import SearchInput from "../components/UI/SearchInput";
import { MdPersonSearch } from "react-icons/md";
import Loading from "../components/UI/Loading";
import { useCharacters } from "../hooks/useCharacters";

function Characters() {
  const [userInput, setUserInput] = useState("");

  const { error, data, loading } = useCharacters();
  if (loading) return <Loading />;
  if (error) return "Error....";

  const userInputHandler = (query) => {
    setUserInput(query.toLowerCase());
  };

  return (
    <Box width="100%" bg="gray.50">
      <Container maxW="container.xl" centerContent>
        <SearchInput
          icon={<MdPersonSearch />}
          placeholder="Filter Characters..."
          onUserType={userInputHandler}
        />
        <SimpleGrid
          columns={[2, 2, 3, 4]}
          bg="gray.50"
          rounded="lg"
          spacingX={[2, 10]}
        >
          <CharactersIterating data={data} userInput={userInput} />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Characters;
