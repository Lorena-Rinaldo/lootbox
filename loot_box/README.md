<p align="center">
  <img src="public/logo/logo.png" alt="Logo Loot Box" width="120" />
</p>

# LOOT BOX - Loja de Jogos Digitais

Next.js | TypeScript | Tailwind CSS

## Sobre o Projeto

LOOT BOX é uma loja virtual de jogos digitais desenvolvida com foco em visual moderno, navegação simples e experiência responsiva. O projeto apresenta uma vitrine de games com produtos em destaque, catálogo completo e página de contato.

A interface utiliza uma identidade visual escura com detalhes em roxo e azul, trazendo uma estética gamer para destacar os cards, banners e seções principais.

## Funcionalidades

- Home com carrossel dinâmico de jogos em destaque
- Catálogo de produtos com cards de jogos digitais
- Página de contato com formulário personalizado
- Menu responsivo para desktop e mobile
- Cards com imagem, descrição, preço e selo de destaque
- Animações e transições com Framer Motion
- Layout responsivo adaptado para desktop, tablet e celular

## Tecnologias Utilizadas

| Tecnologia | Descrição |
| --- | --- |
| Next.js 16 | Framework React para aplicações web modernas |
| React 19 | Biblioteca para construção de interfaces |
| TypeScript | Tipagem estática para mais segurança no código |
| Tailwind CSS 4 | Estilização utility-first e responsiva |
| Framer Motion | Animações e transições na interface |
| Embla Carousel | Carrossel interativo da página inicial |
| Lucide React | Ícones modernos usados na navegação e formulário |
| Radix UI / shadcn | Base para componentes reutilizáveis de interface |

## Instalação

### Pré-requisitos

- Node.js 20 ou superior
- npm, yarn, pnpm ou bun

### Passos para instalação

Clone o repositório:

```bash
git clone https://github.com/Lorena-Rinaldo/lootbox.git
cd lootbox/loot_box
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```bash
http://localhost:3000
```

## Scripts Disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o projeto em ambiente de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Executa a versão de produção |
| `npm run lint` | Executa a verificação de lint |

## Estrutura do Projeto

```txt
loot_box/
|-- public/
|   |-- images/             # Imagens usadas em banners e placeholders
|   |-- logo/               # Logo da aplicação
|   `-- produtos/           # Capas dos jogos do catálogo
|-- src/
|   |-- app/
|   |   |-- contato/
|   |   |   `-- page.tsx    # Página de contato
|   |   |-- produtos/
|   |   |   `-- page.tsx    # Página de produtos
|   |   |-- globals.css     # Estilos globais
|   |   |-- layout.tsx      # Layout principal
|   |   `-- page.tsx        # Página inicial
|   |-- components/
|   |   |-- carrossel/      # Carrossel da Home
|   |   |-- contato-form/   # Formulário de contato
|   |   |-- gamecard/       # Card dos produtos
|   |   |-- grounded/       # Banner/carrossel do jogo Grounded
|   |   |-- peak/           # Banner/carrossel do jogo Peak
|   |   |-- produtos-banner/# Banner da página de produtos
|   |   |-- ui/             # Componentes reutilizáveis
|   |   |-- Footer.tsx      # Rodapé
|   |   `-- Header.tsx      # Cabeçalho e menu
|   `-- lib/
|       `-- utils.ts        # Funções utilitárias
|-- produtos.json           # Base de dados dos produtos
|-- package.json            # Dependências e scripts
`-- tsconfig.json           # Configuração TypeScript
```

## Deploy

Projeto publicado na Vercel: [Acesse o projeto](https://lootbox-beryl.vercel.app/)

## Autora

Desenvolvido por Lorena Rinaldo.

- LinkedIn: [Lorena Rinaldo](https://www.linkedin.com/in/lorena-rinaldo01)
