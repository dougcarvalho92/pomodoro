import {
  HistoryIcon,
  HouseIcon,
  PlayCircleIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import Container from "./components/Container";
import CountDown from "./components/CountDown";
import Cycles from "./components/Cycles";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

function App() {
  return (
    <Container>
      <Logo />
      <Menu.Nav>
        <Menu.Link Icon={HouseIcon} to='/' />
        <Menu.Link Icon={HistoryIcon} to='/' />
        <Menu.Link Icon={SettingsIcon} to='/' />
        <Menu.Link Icon={SunIcon} to='/' />
      </Menu.Nav>
      <CountDown />
      <Form.Root>
        <Form.Input
          id='task'
          label='O que irá fazer?'
          placeholder='Ex: Estudar programação'
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <Cycles.Root>
          <Cycles.Header />
          <Cycles.List>
            <Cycles.Dot
              title='Cycle 1'
              status='workTime'
              description='First cycle completed'
            />
            <Cycles.Dot
              title='Cycle 2'
              status='shortBreakTime'
              description='Currently working on second cycle'
            />
            <Cycles.Dot
              title='Cycle 3'
              status='workTime'
              description='Third cycle pending'
            />
            <Cycles.Dot
              title='Cycle 4'
              status='shortBreakTime'
              description='Third cycle pending'
            />
            <Cycles.Dot
              title='Cycle 5'
              status='longBreakTime'
              description='Fourth cycle pending'
            />
          </Cycles.List>
        </Cycles.Root>
        <Form.Button Icon={PlayCircleIcon} />
      </Form.Root>
    </Container>
  );
}
export default App;
