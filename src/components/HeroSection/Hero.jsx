import heroImg from "../../assets/hero_background.jpg";
import FavoriteAnime from "./Favorite";

const dataAnime = [
  {
    title: "Kimetsu no Yaiba Demon Slayer",
    episode: "26 Episode",
    genre: ["Shounen", "Action"],
    image: heroImg
  },
];

function Hero() {
  const anime = dataAnime[0]; // Mengambil data anime pertama

  return (
    <>
      <div
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${anime.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute top-2/3 transform -translate-y-1/2 container ml-16">
          <h1 className="text-white text-5xl font-semibold uppercase mb-2 cursor-default w-1/2">
            {anime.title}
          </h1>
          <div className="flex gap-1 mt-2">
            <p className="text-white border border-white w-24 rounded-lg text-xs pl-2 py-1 hover:bg-primary hover:border-primary cursor-pointer">
              {anime.episode}
            </p>
            {anime.genre.map((genre, index) => (
              <p key={index} className="text-white border border-white w-24 rounded-lg text-xs pl-2 py-1 hover:bg-primary hover:border-primary cursor-pointer">
                {genre}
              </p>
            ))}
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-2xl mt-8 text-sm hover:bg-primary/90">
            Tonton Sekarang
          </button>

          <div>
            <FavoriteAnime></FavoriteAnime>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
