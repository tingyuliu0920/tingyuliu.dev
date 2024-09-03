import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header, { navList } from "./Header";
import * as ThemeContext from "../themeContext/ThemeContext";

describe("Header", () => {
  test("renders correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      {
        initialThemeState: true,
      },
    );
    navList.forEach((nav) => {
      expect(screen.getByText(nav[0])).toBeInTheDocument();
    });
    expect(screen.getByTitle("moon icon")).toBeInTheDocument();
  });

  test("toggle darkmode from light to dark when the toggle button is clicked", async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      {
        initialThemeState: false,
      },
    );
    expect(screen.queryByTitle("sun icon")).toBeInTheDocument();
    expect(screen.queryByTitle("moon icon")).not.toBeInTheDocument();

    const toggleButton = screen.getByTestId("dark-mode-icon");
    await userEvent.click(toggleButton);

    expect(screen.queryByTitle("sun icon")).not.toBeInTheDocument();
    expect(screen.queryByTitle("moon icon")).toBeInTheDocument();
  });

  test("should toggle darkmode when the icon is clicked", async () => {
    const toggleDarkMode = vi.fn();
    vi.spyOn(ThemeContext, "useTheme").mockReturnValue({
      darkMode: false,
      toggleDarkMode,
    });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      {
        initialThemeState: true,
      },
    );

    vi.mocked(ThemeContext.useTheme).mockReturnValue({
      darkMode: false,
      toggleDarkMode,
    });

    userEvent.setup();
    const toggleButton = screen.getByTestId("dark-mode-icon");
    await userEvent.click(toggleButton);
    expect(toggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
