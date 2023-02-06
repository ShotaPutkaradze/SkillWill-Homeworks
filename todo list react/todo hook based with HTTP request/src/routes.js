import AddTaskPage from "./pages/AddTaskPage";
import MainPage from "./pages/MainPage";
import MenuLayout from "./layouts/MenuLayout";
import EditTaskPage from "./pages/EditTaskPage";

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
      {
        path: "/edittask/:taskId",
        element: <EditTaskPage />,
      },
    ],
  },
];

export default routes;
