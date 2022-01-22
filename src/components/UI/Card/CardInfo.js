import { Badge, Box } from "@chakra-ui/react";
import React from "react";

function CardInfo(props) {
  return (
    <Box
      display="flex"
      my="3"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <Badge borderRadius="md" px="2" colorScheme="teal" my={1}>
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
        {props.showcasedIn} episodes &bull; id #{props.id}
      </Box>
    </Box>
  );
}

export default CardInfo;
