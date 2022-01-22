import { Image } from "@chakra-ui/react";
import React from "react";

function CardImage(props) {
  return (
    <>
      {props.cardImage && (
        <Image
          src={props.cardImage}
          boxSize="200px"
          objectFit="cover"
          borderRadius="xl"
          mt={2}
        />
      )}
    </>
  );
}

export default CardImage;
