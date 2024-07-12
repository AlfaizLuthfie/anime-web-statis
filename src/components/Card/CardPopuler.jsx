import { dataAnime } from "../../data/dataAnime";
import { BadgeBlack } from "../Badge/Badge";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";

function CardPopuler() {
  return (
    <div className="container">
      <div className="flex justify-between">
        <h3 className="font-semibold text-md">Popular Anime</h3>
        <button className="text-sm">Lihat Lainnya</button>
      </div>

      {/* Card */}

      {dataAnime.map((anime, index) => (
        <div key={anime.index} className="flex flex-col items-center">
          <div className="w-[320px] h-[300px] border shadow-lg p-2 rounded-lg flex flex-col justify-between mt-3">
            <div>
                <div className="h-[170px]">
                <img
                    src={anime.image}
                    alt={anime.title}
                    className="rounded-lg h-full w-full object-cover "
                />
                </div>
                <h3 className="font-semibold text-base mt-2">{anime.title}</h3>
            </div>

            <div>
              <div className="flex gap-2">
                <BadgeBlack>{anime.genre}</BadgeBlack>
                <BadgeBlack>{anime.episode} Episodes</BadgeBlack>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex mt-2 items-center gap-1 text-slate-700">
                  <MdOutlineRemoveRedEye />
                  <p className="text-sm">
                    {anime.views.toLocaleString("id-ID")}
                  </p>
                </div>

                <div className="flex items-center gap-[2px] text-yellow-500 ">
                  <p className="font-semibold">{anime.rating}</p>
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="flex flex-col items-center">
        <div className="w-[320px] border shadow-lg p-2 rounded-lg">
          <div className="h-[170px]">
            <img
              src={dataAnime[0].image}
              alt={dataAnime[0].title}
              className="rounded-lg h-full w-full object-cover "
            />
          </div>
          <h3 className="font-semibold text-base mt-2">{dataAnime[0].title}</h3>

          <div className="flex gap-2">
            <BadgeBlack>{dataAnime[0].genre}</BadgeBlack>
            <BadgeBlack>{dataAnime[0].episode} Episodes</BadgeBlack>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex mt-2 items-center gap-1 text-slate-700">
              <MdOutlineRemoveRedEye />
              <p className="text-sm">
                {dataAnime[0].views.toLocaleString("id-ID")}
              </p>
            </div>

            <div className="flex items-center gap-[2px] text-yellow-500">
              <p className="font-semibold">{dataAnime[0].rating}</p>
              <FaStar />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CardPopuler;
