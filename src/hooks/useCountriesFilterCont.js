import { gql, useQuery } from "@apollo/client";

const GET_CONTINENT = gql`
  query filteredByContinent($code: [String!]) {
    continents(filter: { code: { in: $code } }) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

export const useCountryCont = (code) => {
  const { data, loading } = useQuery(GET_CONTINENT, {
    variables: { code },
  });

  return { data, loading };
};
