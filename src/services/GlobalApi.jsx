import axios from "axios";

const key = "2c46659edc2944298e5bba5a94d861e7";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);

const getAllGames = axiosCreate.get("/games?key=" + key);

const getGameListByGenresId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenresId,
};
