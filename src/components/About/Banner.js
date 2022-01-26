import {
  Text,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { ImArrowRight2 } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Banner = () => {
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
            maxWidth="80%"
          >
            View Characters, Episodes, Locations and more!
          </Text>

          <Flex
            direction={["column", "row"]}
            width={["100%", "auto"]}
            wrap="wrap"
          >
            <Button
              as={NavLink}
              to="/characters"
              m={3}
              rightIcon={<ImArrowRight2 />}
              size="lg"
              colorScheme="teal"
            >
              Get Started
            </Button>{" "}
            <Button
              as="a"
              href="https://github.com/altinthaqi/rick-and-morty"
              m={3}
              leftIcon={<BsGithub />}
              size="lg"
            >
              Repository
            </Button>
          </Flex>
        </VStack>
      </Container>

      <Divider />
    </Box>
  );
};

export default Banner;
