import { createContext } from "react";

import { TaskContextProps } from "../../types";
import { initialTaskState } from "./initialState";

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
