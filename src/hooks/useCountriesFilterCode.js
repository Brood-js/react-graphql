import { gql, useQuery } from "@apollo/client";

const GET_COUNTRY_CODE = gql`
  query filteredByCode($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      continent {
        name
      }
      currencies
      languages {
        code
        name
      }
      states {
        code
        name
      }
    }
  }
`;

export const useCountry = (code) => {
  const { data, loading } = useQuery(GET_COUNTRY_CODE, {
    variables: { code },
  });

  return { data, loading };
};
