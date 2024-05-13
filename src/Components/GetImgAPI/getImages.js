import axios from "axios";
import { API_KEY } from "./config.js";

const URL = "https://pixabay.com/api/";

async function getImages(userInput, page = 1) {
  const apiKey = API_KEY;
  const apiUrl = `${URL}?key=${apiKey}&q=${encodeURIComponent(
    userInput
  )}&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default getImages;
