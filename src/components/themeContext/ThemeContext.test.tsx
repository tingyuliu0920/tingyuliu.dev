import userEvent from "@testing-library/user-event";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { render, screen } from "@testing-library/react";

const TestComponent = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div>
      <p data-testid="darkModeStatus">{darkMode ? "dark" : "light"}</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};
describe("ThemeContext", () => {
  test("initialize with darkMode based on default", () => {
    render(
      <ThemeProvider initialThemeState={true}>
        <TestComponent />
      </ThemeProvider>,
    );
    expect(screen.getByTestId("darkModeStatus")).toHaveTextContent("dark");
  });

  test("initialize with darkMode based on localStorage", () => {
    window.localStorage.setItem("darkMode", "false");
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );
    expect(screen.getByTestId("darkModeStatus")).toHaveTextContent("light");
  });

  test("should toggle dark mode correctly and save to localStorage", async () => {
    render(
      <ThemeProvider initialThemeState={true}>
        <TestComponent />
      </ThemeProvider>,
    );
    const button = screen.getByText("Toggle Dark Mode");

    await userEvent.click(button);
    expect(screen.getByText("light")).toBeInTheDocument();
    expect(window.localStorage.getItem("darkMode")).toBe("false");

    await userEvent.click(button);
    expect(screen.getByText("dark")).toBeInTheDocument();
    expect(window.localStorage.getItem("darkMode")).toBe("true");
  });
});
