import {afterEach, describe, expect, it} from "vitest";
import {cleanup, render, screen} from "@testing-library/react";
import {HeaderComponent} from "./header.component.tsx";
import {MockedProvider} from "@apollo/client/testing";
import {countriesMock} from "../mocks/countries-mock.ts";
import {Suspense} from "react";

describe('HeaderComponent', () => {
    afterEach(() => {
        cleanup()
    })

    it('should create', async () => {
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

    it('should remove tile', async () => {
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
});
