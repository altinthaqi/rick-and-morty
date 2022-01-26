import {
  Circle,
  Container,
  Heading,
  Icon,
  Text,
  WrapItem,
} from "@chakra-ui/react";

const ExperienceCard = ({ card }) => {
  return (
    <WrapItem bg="white" borderRadius="15px" boxShadow="sm" maxW="350px">
      <Container maxW="container.md" m={2}>
        <Circle size="45px" bg="teal" color="white" my={3}>
          <Icon as={card.icon} />
        </Circle>
        <Heading
          color="gray.700"
          fontSize={["18px", "20px"]}
          fontWeight="medium"
        >
          {card.title}
        </Heading>
        <Text
          color="gray.500"
          fontSize={["16px", "18px"]}
          fontWeight="normal"
          mb={5}
          mt={2}
        >
          {card.text}
        </Text>
      </Container>
    </WrapItem>
  );
};

export default ExperienceCard;
