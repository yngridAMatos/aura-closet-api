# Aura Closet

Aplicação web de e-commerce desenvolvida com foco em uma interface limpa e responsiva. O projeto simula uma vitrine de vestuário feminino com recursos de busca, filtros por categoria, gerenciamento de carrinho de compras e integração para fechamento de pedidos via WhatsApp.

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS

## Arquitetura e Decisões Técnicas

- **Headless Commerce:** O catálogo de produtos é desacoplado do código principal, sendo consumido de forma assíncrona a partir de um arquivo de dados estruturado (`products.json`).
- **Roteamento:** Navegação entre a vitrine principal e a página de documentação técnica (`/como-fiz`).

## Como Executar o Projeto Localmente

Certifique-se de ter o Node.js instalado. No terminal, execute os comandos:

```bash
# Clone o repositório
git clone [https://github.com/yngridAMatos/aura-closet-api.git](https://github.com/yngridAMatos/aura-closet-api.git)

# Entre na pasta
cd aura-closet-api

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev