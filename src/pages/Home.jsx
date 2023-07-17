import { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenresId from "../components/GamesByGenresId";

const Home = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    console.log("GENREID", id);
    GlobalApi.getGameListByGenresId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="w-full hidden md:block">
        <GenreList
          setGenreId={(genreId) => getGameListByGenresId(genreId)}
          setSelectedGenreName={(name) => setSelectedGenreName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 && gameListByGenres?.length > 0 && (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenresId
              gameList={gameListByGenres}
              selectedGenreName={selectedGenreName}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
