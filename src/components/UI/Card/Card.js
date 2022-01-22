import React from "react";
import { Box } from "@chakra-ui/react";

import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardTitle from "./CardTitle";
import CardButton from "./CardButton";

function Card(props) {
  return (
    <Box
      key={props.id}
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
      <CardImage cardImage={props.cardImage} />
      <CardInfo
        id={props.id}
        badgeText={props.badgeText}
        showcasedIn={props.showcasedIn}
      />
      <CardTitle cardTitle={props.cardTitle} />
      <CardButton buttonText={props.buttonText} buttonIcon={props.buttonIcon} />
    </Box>
  );
}

export default Card;
