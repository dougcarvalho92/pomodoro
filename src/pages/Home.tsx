import Container from "../components/Container";
import CountDown from "../components/CountDown";
import TaskForm from "../components/TaskForm";

export default function Home() {
  return (
    <Container>
      <CountDown />
      <TaskForm />
    </Container>
  );
}
