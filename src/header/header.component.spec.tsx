import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {HeaderComponent} from "./header.component.tsx";
import {MockedProvider} from "@apollo/client/testing";
import {countriesMock} from "../mocks/countries-mock.ts";

describe('HeaderComponent', () => {
    it('should create', async () => {
        // Arrange
        render(
            <MockedProvider mocks={[countriesMock]} addTypename={false}>
                <HeaderComponent/>
            </MockedProvider>
        )
        // Assert
        // expect(await screen.getByTestId('US')).toBeDefined();
    });
});
