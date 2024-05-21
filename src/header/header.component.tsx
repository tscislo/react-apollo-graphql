import {useCountriesStore} from "../state/state.ts";
import {useSuspenseQuery} from "@apollo/client";
import {CountriesQuery} from "../queries/countries.query.ts";
import {useRef} from "react";

export interface CountriesGraphQLResponse {
    countries: { code: string }[]
}

export const HeaderComponent = () => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const store = useCountriesStore();
    const {data} = useSuspenseQuery<CountriesGraphQLResponse>(CountriesQuery);
    return (
        <header>
            <select ref={selectRef}>
                {data?.countries.map((country) => <option
                    data-testid={country.code}
                    key={country.code}>{country.code}</option>)}
            </select>
            <button onClick={() => store.addTile({
                id: Math.round(Math.random() * 100000).toString(),
                country: selectRef.current?.value || ''
            })}>Add country
            </button>
            <button onClick={() => (store.countries.length) ? store.removeTile(store.countries[0].id) : ''}>Remove
                first
            </button>
            <button onClick={() => store.removeTiles()}>Remove all</button>
        </header>
    )
}
