import React from "react";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { postData } from "../api/loginApi";

const login = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data: data } = useQuery("data");

  return <div>login</div>;
};

export default login;
