import CountDown from "../components/CountDown";
import TaskForm from "../components/TaskForm";

export default function Home() {
  return (
    <div className='Home'>
      <CountDown />
      <TaskForm />
    </div>
  );
}
