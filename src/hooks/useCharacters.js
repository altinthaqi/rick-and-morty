import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
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
  }
`;

export const useCharacters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  return {
    loading,
    error,
    data,
  };
};
