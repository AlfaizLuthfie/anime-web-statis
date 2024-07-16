import React, { useState } from "react";
import { dataAnime } from "../../data/dataAnime";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SearchAnime from "../SearchInput/SearchAnime";
import FilterButton from "../../Filters/FilterButton";
import FilterPopUp from "../../Filters/FilterPopUp";
import CardAnime from "../Card/CardAnime";
import Pagination from "../Pagination/Pagination";

function AnimeList() {
  const [showFilterPopUp, setShowFilterPopUp] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredSortBy, setFilteredSortBy] = useState("");
  const animePerPage = 12;

  const handleApplyFilter = (categories, sortBy) => {
    setFilteredCategories(categories);
    setFilteredSortBy(sortBy);
    setShowFilterPopUp(false);
  };

  const handleClearFilter = () => {
    setFilteredCategories([]);
    setFilteredSortBy("");
    setShowFilterPopUp(false);
  };

  const hanldeCloseFilter = () => {
    setShowFilterPopUp(!showFilterPopUp);

  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const filteredAnime = dataAnime
    .filter((anime) => {
      if (filteredCategories.length === 0) {
        return true;
      }
      return filteredCategories.some((category) => anime.genre.includes(category));
    })
    .sort((a, b) => {
      if (filteredSortBy === "Views") {
        return b.views - a.views;
      } else if (filteredSortBy === "Rating") {
        return b.rating - a.rating;
      } else if (filteredSortBy === "Release") {
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredAnime.length / animePerPage);
  const displayedAnime = filteredAnime.slice(
    (currentPage - 1) * animePerPage,
    currentPage * animePerPage
  );

  return (
    <div>
      <Navbar></Navbar>

      <div className="mt-16">
        <div className="flex justify-center gap-1" >
          <SearchAnime></SearchAnime>
          <FilterButton setShowFilter={hanldeCloseFilter}></FilterButton>
        </div>
        {showFilterPopUp && (
          <div>
            <FilterPopUp
              setShowFilter={hanldeCloseFilter}
              onApplyFilter={handleApplyFilter}
              onClearFilter={handleClearFilter}
            ></FilterPopUp>
          </div>
        )}
        <div className="container mt-5 mb-8">
          {/* Display Selected Filters */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Filter yang Dipilih:</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {filteredCategories.length > 0 && (
                <div className="flex items-center gap-1">
                  <span className="font-medium">Kategori:</span>
                  {filteredCategories.map((category) => (
                    <span key={category} className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {category}
                    </span>
                  ))}
                </div>
              )}
              {filteredSortBy && (
                <div className="flex items-center gap-1">
                  <span className="font-medium">Sort By:</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">{filteredSortBy}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-2 lg:gap-3">
            {displayedAnime.map((anime) => (
              <CardAnime
                key={anime.id}
                id={anime.id}
                image={anime.image}
                title={anime.title}
                status={anime.statusComplete}
                genre={anime.genre}
                episode={anime.episode}
                views={anime.views?.toLocaleString("de-DE")}
                rating={anime.rating}
              ></CardAnime>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          ></Pagination>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default AnimeList;
