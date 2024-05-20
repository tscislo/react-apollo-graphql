import classes from "./country.component.module.scss";
import {useCountriesStore} from "../state/state.ts";
import {useSuspenseQuery} from "@apollo/client";
import {CountryQuery} from "../queries/countries.query.ts";

export const CountryComponent = ({id}: {id: string}) => {
    const country = useCountriesStore((state) => state.countries.find((country) => country.id === id));
    const {removeTile} = useCountriesStore();
    const {data} = useSuspenseQuery<{country: {currency: string, emoji: string, capital: string}}>(CountryQuery, {variables: {code: country?.country}});

    return (
        <div className={classes.container}>
            <div>{country?.country}</div>
            <div>{data.country.emoji}</div>
            <div>{data.country.capital}</div>
            <button onClick={() => removeTile(id)}>Remove me</button>
        </div>
    )
}
