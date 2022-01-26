import { Image } from "@chakra-ui/react";
import React from "react";

function CardImage(props) {
  return (
    <>
      {props.cardImage && (
        <Image
          src={props.cardImage}
          width="100%"
          objectFit="cover"
          borderTopRadius="xl"
          boxShadow="md"
        />
      )}
    </>
  );
}

export default CardImage;
