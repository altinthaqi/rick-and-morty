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
      my={10}
    >
      <CardImage cardImage={props.cardImage} />
      <CardInfo
        id={props.id}
        badgeText={props.badgeText}
        showcasedIn={props.showcasedIn}
        wrap={props.wrap}
      />
      <CardTitle cardTitle={props.cardTitle} />
      <CardButton
        id={props.id}
        path={props.path}
        buttonText={props.buttonText}
        buttonIcon={props.buttonIcon}
      />
    </Box>
  );
}

export default Card;
