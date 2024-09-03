import { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "./components/themeContext/ThemeContext";

const customRender = (
  ui: ReactElement,
  { initialThemeState = false, ...options } = {},
) => {
  const Wrapper = ({ children }: { children: ReactNode }): ReactNode => (
    <ThemeProvider initialThemeState={initialThemeState}>
      {children}
    </ThemeProvider>
  );
  return render(ui, { wrapper: Wrapper, ...options });
};

export { customRender as render };
