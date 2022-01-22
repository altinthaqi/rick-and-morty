import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

function Navigation() {
  return (
    <>
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
        <Breadcrumb spacing="8px" separator={<HiChevronRight color="black" />}>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              color="gray.500"
              to="/characters"
              isCurrentPage
            >
              Characters
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} color="gray.500" to="/locations">
              Locations
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
}

export default Navigation;
