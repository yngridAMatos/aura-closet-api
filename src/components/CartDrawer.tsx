import type { CartItem } from "../types";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    cart: CartItem[];
    onUpdateQuantity: (id: number,size:string, delta: number) => void;
    onRemoveItem: (id: number, size: string) => void;
}

function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }: CartDrawerProps) {
    if(!isOpen) return null;

    const total = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

   const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let mensagem = "*Olá! Gostaria de finalizar o pedido da Aura Closet:*\n\n";
    cart.forEach((item) => {
      mensagem += `▫️ ${item.quantidade}x ${item.nome} (Tam: *${item.tamanhoSelecionado}*) - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });
    mensagem += `\n*Total:* R$ ${total.toFixed(2)}`;

    const numeroWhatsApp = "5583993735130"; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-sm font-medium tracking-widest uppercase">Seu carrinho</h2>
            <button onClick={onClose} aria-label="Fechar carrinho" className="text-gray-400 hover:text-black text-lg cursor-pointer">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 py-12 text-sm">Seu carrinho está vazio.</p>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.tamanhoSelecionado}`} className="flex gap-4 items-center border-b border-gray-50 pb-4">
                  <img src={item.imagem} alt={item.nome} className="w-16 h-20 object-cover bg-gray-50" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.nome}</h4>
                    <p className="text-xs text-gray-500">Tam: <span className="font-semibold text-black">{item.tamanhoSelecionado}</span></p>
                    <p className="text-xs text-gray-500 mb-2">R$ {item.preco.toFixed(2)}</p>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.tamanhoSelecionado, -1)}
                        aria-label={`Diminuir quantidade de ${item.nome}`}
                        className="w-6 h-6 border border-gray-200 flex items-center justify-center text-xs hover:border-black cursor-pointer"
                      >-</button>
                      <span className="text-xs font-medium">{item.quantidade}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.tamanhoSelecionado, 1)}
                        aria-label={`Aumentar quantidade de ${item.nome}`}
                        className="w-6 h-6 border border-gray-200 flex items-center justify-center text-xs hover:border-black cursor-pointer"
                      >+</button>
                    </div>
                  </div>

                  <button 
                    onClick={() => onRemoveItem(item.id, item.tamanhoSelecionado)}
                    aria-label={`Remover ${item.nome} do carrinho`}
                    className="text-gray-600 hover:text-red-500 text-xs cursor-pointer"
                  >
                    Remover
                  </button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-6 bg-gray-50/50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-wider text-gray-600">Total</span>
                <span className="text-lg font-semibold">R$ {total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-black text-white py-3 text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                Finalizar Pedido via WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
