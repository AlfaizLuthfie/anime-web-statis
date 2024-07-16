import { IoFilter } from "react-icons/io5";

function FilterButton({setShowFilter}) {
  return (
    <button onClick={setShowFilter} className="flex items-center px-2 gap-1 text-slate-700 border border-slate-600 text-sm rounded-lg"><IoFilter /> Filter</button>
  )
}

export default FilterButton;