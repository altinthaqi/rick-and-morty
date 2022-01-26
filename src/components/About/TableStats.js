import {
  Box,
  Container,
  Table,
  TableCaption,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { tableStats } from "../../data/aboutData";
import TableLine from "./UI/TableLine";

const TableStats = () => {
  return (
    <Container maxW="container.full" height="100vh" bg="teal.500">
      <Container
        maxW="container.md"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100%"
        alignItems="center"
      >
        <Table variant="simple" colorScheme="cyan" size="lg">
          <TableCaption
            placement="top"
            color="gray.100"
            fontWeight="bold"
            textAlign="center"
            fontSize={{ base: "21px", md: "35px", lg: "46px" }}
            my={10}
          >
            {tableStats[0].caption1}
            <Box
              as="span"
              style={{ display: "block" }}
              fontSize={{ base: "14px", md: "21px", lg: "26px" }}
            >
              {tableStats[0].caption2}
            </Box>
          </TableCaption>
          <Thead>
            <Tr>
              {tableStats[0].head.map((head, idx) => (
                <>
                  {idx === 2 ? (
                    <Th isNumeric color="gray.200">
                      {head}
                    </Th>
                  ) : (
                    <Th color="gray.200">{head}</Th>
                  )}
                </>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {tableStats[0].body.map((body) => (
              <TableLine body={body} />
            ))}
          </Tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default TableStats;
