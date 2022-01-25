import {
  Box,
  Button,
  Center,
  Circle,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { ImArrowRight2, ImStatsBars, ImPushpin } from "react-icons/im";

import { FiEyeOff } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";

const About = () => {
  return (
    <Container maxW="container.full">
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

      <Box height={["80vh", "90vh"]}>
        <Container
          maxW="container.lg"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading
            mb={20}
            textAlign="center"
            fontSize={{ base: "31px", md: "40px", lg: "56px" }}
            fontWeight="bold"
            color="blackAlpha.800"
          >
            Experience the best American adult animated science-fiction sitcom
          </Heading>

          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={6}
          >
            <GridItem>
              <Image
                borderRadius="xl"
                boxSize="100%"
                src="https://i.cdn.turner.com/adultswim/big/video/rick-and-morty-marathon/rickandmorty_310_dup-20170928_1.jpg"
                alt=""
              />
            </GridItem>
            <GridItem>
              <Center height="100%">
                <Text fontWeight="semibold" color="gray.700">
                  Rick and Morty is an American adult animated science fiction
                  sitcom created by Justin Roiland and Dan Harmon for Cartoon
                  Network's nighttime programming block, Adult Swim. The series
                  follows the misadventures of cynical mad scientist Rick
                  Sanchez and his good-hearted, but fretful grandson Morty
                  Smith, who split their time between domestic life and
                  interdimensional adventures.
                </Text>
              </Center>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box py={20} bg="gray.50">
        <Container maxW={"container.xl"}>
          <Container maxW={"container.lg"} mb={20}>
            <Heading
              mt={20}
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

          <Wrap
            height="100%"
            width="98%"
            spacing={10}
            justify="center"
            align="center"
          >
            <WrapItem
              bg="white"
              borderRadius="15px"
              boxShadow="sm"
              maxW="350px"
            >
              <Container maxW="container.md" m={5}>
                <Circle size="45px" bg="teal" color="white" my={5}>
                  <Icon as={FiEyeOff} />
                </Circle>
                <Heading
                  color="gray.700"
                  fontSize={["18px", "20px"]}
                  fontWeight="medium"
                >
                  Adult Serie
                </Heading>
                <Text
                  color="gray.500"
                  fontSize={["16px", "18px"]}
                  fontWeight="normal"
                  mb={5}
                  mt={2}
                >
                  Adults find this funny too, due to some amaizing punch-lines
                  and adult jokes, that never get old! You'll surely enjoy this!
                </Text>
              </Container>
            </WrapItem>

            <WrapItem
              bg="white"
              borderRadius="15px"
              boxShadow="sm"
              maxW="350px"
            >
              <Container maxW="container.md" m={5}>
                <Circle size="45px" bg="teal" color="white" my={5}>
                  <Icon as={ImPushpin} />
                </Circle>
                <Heading
                  color="gray.700"
                  fontSize={["18px", "20px"]}
                  fontWeight="medium"
                >
                  Gets you hooked
                </Heading>
                <Text
                  color="gray.500"
                  fontSize={["16px", "18px"]}
                  fontWeight="normal"
                  mb={5}
                  mt={2}
                >
                  Have some pop-corns ready and get "hooked" to the couch,
                  because you surely don't wanna miss the adventures.
                </Text>
              </Container>
            </WrapItem>

            <WrapItem
              bg="white"
              borderRadius="15px"
              boxShadow="sm"
              maxW="350px"
            >
              <Container maxW="container.md" m={5}>
                <Circle size="45px" bg="teal" color="white" my={5}>
                  <Icon as={VscSymbolColor} />
                </Circle>
                <Heading
                  color="gray.700"
                  fontSize={["18px", "20px"]}
                  fontWeight="medium"
                >
                  Very Creative
                </Heading>
                <Text
                  color="gray.500"
                  fontSize={["16px", "18px"]}
                  fontWeight="normal"
                  mb={5}
                  mt={2}
                >
                  A very creative series acknowledged by many critics, that
                  showcases the genious nature of Justin and his imaginary.
                </Text>
              </Container>
            </WrapItem>

            <WrapItem
              bg="white"
              borderRadius="15px"
              boxShadow="sm"
              maxW="350px"
            >
              <Container maxW="container.md" m={5}>
                <Circle size="45px" bg="teal" color="white" my={5}>
                  <Icon as={FiEyeOff} />
                </Circle>
                <Heading
                  color="gray.700"
                  fontSize={["18px", "20px"]}
                  fontWeight="medium"
                >
                  Adult Serie
                </Heading>
                <Text
                  color="gray.500"
                  fontSize={["16px", "18px"]}
                  fontWeight="normal"
                  mb={5}
                  mt={2}
                >
                  Adults find this funny too, due to some amaizing punch-lines
                  and adult jokes, that never get old! You'll surely enjoy this!
                </Text>
              </Container>
            </WrapItem>
            <WrapItem
              bg="white"
              borderRadius="15px"
              boxShadow="sm"
              maxW="350px"
            >
              <Container maxW="container.md" m={5}>
                <Circle size="45px" bg="teal" color="white" my={5}>
                  <Icon as={ImPushpin} />
                </Circle>
                <Heading
                  color="gray.700"
                  fontSize={["18px", "20px"]}
                  fontWeight="medium"
                >
                  Gets you hooked
                </Heading>
                <Text
                  color="gray.500"
                  fontSize={["16px", "18px"]}
                  fontWeight="normal"
                  mb={5}
                  mt={2}
                >
                  Have some pop-corns ready and get "hooked" to the couch,
                  because you surely don't wanna miss the adventures.
                </Text>
              </Container>
            </WrapItem>

            <WrapItem
              bg="white"
              borderRadius="15px"
              boxShadow="sm"
              maxW="350px"
            >
              <Container maxW="container.md" m={5}>
                <Circle size="45px" bg="teal" color="white" my={5}>
                  <Icon as={ImStatsBars} />
                </Circle>
                <Heading
                  color="gray.700"
                  fontSize={["18px", "20px"]}
                  fontWeight="medium"
                >
                  It's Science
                </Heading>
                <Text
                  color="gray.500"
                  fontSize={["16px", "18px"]}
                  fontWeight="normal"
                  mb={5}
                  mt={2}
                >
                  Scientific concepts and futuristic technology with a tinge of
                  truth. To find out how realistic are the show’s scientific
                  ideas , watch it.
                </Text>
              </Container>
            </WrapItem>
          </Wrap>
        </Container>
      </Box>

      <Box></Box>
    </Container>
  );
};

export default About;
