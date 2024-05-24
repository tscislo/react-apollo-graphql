import { MockedResponse } from "@apollo/client/testing";
import {CountriesGraphQLResponse} from "../header/header.component.tsx";
import {CountriesQuery} from "../queries/countries.query.ts";

export const countriesMock: MockedResponse<CountriesGraphQLResponse> = {
    request: {
        query: CountriesQuery,
    },
    result: {
        data: {
            countries: [
                { code: "US" },
                { code: "CA" },
                { code: "MX" },
            ],
        },
    },
};
