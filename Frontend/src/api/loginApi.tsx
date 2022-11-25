import axios from "axios";

const loginApi = axios.create({
  baseURL: "http://192.168.0.17:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

interface loginUser {
  email: string;
  password: string;
}

export const postData = async (data: loginUser) => {
  return await loginApi.post("/login", data);
};
