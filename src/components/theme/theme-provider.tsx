import { ThemeProvider as BaseThemeProvider } from "next-themes";

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };
