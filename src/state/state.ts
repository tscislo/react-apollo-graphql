import {create} from "zustand";

export interface Country {
    id: string;
    country: string;
}

export interface State {
    countries: Country[];
    removeTile: (id: string) => void;
    addTile: (tile: Country) => void;
    removeTiles: () => void;
}

export const useCountriesStore = create<State>()(
    (set) => ({
        countries: [],
        removeTile: (id: string) => set((state) => ({countries: [...state.countries].filter((tile) => tile.id !== id)})),
        addTile: (tile: Country) => set((state) => ({countries: [...state.countries, tile]})),
        removeTiles: () => set({countries: []}),
    })
);
