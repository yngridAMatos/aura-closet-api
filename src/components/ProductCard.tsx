import {type Product} from '../types.ts';

interface ProductCardProps {
  product: Product;
}

function ProductCard( { product }: ProductCardProps) {
   return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-4">
        <img
          src={product.imagem}
          alt={product.nome}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] px-2 py-1 tracking-widest uppercase text-[#b76e79] font-semibold border border-[#b76e79]/20">
          {product.categoria}
        </span>
      </div>
      <h3 className="text-sm font-medium tracking-wide mb-1">{product.nome}</h3>
      <p className="text-xs text-gray-500 mb-2 line-clamp-1">{product.descricao}</p>
      <span className="text-sm font-semibold text-black tracking-wide">
        R$ {product.preco.toFixed(2)}
      </span>
      <button className="bg-black text-white text-xs uppercase tracking-widest px-4 py-2 hover:bg-[#b76e79] transition-colors">
        Eu Quero
      </button>
    </div>
  );
}

export default ProductCard
