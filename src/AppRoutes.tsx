import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import { MessagesContainer } from "./components/MessagesContainer";
import { TaskContextProvider } from "./context/TaskContext/TaskContextProvider";
import About from "./pages/About";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "history",
          element: <h1>Histórico</h1>,
        },
        {
          path: "settings",
          element: <h1>Config</h1>,
        },
        {
          path: "about-pomodoro",
          element: <About />,
        },
      ],
      errorElement: <NotFound />,
    },
  ]);
  return (
    <MessagesContainer>
      <TaskContextProvider>
        <RouterProvider router={router} />
      </TaskContextProvider>
    </MessagesContainer>
  );
}
