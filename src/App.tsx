import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

import {type Product} from './types.ts';
import Footer from "./components/Footer.tsx";

export default function App() {
 const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Carregando o catálogo desacoplado via fetch (Headless Commerce)
  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Erro ao carregar o catálogo:', err));
  }, []);

  // Lógica de busca e filtro
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.nome.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'todos' || product.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header/>

      <main className="max-w-7xl mx-auto px-6 py-12">
          <FilterBar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            search={search}
            onSearchChange={setSearch}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

     <Footer/>
    </div>
  );
}

