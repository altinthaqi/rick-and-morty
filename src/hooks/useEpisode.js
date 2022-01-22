import { gql, useQuery } from "@apollo/client";

const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      name
      episode
      characters {
        id
        name
        species
        location {
          id
          name
          dimension
        }
        image
        episode {
          id
          name
          episode
        }
      }
    }
  }
`;

export const useEpisode = (id) => {
  const { loading, error, data } = useQuery(GET_EPISODE, {
    variables: {
      id,
    },
  });

  return { loading, error, data };
};
