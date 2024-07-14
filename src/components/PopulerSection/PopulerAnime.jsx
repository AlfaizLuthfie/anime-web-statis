import { dataAnime } from "../../data/dataAnime";
import CardAnime from "../Card/CardAnime";

function PopulerAnime() {
  const popularAnime = dataAnime.slice(0,8);
  return (
    <div className="container">
      <div className="flex justify-between">
        <h3 className="font-semibold lg:text-lg ">Popular Anime 🔥</h3>
        <button className="text-sm">Lihat Lainnya</button>
      </div>

      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-2 lg:gap-3">
          {popularAnime.map((anime) => (
              <CardAnime 
              key={anime.id}
              image={anime.image}
              title={anime.title}
              status={anime.statusComplete}
              genre={anime.genre}
              episode={anime.episode}
              views={anime.views?.toLocaleString('de-DE')}
              rating={anime.rating}>
              </CardAnime>
            ))}
      </div>
    </div>
  )
}

export default PopulerAnime