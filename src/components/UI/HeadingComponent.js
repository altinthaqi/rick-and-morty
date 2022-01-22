import { Heading } from "@chakra-ui/react";
import React from "react";

function HeadingComponent(props) {
  return (
    <Heading textAlign="center" as="h1" size="xl" color="gray.600" my={5}>
      {props.title}
    </Heading>
  );
}

export default HeadingComponent;
