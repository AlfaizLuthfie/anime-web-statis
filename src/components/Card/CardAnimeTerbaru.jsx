import { dataAnime } from "../../data/dataAnime";
import { BadgeBlack } from "../Badge/Badge";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";

function CardPopuler() {
  return (
      <div  className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-2 lg:gap-3">
      {dataAnime.map((anime, index) => (
        <>
          <div key={index.id} className="w-[320px] h-[300px] md:w-[280px]  lg:w-[240px] border shadow-lg p-2 rounded-lg flex flex-col justify-between mt-2">
            <div>
                <div className="h-[170px] relative">
                <img
                    src={anime.image}
                    alt={anime.title}
                    className="rounded-lg h-full w-full object-cover "
                />
                <p 
                className={`absolute right-2 bottom-2 text-white font-medium text-[10px] rounded-md px-3 py-1 ${anime.statusComplete ? "bg-green-500" : "bg-orange-500" } bg-green-500`}>
                  {anime.statusComplete ? "Completed" : "On Going"}</p>
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
        </>
      ))}
      </div>
  );
}

export default CardPopuler;
