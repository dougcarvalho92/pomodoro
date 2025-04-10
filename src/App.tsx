import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Container from "./components/Container";
import { Footer } from "./components/Footer";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
type DefaultThemes = "dark" | "light";
function App() {
  const [theme, setTheme] = useState<DefaultThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as DefaultThemes) || "dark";
    return storageTheme;
  });

  function handleChangeTheme(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Container>
      <Logo />
      <Menu.Nav>
        <Menu.Link Icon={HouseIcon} to='/' />
        <Menu.Link Icon={HistoryIcon} to='history' />
        <Menu.Link Icon={SettingsIcon} to='settings' />
        <Menu.Link
          Icon={theme === "dark" ? SunIcon : MoonIcon}
          onClick={handleChangeTheme}
          to='#'
        />
      </Menu.Nav>
      <Outlet />
      <Footer />
    </Container>
  );
}
export default App;
