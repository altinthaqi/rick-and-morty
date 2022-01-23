import React from "react";
import { Container, SkeletonText } from "@chakra-ui/react";

function Loading() {
  return (
    <Container overflow="hidden">
      <SkeletonText my="7" noOfLines={10} spacing="4" />
      <SkeletonText my="7" noOfLines={10} spacing="4" />
      <SkeletonText my="7" noOfLines={10} spacing="4" />
      <SkeletonText my="7" noOfLines={10} spacing="4" />
    </Container>
  );
}

export default Loading;
