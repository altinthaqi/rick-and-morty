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
  HStack,
  Icon,
  Image,
  Spacer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import tweet from "../assets/img/tweet.jpg";
import { ImArrowRight2, ImStatsBars, ImPushpin } from "react-icons/im";
import { FiEyeOff } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
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

      <Box height="100vh">
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
            <WrapItem
              bg="white"
              borderRadius="15px"
              boxShadow="sm"
              maxW="350px"
            >
              <Container maxW="container.md" m={2}>
                <Circle size="45px" bg="teal" color="white" my={3}>
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
              <Container maxW="container.md" m={2}>
                <Circle size="45px" bg="teal" color="white" my={3}>
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
              <Container maxW="container.md" m={2}>
                <Circle size="45px" bg="teal" color="white" my={3}>
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
              <Container maxW="container.md" m={2}>
                <Circle size="45px" bg="teal" color="white" my={3}>
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
              <Container maxW="container.md" m={2}>
                <Circle size="45px" bg="teal" color="white" my={3}>
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
              <Container maxW="container.md" m={2}>
                <Circle size="45px" bg="teal" color="white" my={3}>
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
      </Container>

      <Container maxW="container.full" height="100vh" bg="teal.500">
        <Container
          maxW="container.md"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100%"
          alignItems="center"
        >
          <Table variant="simple" colorScheme="cyan" size="lg">
            <TableCaption
              placement="top"
              color="gray.100"
              fontWeight="bold"
              textAlign="center"
              fontSize={{ base: "21px", md: "35px", lg: "46px" }}
              my={10}
            >
              Television Stats Today{" "}
              <Box
                as="span"
                style={{ display: "block" }}
                fontSize={{ base: "14px", md: "21px", lg: "26px" }}
              >
                {" "}
                (Wednesday, January 26, 2022)
              </Box>
            </TableCaption>
            <Thead>
              <Tr>
                <Th color="gray.200">Rank</Th>
                <Th color="gray.200">Platform</Th>
                <Th isNumeric color="gray.200" s>
                  Views
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td color="gray.100" fontWeight="bold">
                  #171
                </Td>
                <Td color="gray.100" fontWeight="semibold">
                  Show on Wikipedia
                </Td>
                <Td
                  color="gray.200"
                  fontWeight="medium"
                  fontSize="14px"
                  isNumeric
                >
                  4,001 pageviews
                </Td>
              </Tr>
              <Tr>
                <Td color="gray.100" fontWeight="bold">
                  #44
                </Td>
                <Td color="gray.100" fontWeight="semibold">
                  Show on Google
                </Td>
                <Td
                  color="gray.200"
                  fontWeight="medium"
                  fontSize="14px"
                  isNumeric
                >
                  1,291 pageviews
                </Td>
              </Tr>
              <Tr>
                <Td color="gray.100" fontWeight="bold">
                  #4
                </Td>
                <Td color="gray.100" fontWeight="semibold">
                  Fastest growing show on Reddit
                </Td>
                <Td
                  color="gray.200"
                  fontWeight="medium"
                  fontSize="14px"
                  isNumeric
                >
                  #2 overall
                </Td>
              </Tr>
              <Tr>
                <Td color="gray.100" fontWeight="bold">
                  #161
                </Td>
                <Td color="gray.100" fontWeight="semibold">
                  Fastest growing show on Twitter
                </Td>
                <Td
                  color="gray.200"
                  fontWeight="medium"
                  fontSize="14px"
                  isNumeric
                >
                  #18 overall
                </Td>
              </Tr>
              <Tr>
                <Td color="gray.100" fontWeight="bold">
                  #19
                </Td>
                <Td color="gray.100" fontWeight="semibold">
                  Most Torrented show
                </Td>
                <Td isNumeric></Td>
              </Tr>
            </Tbody>
          </Table>
        </Container>
      </Container>

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
            <WrapItem borderRadius="15px" boxShadow="md" maxW="350px">
              <Container maxW="container.md" my={4}>
                <Flex direction="row">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    src={tweet}
                    mr={4}
                  />

                  <Flex direction="column">
                    <Flex direction="row">
                      <Text textAlign="start" color="gray.500" mr={2}>
                        Altin Thaci
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        @altinthaci
                      </Text>
                    </Flex>
                    <Text color="gray.500" fontWeight="normal" my={3}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga, earum!
                    </Text>

                    <Text color="gray.500" fontWeight="normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Unde magni et sit repudiandae, commodi facilis.
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </WrapItem>
            <WrapItem borderRadius="15px" boxShadow="md" maxW="350px">
              <Container maxW="container.md" my={4}>
                <Flex direction="row">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    src={tweet}
                    mr={4}
                  />

                  <Flex direction="column">
                    <Flex direction="row">
                      <Text textAlign="start" color="gray.500" mr={2}>
                        Altin Thaci
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        @altinthaci
                      </Text>
                    </Flex>
                    <Text color="gray.500" fontWeight="normal" my={3}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga, earum!
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </WrapItem>
            <WrapItem borderRadius="15px" boxShadow="md" maxW="350px">
              <Container maxW="container.md" my={4}>
                <Flex direction="row">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    src={tweet}
                    mr={4}
                  />

                  <Flex direction="column">
                    <Flex direction="row">
                      <Text textAlign="start" color="gray.500" mr={2}>
                        Altin Thaci
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        @altinthaci
                      </Text>
                    </Flex>
                    <Text color="gray.500" fontWeight="normal" my={3}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga, earum!
                    </Text>

                    <Text color="gray.500" fontWeight="normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Unde magni et sit repudiandae, commodi facilis.
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </WrapItem>
            <WrapItem borderRadius="15px" boxShadow="md" maxW="350px">
              <Container maxW="container.md" my={4}>
                <Flex direction="row">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    src={tweet}
                    mr={4}
                  />

                  <Flex direction="column">
                    <Flex direction="row">
                      <Text textAlign="start" color="gray.500" mr={2}>
                        Altin Thaci
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        @altinthaci
                      </Text>
                    </Flex>

                    <Text color="gray.500" fontWeight="normal" my={3}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Unde magni et sit repudiandae, commodi facilis.
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </WrapItem>
            <WrapItem borderRadius="15px" boxShadow="md" maxW="350px">
              <Container maxW="container.md" my={4}>
                <Flex direction="row">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    src={tweet}
                    mr={4}
                  />

                  <Flex direction="column">
                    <Flex direction="row">
                      <Text textAlign="start" color="gray.500" mr={2}>
                        Altin Thaci
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        @altinthaci
                      </Text>
                    </Flex>
                    <Text color="gray.500" fontWeight="normal" my={3}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga, earum!
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </WrapItem>
            <WrapItem borderRadius="15px" boxShadow="md" maxW="350px">
              <Container maxW="container.md" my={4}>
                <Flex direction="row">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    src={tweet}
                    mr={4}
                  />

                  <Flex direction="column">
                    <Flex direction="row">
                      <Text textAlign="start" color="gray.500" mr={2}>
                        Altin Thaci
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        @altinthaci
                      </Text>
                    </Flex>
                    <Text color="gray.500" fontWeight="normal" my={3}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga, earum!
                    </Text>

                    <Text color="gray.500" fontWeight="normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Unde magni et sit repudiandae, commodi facilis.
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </WrapItem>
            <WrapItem borderRadius="15px" boxShadow="md" maxW="350px">
              <Container maxW="container.md" my={4}>
                <Flex direction="row">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    src={tweet}
                    mr={4}
                  />

                  <Flex direction="column">
                    <Flex direction="row">
                      <Text textAlign="start" color="gray.500" mr={2}>
                        Altin Thaci
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        @altinthaci
                      </Text>
                    </Flex>
                    <Text color="gray.500" fontWeight="normal" my={3}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga, earum!
                    </Text>

                    <Text color="gray.500" fontWeight="normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Unde magni et sit repudiandae, commodi facilis.
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </WrapItem>
            <WrapItem borderRadius="15px" boxShadow="md" maxW="350px">
              <Container maxW="container.md" my={4}>
                <Flex direction="row">
                  <Image
                    borderRadius="full"
                    boxSize="45px"
                    src={tweet}
                    mr={4}
                  />

                  <Flex direction="column">
                    <Flex direction="row">
                      <Text textAlign="start" color="gray.500" mr={2}>
                        Altin Thaci
                      </Text>
                      <Text fontWeight="normal" color="gray.400">
                        @altinthaci
                      </Text>
                    </Flex>
                    <Text color="gray.500" fontWeight="normal" my={3}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fuga, earum!
                    </Text>

                    <Text color="gray.500" fontWeight="normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Unde magni et sit repudiandae, commodi facilis.
                    </Text>
                  </Flex>
                </Flex>
              </Container>
            </WrapItem>
          </Wrap>
        </Container>
      </Container>

      <Container maxW="full" bg="blue.600" centerContent>
        <Container
          maxW="container.xl"
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          centerContent
          padding="30px 0px"
        >
          <Heading
            fontSize={{ base: "21px", md: "26px", lg: "31px" }}
            color="white"
            flex="1"
            padding={5}
            textAlign={["center", "start"]}
          >
            Start exploring the Rick and Morty's World
          </Heading>
          <NavLink to="/characters" flex="1">
            <Button
              m={3}
              rightIcon={<ImArrowRight2 />}
              size="lg"
              bg="whiteAlpha.900"
              color="black"
            >
              Get Started
            </Button>
          </NavLink>
        </Container>
      </Container>
    </>
  );
};

export default About;
