import {HeaderComponent} from "./header/header.component.tsx";
import {Suspense} from "react";
import {LoaderComponent} from "./loader/loader.component.tsx";
import {useCountriesStore} from "./state/state.ts";
import {CountryComponent} from "./country/country.component.tsx";
import classes from './App.module.scss'

function App() {
    const {countries} = useCountriesStore();

    return <>
        <Suspense fallback={<LoaderComponent/>}>
            <HeaderComponent/>
            <div className={classes.container}>
                {countries.map((country) => <Suspense fallback={<LoaderComponent/>}>
                    <CountryComponent key={country.id} id={country.id}/>
                </Suspense>)}
            </div>
            {!countries.length && <div className={classes.empty}>No countries added</div>}
        </Suspense>
    </>
}

export default App
