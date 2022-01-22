import React from "react";
import { Container, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

function Loading() {
  return (
    <Container>
      <SkeletonCircle size="100" my={10} mt={20} />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Container>
  );
}

export default Loading;
