import {afterEach, describe, expect, it} from "vitest";
import {act, cleanup, render, screen} from "@testing-library/react";
import {HeaderComponent} from "./header.component.tsx";
import {MockedProvider} from "@apollo/client/testing";
import {countriesMock} from "../__mocks__/countries-mock.ts";
import {Suspense} from "react";

describe('HeaderComponent', () => {
    afterEach(() => {
        cleanup()
    })

    it('should create component and display list cf countries', async () => {
        // Arrange
        render(
            <MockedProvider mocks={[countriesMock]}>
                <Suspense fallback={<></>}>
                    <HeaderComponent/>
                </Suspense>
            </MockedProvider>
        )
        // Assert
        expect(await screen.findByTestId('US')).toBeDefined();
        expect(await screen.findByTestId('CA')).toBeDefined();
        expect(await screen.findByTestId('MX')).toBeDefined();
    });

    it('should allow to add a country', async () => {
        // Arrange
        render(
            <MockedProvider mocks={[countriesMock]}>
                <Suspense fallback={<></>}>
                    <HeaderComponent/>
                </Suspense>
            </MockedProvider>
        )
        // Act
        const addCountryButton = await screen.findByTestId('add-country-button');
        act(() => addCountryButton.click());
        // Assert
        expect((await screen.findByTestId('all-countries-count')).innerText).toEqual('1');
    });


    it('should allow to remove all countries', async () => {
        // Arrange
        render(
            <MockedProvider mocks={[countriesMock]}>
                <Suspense fallback={<></>}>
                    <HeaderComponent/>
                </Suspense>
            </MockedProvider>
        )
        // Act
        const addCountryButton = await screen.findByTestId('add-country-button');
        const removeAllCountriesButton = await screen.findByTestId('remove-all-countries-button');
        act(() => {
            addCountryButton.click();
            addCountryButton.click();
            addCountryButton.click();
        });
        expect((await screen.findByTestId('all-countries-count')).innerText).toEqual('3');
        act(() => removeAllCountriesButton.click());
        // Assert
        expect((await screen.findByTestId('all-countries-count')).innerText).toEqual('0');
    });

    it('should allow to remove first country', async () => {
        // Arrange
        render(
            <MockedProvider mocks={[countriesMock]}>
                <Suspense fallback={<></>}>
                    <HeaderComponent/>
                </Suspense>
            </MockedProvider>
        )
        // Act
        const addCountryButton = await screen.findByTestId('add-country-button');
        const removeFirstCountryButton = await screen.findByTestId('remove-first-country-button');
        act(() => {
            addCountryButton.click();
            addCountryButton.click();
            addCountryButton.click();
        });
        expect((await screen.findByTestId('all-countries-count')).innerText).toEqual('3');
        act(() => removeFirstCountryButton.click());
        // Assert
        expect((await screen.findByTestId('all-countries-count')).innerText).toEqual('2');
    });
});
