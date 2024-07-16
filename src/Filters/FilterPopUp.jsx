import React, { useState } from 'react';

function FilterPopUp() {
  return (
    <div>
      <FilterOption />
    </div>
  );
}

function FilterOption() {
  const categories = ["Action", "Romance", "Mystery", "Slice of Life"];
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  console.log(selectedCategories)

  return (
    <div className='flex flex-wrap gap-2'>
      {categories.map((category, index) => (
        <FilterBadge
          key={index}
          category={category}
          active={selectedCategories.includes(category)}
          onCategoryChange={handleCategoryChange}
        />
      ))}
    </div>
  );
}

function FilterBadge({ category, active, onCategoryChange }) {
  return (
    <label
      className={`border py-1 px-2 rounded-lg text-sm cursor-pointer ${
        active ? "border-none text-white bg-green-400" : "border-slate-500 text-slate-700"
      }`}
    >
      <input
        type='checkbox'
        value={category}
        checked={active}
        onChange={() => onCategoryChange(category)}
        className='hidden'
      />
      {category}
    </label>
  );
}

export default FilterPopUp;
