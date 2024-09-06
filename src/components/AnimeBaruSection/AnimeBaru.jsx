import { useState } from "react";
import { dataAnime } from "../../data/dataAnime";
import CardAnime from "../Card/CardAnime";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import SearchAnime from "../SearchInput/SearchAnime";


function AnimeBaru({ lihatLainnya = false }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Mendefinisikan ada berapa data pada satu halaman
  const animePerPage = 12;
  
  // Mengurutkan data berdasarkan tanggal upload
  const sortedAnime = dataAnime.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
  // Mendefinsikan total angka pada pagination
  const totalPages = Math.ceil(dataAnime.length / animePerPage);
  // Mengambil data yang sesuai
  const currentData = sortedAnime.slice((currentPage - 1) * animePerPage, currentPage * animePerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <div>
        {/* <SearchAnime></SearchAnime> */}
      </div>
      <div className="flex justify-between">
        <h3 className="font-semibold lg:text-lg">Anime Terbaru </h3>
        <Link to="/anime-baru" className={`text-sm ${lihatLainnya ? "inline-block" : "hidden"}`}>
          Lihat Lainnya
        </Link>
      </div>

      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-2 lg:gap-3">
          {currentData.map((anime) => (
            <CardAnime 
            key={anime.id}
            id={anime.id}
            image={anime.image}
            title={anime.title}
            status={anime.statusComplete}
            genre={anime.genre}
            episode={anime.episode}
            views={anime.views?.toLocaleString('de-DE')}
            rating={anime.rating}>
            </CardAnime>
          ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}></Pagination>
    </div>
  );
}

export default AnimeBaru;
