import { Badge, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";

function EpisodeIntro(props) {
  return (
    <VStack py={10} height="50vh">
      <Spacer />
      <Badge
        variant="subtle"
        colorScheme="purple"
        fontSize="1em"
        px={4}
        py={2}
        borderRadius="md"
      >
        EPISODE
      </Badge>
      <Spacer />
      <Text
        fontSize={["5xl", "6xl"]}
        fontWeight="extrabold"
        bgGradient="linear(to-l, #2e839c, #1a5b5e)"
        bgClip="text"
        textAlign="center"
        mx={5}
      >
        EP: {props.name}
      </Text>
      <Spacer />
    </VStack>
  );
}

export default EpisodeIntro;
