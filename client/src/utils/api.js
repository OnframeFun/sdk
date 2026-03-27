import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const generateIdea = async (prompt) => {
  const res = await API.post("/ai", { prompt });
  return res.data;
};
