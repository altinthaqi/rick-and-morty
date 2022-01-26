import { Box, Container, Heading, Wrap } from "@chakra-ui/react";

import { reviewCards } from "../../data/aboutData";
import Review from "./UI/Review";

const Reviews = () => {
  return (
    <Container
      maxW="container.full"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      my={10}
    >
      <Heading
        color="blackAlpha.800"
        as="h1"
        fontSize={{ base: "36px", md: "56px", lg: "61px" }}
        textAlign="center"
        fontWeight="extrabold"
        my={10}
      >
        Loved by{" "}
        <Box as="span" color="#319795">
          {" "}
          people{" "}
        </Box>
        like you
      </Heading>

      <Container maxW="container.xl">
        <Wrap
          height="100%"
          width="98%"
          spacing={10}
          justify="center"
          align="center"
        >
          {reviewCards.map((card) => (
            <Review card={card} />
          ))}
        </Wrap>
      </Container>
    </Container>
  );
};

export default Reviews;
