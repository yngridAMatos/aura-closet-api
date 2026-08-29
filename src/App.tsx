import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

import {type CartItem, type Product} from './types.ts';
import Footer from "./components/Footer.tsx";
import CartDrawer from "./components/CartDrawer.tsx";

export default function App() {
 const [products, setProducts] = useState<Product[]>([]);
const [categorias, setCategorias] = useState<string[]>(['todos']);

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen]= useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        const categoriasUnicas: string[] = Array.from(new Set(data.map((p: Product) => p.categoria)));
        setCategorias(['todos', ...categoriasUnicas]);
      })
      .catch((err) => { 
        console.error('Erro ao carregar o catálogo.', err);
        setError('Não foi possível carregar o catálogo.');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.nome.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === 'todos' || product.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product, selectedSize: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.tamanhoSelecionado === selectedSize
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.tamanhoSelecionado === selectedSize
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantidade: 1, tamanhoSelecionado: selectedSize }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, size: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id && item.tamanhoSelecionado === size) {
            const novaQtd = item.quantidade + delta;
            return novaQtd > 0 ? { ...item, quantidade: novaQtd } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: number, size: string) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.tamanhoSelecionado === size)));
  };

  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantidade, 0);
  
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header cartCount={totalItemsInCart} onOpenCart={() => setIsCartOpen(true)}/>

      <main className="max-w-7xl mx-auto px-6 py-12">
          <FilterBar
            categorias={categorias}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            search={search}
            onSearchChange={setSearch}
          />
          {isLoading && <p>Carregando produtos...</p>}
          {error && <p>{error}</p>}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))
              ): (
                <p>Nenhum produto encontrado.</p>
              )}
              </div>
          )}
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

     <Footer/>
    </div>
  );
}

