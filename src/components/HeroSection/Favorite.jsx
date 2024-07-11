
import favoriteAnime from "../../data/favoriteAnime.js"

function FavoriteAnime() {
  return (
    <div>
        <div className="flex justify-between items-center">
        <h3 className="text-white mt-8 font-bold mb-2 text-lg gap-3">My Favorite</h3>
        <button className="text-white text-sm">Lihat Lainnya</button>
        </div>
        <div className="flex gap-8">
            {favoriteAnime.map((anime, index) => (
            <div className="w-40 rounded-xl overflow-hidden" key={index}>
                <img src={anime.image} alt={anime.title} className="object-cover w-full h-full shadow-md"/>
            </div>

            ))}
        </div>

    </div>
  )
}

export default FavoriteAnime;