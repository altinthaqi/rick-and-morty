import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import CharactersIterating from "../components/Characters/CharactersIterating";
import SearchInput from "../components/UI/SearchInput";
import { MdPersonSearch } from "react-icons/md";

function Characters() {
  const [userInput, setUserInput] = useState("");

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
          spacing={10}
        >
          <CharactersIterating userInput={userInput} />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Characters;
