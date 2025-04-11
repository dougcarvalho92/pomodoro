export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timer chega ao final
  interruptDate: number | null; // quando a task for interrompida
  type: keyof TaskStateModel["config"];
};
export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
  CHANGE_SETTINGS = "CHANGE_SETTINGS",
}

export type TaskActionsWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionTypes.CHANGE_SETTINGS;
      payload: TaskStateModel["config"];
    };

export type TaskActionsWithoutPayload =
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    };

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;

export type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};
