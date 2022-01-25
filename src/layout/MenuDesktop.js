import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function MenuDesktop() {
  return (
    <Breadcrumb display={["none", "none", "block"]} spacing="10px" separator="">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} color="gray.500" to="/characters">
          Characters
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} color="gray.500" to="/locations">
          Locations
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} color="gray.500" to="/episodes">
          Episodes
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default MenuDesktop;
