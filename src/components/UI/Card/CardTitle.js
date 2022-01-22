import { Text } from "@chakra-ui/react";
import React from "react";

function CardTitle(props) {
  return (
    <Text fontSize="xl" textAlign="center" color="gray.600" fontWeight="medium">
      {props.cardTitle}
    </Text>
  );
}

export default CardTitle;
