import { Box, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

function Navigation() {
  return (
    <Box
      bg="gray.100"
      height={20}
      display="flex"
      alignItems="center"
      pos="sticky"
      zIndex="100"
      top="0"
      px={[5, 5, 10]}
    >
      <NavLink to="/">
        <Text fontSize="xl" fontWeight="extrabold" color="cyan.800">
          RICK & MORTY
        </Text>
      </NavLink>
      <Spacer />
      <MenuDesktop />
      <MenuMobile />
    </Box>
  );
}

export default Navigation;
