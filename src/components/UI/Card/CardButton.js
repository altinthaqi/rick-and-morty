import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import { BsPerson } from "react-icons/bs";

function CardButton(props) {
  return (
    <Stack spacing={4} direction="row" align="center" my={2}>
      <Button
        leftIcon={props.buttonIcon}
        colorScheme="teal"
        size="xs"
        variant="outline"
      >
        {props.buttonText}
      </Button>
    </Stack>
  );
}

export default CardButton;
