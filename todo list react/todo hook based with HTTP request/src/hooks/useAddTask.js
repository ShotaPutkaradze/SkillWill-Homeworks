import useSendRequest from "../hooks/useSendRequest";

const useAddTask = (list) => {
  const { sendRequest, isLoading } = useSendRequest({
    url: `/api/v1/${list}`,
    method: "POST",
  });

  return { sendRequest, isLoading };
};

export default useAddTask;
