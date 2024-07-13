import { useState } from "react";
import favoriteAnime from "../../data/favoriteAnime.js";
import { useEffect } from "react";

function FavoriteAnime() {
  const [visibleAnime, setVisibleAnime] = useState([]);

  useEffect(()=>{
    const updateVisibleAnime = () => {
      if(window.innerWidth < 640){
        setVisibleAnime(favoriteAnime.slice(0,3));
      }
      else if (window.innerWidth < 900){
        setVisibleAnime(favoriteAnime.slice(0,4))
      }
      else{
        setVisibleAnime(favoriteAnime.slice(0,7));
      }
    }

    updateVisibleAnime();
    
    window.addEventListener("resize", updateVisibleAnime);
    return () => window.removeEventListener("resize", updateVisibleAnime);
  }, [favoriteAnime])



  return (
    <div>
      <div className="flex justify-between items-center mb-4 text-slate-800">
        <h3 className="font-bold text-lg gap-3">My Favorite</h3>
        <button className="text-sm">Lihat Lainnya</button>
      </div>

      <div className="flex gap-2 md:gap-8">
        {visibleAnime.map((anime, index) => (
          <div className="w-40 rounded-xl overflow-hidden cursor-pointer " key={index}>
            <img
              src={anime.image}
              alt={anime.title}
              className="object-cover w-full h-full shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteAnime;
