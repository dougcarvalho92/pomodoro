import { createContext, useContext, useState } from "react";
import { DefaultProps, TaskAction, TaskProps, TaskState } from "../types";
type TaskContextProps = {
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
};
const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export const TaskProvider = ({ children }: DefaultProps) => {
  const [tasks, setTasks] = useState<TaskProps[] | []>([]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export function useTask() {
  const context = useContext(TaskContext);
  return context;
}
