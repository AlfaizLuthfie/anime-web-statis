import { useLocation, useParams } from "react-router-dom";
import { dataAnime } from "../data/dataAnime";
import Navbar from "../components/Navbar/Navbar";
import { BadgePink, BadgeBlack } from "../components/Badge/Badge";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

function AnimeDetail() {
  const [activeEpisode, setActiveEpisode] = useState(0);

  const { id } = useParams();
  const location = useLocation();
  const anime =
    location.state || dataAnime.find((anime) => anime.id === parseInt(id));

  if (!anime) {
    return <p>Anime tidak ditemukan.</p>;
  }

  const {
    image,
    title,
    statusComplete,
    description,
    genre,
    episode,
    views,
    rating,
    episodes,
  } = anime;

  function handleActiveEpisode(index) {
    setActiveEpisode(index);
  }

  return (
    <div>
      <div className="mb-14">
        <Navbar></Navbar>
      </div>
      <div className="container">
        <div className="w-4/5 m-auto rounded-lg overflow-hidden relative md:w-2/3">
          <img src={image} alt={title} className="w-full h-full" />
          <p className="flex items-center gap-0.5 text-yellow-600 bg-white absolute right-2 bottom-2 rounded-lg px-2 py-1 text-sm">
            {rating} <FaStar />
          </p>
        </div>
        <h1 className="font-semibold text-xl mt-3 md:text-2xl lg:text-3xl lg:mb-1 lg:text-center">{title}</h1>
        <div className="flex gap-1 lg:justify-center lg:mb-4">
          <BadgePink>{statusComplete ? "Completed" : "On Going"}</BadgePink>
          <BadgePink>{genre}</BadgePink>
          <BadgePink>{views.toLocaleString("de-De")} Views</BadgePink>
        </div>
        <p className="text-justify mt-2 mb-2 text-base text-slate-800 lg:mt-4">{description}</p>
        <div>
          <iframe
            className="w-full h-[240px] md:h-[380px] lg:h-[480px]"
            src={episodes[activeEpisode].link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-wrap mt-3 justify-center ">
          {episodes.map((episode, index) => (
            <div className="mb-1" key={index}>
              <BadgeBlack
                active={index == activeEpisode}
                setActiveEpisode={() => handleActiveEpisode(index)}
              >
                Episode {episode.episode}
              </BadgeBlack>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
      <Footer></Footer>
      </div>
    </div>
  );
}

export default AnimeDetail;
