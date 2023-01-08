/** @format */

import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "e3c99cd832mshe23f39dd3d352e7p16d7c3jsnea78a275fea5",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
