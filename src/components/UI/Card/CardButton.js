import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function CardButton(props) {
  return (
    <Stack
      as={Link}
      to={`/${props.path}/${props.id}`}
      spacing={4}
      direction="row"
      align="center"
      my={2}
    >
      {props.buttonIcon && (
        <Button my={2} colorScheme="teal" size="sm" variant="outline">
          {props.buttonText}
        </Button>
      )}

      {!props.buttonIcon && (
        <Button colorScheme="teal" size="xs" variant="outline">
          {props.buttonText}
        </Button>
      )}
    </Stack>
  );
}

export default CardButton;
