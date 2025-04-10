import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import { Outlet } from "react-router";
import Container from "./components/Container";
import { Footer } from "./components/Footer";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

function App() {
  return (
    <Container>
      <Logo />
      <Menu.Nav>
        <Menu.Link Icon={HouseIcon} to='/' />
        <Menu.Link Icon={HistoryIcon} to='history' />
        <Menu.Link Icon={SettingsIcon} to='settings' />
        <Menu.Link Icon={SunIcon} to='about-pomodoro' />
      </Menu.Nav>
      <Outlet></Outlet>

      <Footer />
    </Container>
  );
}
export default App;
