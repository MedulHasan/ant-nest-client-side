import { render, screen } from "@testing-library/react";
import Banner from "../Banner/Banner";

test("testing check", () => {
    expect(true).toBe(true);
});

test("testing search", () => {
    render(<Banner />);
    const testid = screen.getByTestId("search");
    expect(testid).toBeInTheDocument();
});
