import { useLocation, useParams } from "react-router-dom";
import { dataAnime } from "../data/dataAnime";
import Navbar from "../components/Navbar/Navbar";
import { BadgePink, BadgeBlack } from "../components/Badge/Badge";
import { useState } from "react";

function AnimeDetail() {
  const [activeEpisode, setActiveEpisode] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const anime = location.state || dataAnime.find((anime) => anime.id === parseInt(id));


  if (!anime) {
    return <p>Anime tidak ditemukan.</p>;
  }

  const { image, title, statusComplete, description, genre, episode, views, rating, episodes } = anime;

  function handleActiveEpisode(index){
    setActiveEpisode(index)
  }

  return (
    <div>
      <div className="mb-14">
        <Navbar></Navbar>
      </div>
      <div className="w-4/5 m-auto rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
      <h1 className="ml-2 font-semibold text-xl mt-3">{title}</h1>
      <div className="flex gap-1">
        <BadgePink>{statusComplete ? "Completed" : "On Going"}</BadgePink>
        <BadgePink>{genre}</BadgePink>
      </div>
      <p>{description}</p>
      <div>
          <iframe width="560" height="315" src={episodes[0].link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <p>{episode} episodes</p>
      <p>{views.toLocaleString('de-De')} views</p>
      <p>{rating} rating</p>
      <div>
        {episodes.map((episode, index) => (
          <BadgeBlack 
          key={index} 
          active={index == activeEpisode} 
          setActiveEpisode={() => handleActiveEpisode(index)}>
            Episode {episode.episode}
          </BadgeBlack>
        ))}
      </div>
    </div>
  );
}

export default AnimeDetail;
