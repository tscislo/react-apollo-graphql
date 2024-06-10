import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {LoaderComponent} from "./loader.component.tsx";

describe('LoaderComponent', () => {
    it('should create', async () => {
        // Act
        render(<LoaderComponent />)
        // Assert
        expect(await screen.findByTestId('loader')).toBeDefined();
    });
});
