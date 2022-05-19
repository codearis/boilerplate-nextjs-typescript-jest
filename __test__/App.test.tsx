import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders Hello World!", () => {
    render(<Home />);
    const text = screen.getByText("Hello world!");
    expect(text).toBeInTheDocument();
  });
});
