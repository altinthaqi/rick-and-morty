import { Td, Tr } from "@chakra-ui/react";

const TableLine = ({ body }) => {
  return (
    <Tr>
      <Td color="gray.100" fontWeight="bold">
        {body.rank}
      </Td>
      <Td color="gray.100" fontWeight="semibold">
        {body.platform}
      </Td>
      <Td color="gray.200" fontWeight="medium" fontSize="14px" isNumeric>
        {body.views}
      </Td>
    </Tr>
  );
};

export default TableLine;
