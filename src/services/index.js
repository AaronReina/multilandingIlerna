import axios from "axios";

export default axios.create({
  baseURL: "http://aaronreinailerna.n3net.es/:8000",
  // baseURL: "http://privatebackend:8000",

  timeout: 10000,
});
