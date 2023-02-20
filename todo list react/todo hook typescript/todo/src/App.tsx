import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import { FC } from "react";

const App: FC = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
