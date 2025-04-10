import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./assets/css/global.css";
import "./assets/css/theme.css";
import About from "./pages/About/index.tsx";
import Home from "./pages/Home.tsx";
import { NotFound } from "./pages/NotFound/index.tsx";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
