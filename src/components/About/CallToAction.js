import { Button, Container, Heading } from "@chakra-ui/react";
import { ImArrowRight2 } from "react-icons/im";
import { NavLink } from "react-router-dom";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
