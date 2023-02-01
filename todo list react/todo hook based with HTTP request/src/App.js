import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={createBrowserRouter(routes)} />
    </React.StrictMode>
  );
}

export default App;
