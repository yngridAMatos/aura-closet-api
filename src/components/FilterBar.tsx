interface FilterBarProps {
  categorias: string [];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

function FilterBar({
  categorias,
  selectedCategory,
  onSelectCategory,
  search,
  onSearchChange,
}: FilterBarProps) {

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
      <div className="flex gap-2">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 text-sm uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-black text-white'
                : 'border border-gray-200 hover:border-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Buscar peça..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border border-gray-200 px-4 py-2 w-full md:w-72 focus:outline-none focus:border-[#b76e79] text-sm"
      />
    </div>
  )
}

export default FilterBar
