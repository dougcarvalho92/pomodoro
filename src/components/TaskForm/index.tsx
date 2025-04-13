import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import React, { useRef } from "react";
import { ZodError } from "zod";
import { showMessage } from "../../adapters/showMessage";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskSchema } from "../../schemas/TaskSchema";
import { TaskActionTypes, TaskModel } from "../../types";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import Button from "../Button";
import Cycles from "../Cycles";

import Form from "../Form";
import Input from "../Input";
import { Tips } from "../Tips";

export default function TaskForm() {
  const { state, dispatch } = useTaskContext();
  const taskInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const cycleStep = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: "foco",
    shortBreakTime: "decanso curto",
    longBreakTime: "descanso longo",
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const current = taskInput.current || null;
    try {
      if (current && TaskSchema.parse(current)) {
        const taskName = current.value.trim();
        const newTask: TaskModel = {
          id: Date.now().toString(),
          name: taskName,
          startDate: Date.now(),
          completeDate: null,
          interruptDate: null,
          duration: state.config[nextCycleType],
          type: nextCycleType,
        };

        dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
        showMessage.success("Tarefa iniciada");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error.errors);
      }
    }
  }

  function handleInterruptTask() {
    showMessage.dismiss();
    showMessage.error("Tarefa interrompida!");
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id='task'
        label='O que irá fazer?'
        placeholder='Ex: Estudar programação'
        name='task'
        ref={taskInput}
      />
      <Tips />

      <Cycles.Root>
        <Cycles.Header />
        <Cycles.List>
          {cycleStep.map((_, index) => {
            const nextCycle = getNextCycle(index);
            const nextCycleType = getNextCycleType(nextCycle);
            return (
              <Cycles.Dot
                title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                status={nextCycleType}
                description={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              />
            );
          })}
        </Cycles.List>
      </Cycles.Root>

      {!state.activeTask && (
        <Button
          aria-label='Iniciar nova tarefa'
          title='Iniciar nova tarefa'
          type='submit'
          icon={<PlayCircleIcon />}
          key='botao_submit'
        />
      )}

      {!!state.activeTask && (
        <Button
          aria-label='Interromper tarefa atual'
          title='Interromper tarefa atual'
          type='button'
          color='red'
          icon={<StopCircleIcon />}
          onClick={handleInterruptTask}
          key='botao_button'
        />
      )}
    </Form>
  );
}
