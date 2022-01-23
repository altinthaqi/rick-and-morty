import {
  Box,
  Container,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CardButton from "./Card/CardButton";
import CardInfo from "./Card/CardInfo";

function EpisodesComponent(props) {
  return (
    <Container my={20} maxW="full">
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        <Text fontWeight="bold" color="gray.500">
          Is also seen on {props.episodes.length} episodes:
        </Text>
        {props.episodes &&
          props.episodes.map((episode) => (
            <Box
              key={episode.id}
              alignItems="flex-start"
              display="flex"
              justifyContent="flex-start"
            >
              <CardInfo
                badgeText={episode.__typename}
                location={episode.name}
                episode={episode.episode}
                button={"button"}
                wrap={"no-wrap"}
                badgeColor="purple"
              />
              <Spacer />
              <CardButton
                path="episodes"
                id={episode.id}
                buttonText="View Episode"
              />
            </Box>
          ))}
      </VStack>
    </Container>
  );
}

export default EpisodesComponent;
