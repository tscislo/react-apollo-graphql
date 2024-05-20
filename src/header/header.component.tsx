import {useCountriesStore} from "../state/state.ts";
import {useSuspenseQuery} from "@apollo/client";
import {CountriesQuery} from "../queries/countries.query.ts";
import {useRef} from "react";

export const HeaderComponent = () => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const store = useCountriesStore();
    const {data} = useSuspenseQuery<{countries: {code: string}[]}>(CountriesQuery);
    return (
        <header>
            <select ref={selectRef}>
                {data?.countries.map((country) => <option key={country.code}>{country.code}</option>)}
            </select>
            <button onClick={() => store.addTile({
                id: Math.round(Math.random() * 100000).toString(),
                country: selectRef.current?.value || ''
            })}>Add country</button>
            <button onClick={() => (store.countries.length) ? store.removeTile(store.countries[0].id) : ''}>Remove first</button>
            <button onClick={() => store.removeTiles()}>Remove all</button>
        </header>
    )
}
