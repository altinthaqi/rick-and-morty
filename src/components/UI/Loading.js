import React from "react";
import {
  Container,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

function Loading() {
  return (
    <Container maxW="sm">
      <SkeletonCircle size="10" my={10} mt={20} />

      <SkeletonText mt="4" noOfLines={4} spacing="4" />
      <Skeleton height="20px" my={10} />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
      <Skeleton height="20px" my={10} />

      <SkeletonCircle size="10" my={10} mt={20} />

      <SkeletonText mt="4" noOfLines={4} spacing="4" />
      <Skeleton height="20px" my={10} />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
      <Skeleton height="20px" my={10} />

      <SkeletonCircle size="10" my={10} mt={20} />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
      <Skeleton height="20px" my={10} />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
      <Skeleton height="20px" my={10} />
    </Container>
  );
}

export default Loading;
