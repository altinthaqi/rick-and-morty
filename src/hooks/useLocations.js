import { gql, useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query {
    locations {
      results {
        name
        dimension
        id
        type
      }
    }
  }
`;

export const useLocations = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  return {
    loading,
    error,
    data,
  };
};
