import React from "react";
import { Link } from "react-router-dom";

function Pagination({ currentPage, totalPages, setCurrentPage }) {

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="text-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <Link key={index + 1} to={index === 0 ? "/anime-baru" : `/anime-baru?page=${index + 1}`}>
          <button
            className={`w-[30px] h-[30px] mr-1 border-2 text-primary border-primary rounded-md ${currentPage === index + 1 ? 'bg-primary text-white' : ''}`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
