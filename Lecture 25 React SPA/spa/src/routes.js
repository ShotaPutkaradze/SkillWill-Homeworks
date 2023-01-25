import Home from "./pages/Home";
import About from "./pages/About";
import Facts from "./pages/Facts";

const routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <About />,
    path: "about-us",
  },
  {
    element: <Facts />,
    path: "facts",
  },
];
export default routes;
