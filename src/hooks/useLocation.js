import { gql, useQuery } from "@apollo/client";

const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      name
      dimension
      type
      residents {
        id
        name
        image
        species
      }
    }
  }
`;

export const useLocation = (id) => {
  const { loading, error, data } = useQuery(GET_LOCATION, {
    variables: {
      id,
    },
  });

  return { loading, error, data };
};
