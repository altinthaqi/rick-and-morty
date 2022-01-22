import React from "react";
import {
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

function SearchInput(props) {
  const handleInput = (e) => {
    props.onUserType(e.target.value);
  };

  return (
    <Container maxW="sm" mt={10}>
      <InputGroup>
        <InputLeftElement
          color="gray.500"
          pointerEvents="none"
          children={props.icon}
        />
        <Input
          onChange={handleInput}
          placeholder={props.placeholder}
          size="md"
        />
      </InputGroup>
    </Container>
  );
}

export default SearchInput;
