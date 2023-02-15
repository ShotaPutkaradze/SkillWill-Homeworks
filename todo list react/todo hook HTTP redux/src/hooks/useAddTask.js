import useSendRequest from "../hooks/useSendRequest";

const useAddTask = (list) => {
  const { sendRequest: sendPostRequest, isLoading } = useSendRequest({
    url: `/api/v1/${list}`,
    method: "POST",
  });

  return { sendPostRequest, isLoading };
};

export default useAddTask;
