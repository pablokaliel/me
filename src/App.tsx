import { ThemeProvider } from "styled-components";
import { HeroSection } from "./pages/home";
import { Navbar } from "./components/header";
import usePersistedState from "./utils/PersistedState";
import light from "./theme/light";
import dark from "./theme/dark";

function App() {
  const [theme, setTheme] = usePersistedState("theme", "dark");

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
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
