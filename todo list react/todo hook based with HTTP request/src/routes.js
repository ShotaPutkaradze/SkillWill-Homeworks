import AddTask from "./components/AddTask";
import MenuLayout from "./layouts/MenuLayout";

const routes = [
  {
    element: <MenuLayout />,
    path: "/",
    children: [
      {
        element: <AddTask />,
        path: "/addtask",
      },
    ],
  },
];

export default routes;
