import PropType from "prop-types";

const TrendingGames = ({ gameList }) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-3xl dark:text-white">Trending Games</h2>
      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                key={index}
                className="bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <img
                  src={item.background_image}
                  className="h-[270px] rounded-t-lg object-cover"
                />
                <h2 className="dark:text-white text-xl font-bold p-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

TrendingGames.propTypes = {
  gameList: PropType.array,
};

export default TrendingGames;
