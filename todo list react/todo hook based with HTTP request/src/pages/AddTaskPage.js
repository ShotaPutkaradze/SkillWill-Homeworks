import React from "react";
import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import useAddTask from "../hooks/useAddTask";

const AddTaskPage = () => {
  const navigate = useNavigate();

  const { sendPostRequest, isLoading } = useAddTask("backlog");

  const onFormSubmit = (value) => {
    sendPostRequest([{ value, isComplited: false }])
      .then((data) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.StrictMode>
      <AddTask onFormSubmit={onFormSubmit} />
    </React.StrictMode>
  );
};

export default AddTaskPage;
