import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./assets/css/global.css";
import "./assets/css/theme.css";
import Home from "./pages/Home.tsx";

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
        element: <h1>About</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
