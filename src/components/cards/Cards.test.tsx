import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import Cards from "./Cards";
import { movies as data } from "../../data";

describe("Cards", () => {
  const movies = data.splice(0, 3);

  test("renders successfully", () => {
    render(<Cards movies={movies} />);
    movies.forEach((movie) => {
      const nameElement = screen.getByText(movie.name);
      expect(nameElement).toBeInTheDocument();
    });
    const items = screen.getAllByRole("button");
    expect(items).toHaveLength(movies.length);
  });

  test("handles card click", async () => {
    userEvent.setup();
    render(<Cards movies={movies} />);

    const buttons = screen.getAllByRole("button");
    const firstElement = buttons[0].parentElement as HTMLElement;
    const secondElement = buttons[1].parentElement as HTMLElement;
    const thirdElement = buttons[2].parentElement as HTMLElement;

    expect(firstElement).toHaveStyle(`z-index: ${movies.length}`);
    expect(secondElement).toHaveStyle(`z-index: ${movies.length - 1}`);
    expect(thirdElement).toHaveStyle(`z-index: ${movies.length - 2}`);

    await userEvent.click(firstElement);

    expect(firstElement).toHaveStyle(`z-index: 1`);
    expect(secondElement).toHaveStyle(`z-index: ${movies.length}`);
    expect(thirdElement).toHaveStyle(`z-index: ${movies.length - 1}`);
  });
});
