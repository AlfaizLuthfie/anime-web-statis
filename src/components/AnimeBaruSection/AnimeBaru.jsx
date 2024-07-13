import { useState } from "react";
import { dataAnime } from "../../data/dataAnime";
import CardAnime from "../Card/CardAnime";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

function AnimeBaru({ lihatLainnya = false }) {
  const [currentPage, setCurrentPage] = useState(1);
  const animePerPage = 12;

  // Mengurutkan data berdasarkan tanggal upload
  const sortedAnime = dataAnime.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
  const totalPages = Math.ceil(sortedAnime.length / animePerPage);

  const currentData = sortedAnime.slice((currentPage - 1) * animePerPage, currentPage * animePerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <div className="flex justify-between">
        <h3 className="font-semibold lg:text-lg">Anime Terbaru </h3>
        <Link to="/anime-baru" className={`text-sm ${lihatLainnya ? "inline-block" : "hidden"}`}>
          Lihat Lainnya
        </Link>
      </div>

      <CardAnime dataAnime={currentData}></CardAnime>
      
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={handlePageChange}></Pagination>
    </div>
  );
}

export default AnimeBaru;
