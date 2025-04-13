import { SaveIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { showMessage } from "../../adapters/showMessage";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Heading from "../../components/Heading";

import Input from "../../components/Input";
import { APP_NAME } from "../../constants";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionTypes } from "../../types";

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = `Configurações - ${APP_NAME} Pomodoro`;
  }, []);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Digite apenas números para TODOS os campos");
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push("Digite valores entre 1 e 99 para foco");
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push("Digite valores entre 1 e 30 para descanso curto");
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push("Digite valores entre 1 e 60 para descanso longo");
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success("Configurações salvas");
  }

  return (
    <Container>
      <Heading>Configurações</Heading>

      <p style={{ textAlign: "center" }}>
        Modifique as configurações para tempo de foco, descanso curso e descanso
        longo.
      </p>

      <form onSubmit={handleSaveSettings} action='' className='form'>
        <div className='formRow'>
          <Input
            id='workTime'
            label='Foco'
            ref={workTimeInput}
            defaultValue={state.config.workTime}
            type='number'
          />
        </div>
        <div className='formRow'>
          <Input
            id='shortBreakTime'
            label='Descanso curto'
            ref={shortBreakTimeInput}
            defaultValue={state.config.shortBreakTime}
            type='number'
          />
        </div>
        <div className='formRow'>
          <Input
            id='longBreakTime'
            label='Descanso longo'
            ref={longBreakTimeInput}
            defaultValue={state.config.longBreakTime}
            type='number'
          />
        </div>
        <div className='formRow'>
          <Button
            icon={<SaveIcon />}
            aria-label='Salvar configurações'
            title='Salvar configurações'
          />
        </div>
      </form>
    </Container>
  );
}
