import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SearchAnime from '../SearchInput/SearchAnime';
import FilterButton from '../../Filters/FilterButton';
import FilterPopUp from '../../Filters/FilterPopUp';


function AnimeList() {
    const [showFilterPopUp, setShowFilterPopUp] = useState(false);

    function setShowFilter(){
        setShowFilterPopUp(!showFilterPopUp);
    }
  return (
    <div>
        <Navbar></Navbar>

        <div className='mt-16'>
            <div className='flex justify-center gap-2'>
                <SearchAnime></SearchAnime>
                <FilterButton setShowFilter={setShowFilter}></FilterButton>
            </div>
            {showFilterPopUp && (<div><FilterPopUp></FilterPopUp></div>)}
        </div>

        <Footer></Footer>
    </div>
  )
}

export default AnimeList;