import { Box, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import logo from "../assets/img/logo.png";

function Navigation() {
  return (
    <Box
      bg="white"
      height={20}
      display="flex"
      alignItems="center"
      pos="sticky"
      zIndex="200"
      top="0"
      px={[5, 5, 10]}
      boxShadow="sm"
    >
      <NavLink to="/">
        <Image src={logo} width={["100px", "150px"]} />
      </NavLink>
      <Spacer />
      <MenuDesktop />
      <MenuMobile />
    </Box>
  );
}

export default Navigation;
