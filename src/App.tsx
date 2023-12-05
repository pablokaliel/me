import { ThemeProvider } from "styled-components";
import { HeroSection } from "./pages/home";
import { Navbar } from "./components/header";
import usePersistedState from "./utils/PersistedState";
import darkTheme from "./theme/dark";
import lightTheme from "./theme/light";

function App() {
  const [theme, setTheme] = usePersistedState("theme", darkTheme);

  const toggleTheme = () => {
    const newTheme = theme.title === "dark" ? lightTheme : darkTheme;
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar toggleTheme={toggleTheme} />
        <HeroSection />
      </>
    </ThemeProvider>
  );
}

export default App;
