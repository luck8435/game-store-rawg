import { useEffect, useState } from "react";
import PropType from "prop-types";

import GlobalApi from "../services/GlobalApi";

const GenreList = ({ setGenreId, setSelectedGenreName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            setGenreId(item.id);
            setSelectedGenreName(item.name);
          }}
          key={index}
          className={`flex gap-2 group items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 ${
            activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex === index ? "scale-105" : null
            }`}
          />
          <h3
            className={`dark:text-white text-lg group-hover:font-bold transition-all ease-out duration-300 ${
              activeIndex === index ? "font-bold" : null
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

GenreList.propTypes = {
  setGenreId: PropType.func,
  setSelectedGenreName: PropType.func,
};

export default GenreList;
