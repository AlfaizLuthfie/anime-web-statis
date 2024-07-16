import { Link } from "react-router-dom";
import { BadgePink } from "../Badge/Badge";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import truncateTitle from "../../utils/truncateTitle";

function CardAnime({ id, image, title, status, genre, episode, views, rating }) {
  title = truncateTitle(title);

  return (
    <Link
      to={{
        pathname: `/anime/${id}`,
        state: {
          id,
        },
      }}
      className="w-[320px] h-[300px] md:w-[280px]  lg:w-[240px] border shadow-lg p-2 rounded-lg flex flex-col justify-between mt-2 cursor-pointer"
    >
      <div>
        <div className="h-[170px] relative">
          <img
            src={image}
            alt={title}
            className="rounded-lg h-full w-full object-cover"
          />
          <p
            className={`absolute right-2 bottom-2 text-white font-medium text-[10px] rounded-md px-3 py-1 ${
              status ? "bg-green-500" : "bg-orange-500"
            }`}
          >
            {status ? "Completed" : "On Going"}
          </p>
        </div>
        <h3 className="font-semibold text-base mt-2">{title}</h3>
      </div>

      <div>
        <div className="flex gap-2">
          <BadgePink>{genre}</BadgePink>
          <BadgePink>{episode} Episodes</BadgePink>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex mt-2 items-center gap-1 text-slate-700">
            <MdOutlineRemoveRedEye />
            <p className="text-sm">{views}</p>
          </div>
          <div className="flex items-center gap-[2px] text-yellow-500">
            <p className="font-semibold">{rating}</p>
            <FaStar />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardAnime;
