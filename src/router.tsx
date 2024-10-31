import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./assets/pages/Home";
import Card from "./assets/pages/Card";

// page components

// router creation

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card",
        element: <Card />,
      },
    ],
  },
]);
