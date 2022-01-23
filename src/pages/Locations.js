import React from "react";
import { useLocations } from "../hooks/useLocations";
import Card from "../components/UI/Card/Card";
import { Box } from "@chakra-ui/react";
import HeadingComponent from "../components/UI/HeadingComponent";
import Loading from "../components/UI/Loading";

function Locations() {
  const { loading, error, data } = useLocations();

  if (loading) return <Loading />;
  if (error) return "Error....";

  console.log(data);

  return (
    <Box mt={10}>
      <HeadingComponent title="Locations:" />
      {data.locations.results.map((location) => (
        <Card
          key={location.id}
          id={location.id}
          badgeText={location.type}
          wrap="no-wrap"
          cardTitle={location.name}
          path="locations"
          buttonText="View Location"
        />
      ))}
    </Box>
  );
}

export default Locations;
