import heroImg from "../../assets/hero_background.jpg";
import {Badge} from "../Badge/Badge";
import PrimaryButton from "../Button/PrimaryButton";
import SearchAnime from "../SearchInput/SearchAnime";
import FavoriteAnime from "./Favorite";

const dataAnime = [
  {
    title: "Kimetsu no Yaiba Demon Slayer",
    episode: "26 Episode",
    genre: ["Shounen", "Action"],
    image: heroImg,
  },
];

function Hero() {
  const anime = dataAnime[0]; // Mengambil data anime pertama

  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative flex flex-col justify-center"
        style={{ backgroundImage: `url(${anime.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* <div className="absolute top-1/2 lg:top-2/3 transform -translate-y-1/2 container lg:ml-16"> */}
        <div className="z-10 relative container">

          <div>
            <h1 className="text-white text-4xl lg:text-5xl font-semibold uppercase mb-2 cursor-default md:w-3/4 lg:w-1/2">
              {anime.title}
            </h1>

            <div className="flex gap-1 mt-2">
              <p className="text-white border border-white w-24 rounded-lg text-xs pl-2 py-1 hover:bg-primary hover:border-primary cursor-pointer">
                {anime.episode}
              </p>
              {anime.genre.map((genre, index) => (
                <Badge key={index}>{genre}</Badge>
              ))}
            </div>

            <PrimaryButton>Tonton Sekarang</PrimaryButton>
          </div>
        </div>

        <div className="flex justify-center rounded-lg mt-8">
          <SearchAnime></SearchAnime>
        </div>

      </div>

      <div className="container mt-4 lg:mt-10 ">
        <FavoriteAnime></FavoriteAnime>
      </div>
    </>
  );
}

export default Hero;
