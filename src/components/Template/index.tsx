import { PropsWithChildren, useEffect, useState } from "react";
import Container from "../Container";
import Logo from "../Logo";

import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { Footer } from "../Footer";
import Menu from "../Menu";
type DefaultThemes = "dark" | "light";
export default function Template(props: PropsWithChildren) {
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
      {props.children} <Footer />
    </Container>
  );
}
