import { Badge, Box, Spacer } from "@chakra-ui/react";
import React from "react";

function CardInfo(props) {
  return (
    <Box
      display="flex"
      my="3"
      flexWrap={props.wrap}
      justifyContent="center"
      alignItems="center"
    >
      <Badge
        borderRadius="md"
        px="2"
        colorScheme={props.badgeColor ? props.badgeColor : "teal"}
        my={1}
      >
        {props.badgeText}
      </Badge>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >
        {props.location
          ? `${props.location} ${
              props.episode ? ` ----- Ep: ${props.episode}` : ""
            }`
          : `${props.showcasedIn} episodes ⋅ id #${props.id}`}
      </Box>
    </Box>
  );
}

export default CardInfo;
