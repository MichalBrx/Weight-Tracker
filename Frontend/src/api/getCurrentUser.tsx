import axios from "axios";

const fetchUser = axios.create({
  baseURL: "http://192.168.0.17:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getCurrentUser = async () => {
  return await fetchUser.get("/user");
};
