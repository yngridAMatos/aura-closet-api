import { Link } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

function Header({ cartCount, onOpenCart }: HeaderProps) {

  return (
    <div>
        <header className="border-b border-gray-100 py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-0 bg-white/90 backdrop-blur-md z-50">
          <h1 className="text-2xl font-serif tracking-widest uppercase text-black">
            Aura <span className="text-[#b76e79]">Closet</span>
          </h1>

          <Link 
            to="/como-fiz" 
            className="text-xs uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
            Como Fiz / Vídeo
          </Link>

          <button 
          onClick={onOpenCart}
          aria-label="Abrir carrinho."
          className="relative text-xs uppercase tracking-widest border border-gray-200 px-4 py-2 hover:border-black transition-colors cursor-pointer flex items-center gap-2"
        >
          Carrinho
          {cartCount > 0 && (
            <span className="bg-[#b76e79] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
        </header>
        
        <section className="bg-black text-white py-16 px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 tracking-wide">Moda & Elegância</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-light">
            Descubra nossa seleção exclusiva de vestidos e conjuntos com o caimento perfeito para o seu estilo.
          </p>
        </section>
      </div>
  )
}

export default Header
