import AddTaskPage from "./pages/AddTaskPage";
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
        element: <AddTaskPage />,
      },
    ],
  },
];

export default routes;
