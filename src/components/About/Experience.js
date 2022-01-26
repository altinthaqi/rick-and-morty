import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Experience = () => {
  return (
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
                follows the misadventures of cynical mad scientist Rick Sanchez
                and his good-hearted, but fretful grandson Morty Smith, who
                split their time between domestic life and interdimensional
                adventures.
              </Text>
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
