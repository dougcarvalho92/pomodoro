import { createContext } from "react";

import { TaskStateModel } from "../../types";
import { TaskActionModel } from "./actions";
import { initialTaskState } from "./initalState";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
