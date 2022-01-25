import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ImArrowRight2 } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <Box height="90vh">
      <Container
        maxW="container.lg"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="space-evenly"
      >
        <VStack spacing={10}>
          <Heading
            color="blackAlpha.800"
            as="h1"
            fontSize={{ base: "36px", md: "56px", lg: "61px" }}
            textAlign="center"
            fontWeight="extrabold"
          >
            Rick and Morty's animated series{" "}
            <Box as="span" color="#319795">
              information
            </Box>
          </Heading>

          <Text
            fontSize={{ base: "18px", md: "21px" }}
            color="gray.500"
            textAlign="center"
          >
            View Characters, Episodes, Locations and more !
          </Text>

          <Flex
            direction={["column", "row"]}
            width={["100%", "auto"]}
            wrap="wrap"
          >
            <Button
              m={3}
              rightIcon={<ImArrowRight2 />}
              size="lg"
              colorScheme="teal"
            >
              Get Started
            </Button>

            <Button m={3} leftIcon={<BsGithub />} size="lg">
              Repository
            </Button>
          </Flex>
        </VStack>
      </Container>

      <Divider />
    </Box>
  );
};

export default About;
