import Home from "./pages/Home";
import About from "./pages/About";
import Facts from "./pages/Facts";
import Wildcard from "./pages/Wildcard";
import MainPage from "./layouts/MainPage";

const routes = [
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "facts",
        element: <Facts />,
      },
      {
        path: "facts/:factId",
        element: <Facts />,
      },
      {
        path: "*",
        element: <Wildcard />,
      },
    ],
  },
];
export default routes;
