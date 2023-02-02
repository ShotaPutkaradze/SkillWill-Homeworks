import React from "react";
import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import useSendRequest from "../hooks/useSendRequest";

const AddTaskPage = () => {
  const navigate = useNavigate();
  const { sendRequest, isLoading } = useSendRequest({
    url: "/api/v1/backlog",
    method: "POST",
  });
  console.log(isLoading);

  const onFormSubmit = (value) => {
    sendRequest([{ value, isComplited: false }])
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
