import { Container, Heading, Text, Wrap } from "@chakra-ui/react";
import { experienceCards } from "../../data/aboutData";
import ExperienceCard from "./UI/ExperienceCard";

const TheScience = () => {
  return (
    <Container maxW={"container.full"} py={20} minH="90vh" bg="gray.50">
      <Container maxW={"container.lg"} mb={20}>
        <Heading
          mt={0}
          textAlign="center"
          fontSize={{ base: "31px", md: "40px", lg: "56px" }}
          fontWeight="bold"
          color="blackAlpha.800"
        >
          A sitcom you'd expect from Justin Roiland
        </Heading>

        <Text
          color="gray.600"
          fontSize={["16px", "18px"]}
          fontWeight="normal"
          my={5}
          textAlign="center"
        >
          The Science of Rick and Morty.
        </Text>
      </Container>

      <Container maxW="container.xl">
        <Wrap
          height="100%"
          width="98%"
          spacing={10}
          justify="center"
          align="center"
        >
          {experienceCards.map((card) => (
            <ExperienceCard card={card} />
          ))}
        </Wrap>
      </Container>
    </Container>
  );
};

export default TheScience;
