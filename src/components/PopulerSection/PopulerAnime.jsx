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
        <CardAnime dataAnime={popularAnime}></CardAnime>
    </div>
  )
}

export default PopulerAnime