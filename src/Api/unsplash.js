import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID DoBqtkrs-4qO6ow0o4evR11v9RscRsRmA1gj4Vl7R4M",
  },
});
