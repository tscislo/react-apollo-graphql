import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {LoaderComponent} from "./loader.component.tsx";

describe('LoaderComponent', () => {
    it('should create', async () => {
        // Arrange
        render(<LoaderComponent />)
        // Assert
        expect(screen.getByTestId('loader')).toBeDefined();
    });
});
