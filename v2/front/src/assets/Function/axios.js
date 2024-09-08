import axios from "axios";

export default axios.create({
  baseURL: "https://ahorcado-back.onrender.com/",
  withCredentials: true,
});
