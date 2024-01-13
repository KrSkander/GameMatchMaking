import axios from "axios";

const options = {
  method: "GET",
  url: "https://ultimate-tennis1.p.rapidapi.com/global_players_stats/serve/career/all",
  headers: {
    "X-RapidAPI-Host": "ultimate-tennis1.p.rapidapi.com",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  },
};

const getPlayersStats = async () => {
  try {
    const response = await axios(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const TennisNewsService = {
  getPlayersStats,
};

export default TennisNewsService;
