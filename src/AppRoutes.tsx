import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import { MessagesContainer } from "./components/MessagesContainer";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import About from "./pages/About";
import { History } from "./pages/History";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Settings } from "./pages/Settings";

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
          element: <History />,
        },
        {
          path: "settings",
          element: <Settings />,
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
