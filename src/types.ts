export interface Product {
  id: number;
  nome: string;
  categoria: 'vestidos' | 'conjuntos';
  tamanhos: string[];
  preco: number;
  imagem: string;
  descricao: string;
}

export interface CartItem extends Product {
  quantidade: number;
  tamanhoSelecionado:string;
}