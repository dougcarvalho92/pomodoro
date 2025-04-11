import { PlayCircleIcon } from "lucide-react";
import { useRef } from "react";
import CountDown from "../components/CountDown";
import Cycles from "../components/Cycles";
import Form from "../components/Form";
import { useTaskContext } from "../contexts/TaskContext/useTaskContext";

export default function Home() {
  const { dispatch } = useTaskContext();
  const taskInput = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(taskInput.current?.value);
  }
  return (
    <div className='Home'>
      <CountDown />
      <Form.Root onSubmit={handleSubmit}>
        <Form.Input
          id='task'
          label='O que irá fazer?'
          placeholder='Ex: Estudar programação'
          name='task'
          ref={taskInput}
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
    </div>
  );
}
