import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      species
      image
      location {
        id
        name
        dimension
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  return { loading, error, data };
};
