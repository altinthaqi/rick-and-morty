import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CgFormatSlash } from "react-icons/cg";

function MenuDesktop() {
  return (
    <Breadcrumb
      display={["none", "none", "block"]}
      spacing="8px"
      separator={<CgFormatSlash color="black" />}
    >
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
