import {gql} from "@apollo/client";

export const CountriesQuery = gql`
    query Query {
      countries {
        code
      }
    }
`

export const CountryQuery = gql`
    query Query($code: ID!) {
      country(code: $code) {
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }`;
