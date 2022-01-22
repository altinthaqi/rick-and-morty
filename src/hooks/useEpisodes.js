import { gql, useQuery } from "@apollo/client";

const GET_EPISODES = gql`
  query {
    episodes {
      results {
        id
        name
        episode
      }
    }
  }
`;

export const useEpisodes = () => {
  const { loading, error, data } = useQuery(GET_EPISODES);

  return { loading, error, data };
};
