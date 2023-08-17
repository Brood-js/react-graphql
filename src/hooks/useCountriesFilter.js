import { gql } from "@apollo/client";

const COUNTRIES_FILTER = gql`
  query filterByContinent {
    countries(filter: { continent: { eq: "SA" } }) {
      code
      name
      capital
      currency
      languages {
        name
      }
      states {
        code
        name
      }
    }
  }
`;
