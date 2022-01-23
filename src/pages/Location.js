import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";
import Loading from "../components/UI/Loading";
import { Box, Container, Divider, Text } from "@chakra-ui/react";
import GradientIntro from "../components/UI/GradientIntro";
import LocationCast from "../components/Locations/LocationCast";

function Location() {
  const { id } = useParams();
  const { error, loading, data } = useLocation(id);

  if (loading) return <Loading />;
  if (error) return "Error....";

  console.log(data);
  return (
    <Box bg="gray.50">
      <Container maxW="5xl" alignContent="center">
        <GradientIntro
          introType="LOCATION"
          headingHelper="World:"
          badgeColor="green"
          name={data.location.name}
        />

        <Divider />

        <Text my={5} color="gray.400" fontWeight="bold" textAlign="center">
          {data.location.dimension === "unknown" && "Dimension: "}
          {data.location.dimension}
        </Text>

        <Divider />

        <Text fontWeight="bold" fontSize="4xl" mt={10} color="gray.500">
          Cast:
        </Text>

        <LocationCast residents={data.location.residents} />
      </Container>
    </Box>
  );
}

export default Location;
