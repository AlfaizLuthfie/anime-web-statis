import React, { useState } from 'react';
import CloseButton from '../components/Button/CloseButton';

function FilterPopUp({ setShowFilter, onApplyFilter, onClearFilter }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState('');

  const categories = ["Action", "Romance", "Mystery", "Slice of Life", "Drama", "Comedy", "Horror", "Supernatural"];
  const sortby = ["Views", "Rating", "Release"];

  const handleCategoryChange = (data) => {
    if (selectedCategories.includes(data)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== data));
    } else {
      setSelectedCategories([...selectedCategories, data]);
    }
  };

  const handleSortByChange = (data) => {
    setSelectedSortBy(data);
  };

  const handleApplyFilter = () => {
    onApplyFilter(selectedCategories, selectedSortBy);
  };

  const handleClearFilter = () => {
    setSelectedCategories([]);
    setSelectedSortBy('');
    onClearFilter();
  };

  return (
    <div className='w-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white center border border-slate-900 px-10 py-4 rounded-lg z-50'>
      <div className='absolute right-4 top-2'>
        <CloseButton setShow={setShowFilter} />
      </div>
      <FilterOption label="Filter by Category" datas={categories} selectedItems={selectedCategories} onItemChange={handleCategoryChange} />
      <FilterOption label="Sort By" datas={sortby} selectedItems={[selectedSortBy]} onItemChange={handleSortByChange} />
      <div className="mt-4">
        <button onClick={handleApplyFilter} className='bg-primary text-white text-sm py-2 px-4 rounded-xl'>
          Lihat Hasil
        </button>
        <button onClick={handleClearFilter} className='border border-primary text-primary text-sm py-2 px-4 rounded-xl'>
          Hapus Filter
        </button>
      </div>
    </div>
  );
}

function FilterOption({ label, datas, selectedItems, onItemChange }) {
  return (
    <>
      <h2 className='mb-2 text-slate-800 font-medium mt-4'>{label}</h2>
      <div className='flex flex-wrap gap-2'>
        {datas.map((data, index) => (
          <FilterBadge
            key={index}
            data={data}
            active={selectedItems.includes(data)}
            onItemChange={onItemChange}
          />
        ))}
      </div>
    </>
  );
}

function FilterBadge({ data, active, onItemChange }) {
  return (
    <label
      className={`border py-1 px-2 rounded-lg text-sm cursor-pointer ${active ? "border-none text-white bg-green-400" : "border-slate-500 text-slate-700"}`}
    >
      <input
        type='checkbox'
        value={data}
        checked={active}
        onChange={() => onItemChange(data)}
        className='hidden'
      />
      {data}
    </label>
  );
}

export default FilterPopUp;
