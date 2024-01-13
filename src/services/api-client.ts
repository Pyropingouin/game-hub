import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "169a6d566e64426eaf3f32242d53963a",
  },
});
