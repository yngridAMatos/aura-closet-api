interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export function FilterBar({
  selectedCategory,
  onSelectCategory,
  search,
  onSearchChange,
}: FilterBarProps) {
 
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'vestidos', label: 'Vestidos' },
    { id: 'conjuntos', label: 'Conjuntos' },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 text-sm uppercase tracking-wider transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-black text-white'
                : 'border border-gray-200 hover:border-black'
            }`}
          >
            {cat.label}
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
