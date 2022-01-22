import { Center, Image } from "@chakra-ui/react";
import React from "react";

function CharacterImage(props) {
  return (
    <Center mt={10}>
      <Image
        src={props.image}
        objectFit="cover"
        boxSize={["300px", "400px", "500px"]}
        zIndex="-1"
        borderRadius="3xl"
      />
    </Center>
  );
}

export default CharacterImage;
