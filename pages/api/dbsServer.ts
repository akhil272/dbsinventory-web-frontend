import storage from "@Utils/storage";
import axios from "axios";

export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: { Authorization: `Bearer ${storage().getAccessToken()}` },
});
