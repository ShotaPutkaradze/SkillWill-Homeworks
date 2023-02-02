import AddTask from "./pages/AddTask";
import MainPage from "./pages/MainPage";
import MenuLayout from "./layouts/MenuLayout";

const routes = [
  {
    path: "/",
    element: <MenuLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/addtask",
        element: <AddTask />,
      },
    ],
  },
];

export default routes;
