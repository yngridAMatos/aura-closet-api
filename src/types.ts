export interface Product {
  id: number;
 nome: string;
  categoria: 'vestidos' | 'conjuntos';
  preco: number;
  imagem: string;
  descricao: string;
}