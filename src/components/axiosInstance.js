import React from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jk3JROe3s1ZxvobIKEcf4jkp_Ax_nDyPKRbGfyrYb8c",
  },
  //creates the api call, and authorizes it
});
/**
 * retrieveImagesByCategory returns images by the category
 * @param {string} category - this is a photo category.
 */
export async function retrieveImagesByCategory(category) {
  try {
    const responser = await instance.get(`/search/photos?query=${category}`);

    //
    return responser;
  } catch (error) {}
}
