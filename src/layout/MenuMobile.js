import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function MenuMobile() {
  return (
    <Box display={["block", "block", "none"]}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          colorScheme="gray"
          variant="solid"
          borderRadius="full"
        />
        <MenuList>
          <MenuGroup title="Links">
            <MenuItem as={NavLink} to="/characters">
              Characters
            </MenuItem>
            <MenuItem as={NavLink} to="/locations">
              Locations
            </MenuItem>
            <MenuItem as={NavLink} to="/episodes">
              Episodes
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default MenuMobile;
