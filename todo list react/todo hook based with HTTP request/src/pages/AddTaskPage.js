import React from "react";
import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import usePostMethod from "../hooks/usePostMethod";

const AddTaskPage = () => {
  const navigate = useNavigate();
  const { sendRequest, isLoading } = usePostMethod({
    url: "/api/v1/backlog",
    method: "POST",
  });
  console.log(isLoading);

  const onFormSubmit = (value) => {
    sendRequest([{ value }])
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
